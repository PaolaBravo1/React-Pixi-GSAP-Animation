import styled from "styled-components";
import { HeadingSection } from "./headingSection";
import { SecretSauceSection } from "./secretSauceSection";
import { PlanetSection } from "./planetSection";
import { TimeLineSection } from "./timelineSection";
import { VisionarySection } from "./visionariesSection";
import { FooterSection } from "./footerSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/all";
import { VisionaryPhotoSection } from "./visionariesPhotoSection";

// ScrollTrigger.normalizeScroll(true);
gsap.registerPlugin(ScrollSmoother);

const Container = styled.div`
    background-color: black;
    position: relative;
    width: 100%;
`;

export const LandingPage = ({ assets }: any) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const smootherController = {} as any;

    const snap = (el: any, offset: number = 0, duration: number = 2) => {
        if (document.querySelector(el)) {
            gsap.to(smootherController.smoother, {
                scrollTop:
                    smootherController.smoother.offset(el, "top top") + offset,
                duration,
                ease: "power4.inout",
                overwrite: true,
            });
        }
    };

    useEffect(() => {
        if (contentRef.current) {
            smootherController.smoother = ScrollSmoother.create({
                content: contentRef.current,
                smooth: 4,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
                smoothTouch: true,
            });
        }
    }, []);

    return (
        <Container ref={contentRef} style={{ willChange: "transform" }}>
            <HeadingSection assets={assets} snap={snap} />
            <SecretSauceSection snap={snap} />
            {window.innerWidth >= 768 && <PlanetSection snap={snap} />}
            <TimeLineSection snap={snap} />
            <VisionarySection snap={snap} />
            <VisionaryPhotoSection snap={snap} />
            <FooterSection />
        </Container>
    );
};
