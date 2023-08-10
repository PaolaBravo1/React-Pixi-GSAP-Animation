import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import * as PIXI from "pixi.js";
import { FullSection } from "../../theme/components";
import { GradientText } from "../../theme/components";
import { useCallback, useEffect, useRef } from "react";
import ElixrText from "../../assets/ELIXRText.gif";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);
const TextLayout = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    z-index: 222;
    top: 60%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0px);
    font-size: 10px;
    z-index: 1;
    opacity: 0;

    -webkit-mask-image: linear-gradient(
        to bottom,
        #fff3 0%,
        #fff3 40%,
        #fff 60%,
        #fff 100%
    );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 250%;
    -webkit-mask-position: 0% 0%;
`;

export const HeadingSection = ({ assets, snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            LandingPage(sectionRef.current, assets, snap);
        }
    });
    return (
        <FullSection
            id="heading_section"
            className="flex flex-col items-center justify-center bg-[#000]"
            style={{ backgroundColor: "black" }}
            ref={sectionRef}
        >
            <img
                src={ElixrText}
                className="relative"
                id="heading_text"
                alt="Elixr Text"
            />

            <TextLayout>
                <p className="w-[73.2vw] max-w-[1250px] text-white text-[35px] font-[400] leading-[48px] tracking-[-1px] 2xl:text-[82px] xl:text-[61px] lg:text-[48.5px] md:text-[36.3px] 2xl:leading-[100px] xl:leading-[74.3px] lg:leading-[60px] md:leading-[43.3px] 2xl:tracking-[-2.5px] xl:tracking-[-1.8px] lg:tracking-[-1.5px] md:tracking-[-1.1px] self-center">
                    Elixr is an early stage venture builder that specialises in
                    raising ESG investment and building next generation
                    technologies.
                </p>
            </TextLayout>
        </FullSection>
    );
};

const LandingPage = (domContent: HTMLDivElement, assets: any, snap: any) => {
    const textCont1 = domContent.childNodes[0];

    const text = domContent.childNodes[1] as any;
    const p = text.childNodes[0];

    const app: any = new PIXI.Application({
        backgroundAlpha: 0,
        width: window.innerWidth,
        height: window.outerHeight,
    });
    app.view.style.position = "absolute";
    app.view.style.top = "0px";
    domContent.appendChild(app.view);

    const frameOffset = {
        value: 0,
    };

    const count = 73;
    const frames: PIXI.Texture[] = [];
    for (let i = 1; i <= count; i++) {
        frames.push(assets[i].texture);
    }

    const sprite = new PIXI.AnimatedSprite(frames);
    app.stage.addChild(sprite);
    sprite.anchor.set(0.5, 0.5);
    sprite.x = window.innerWidth / 2;
    const startHeigth = (window.innerHeight * 6) / 5;
    sprite.y = startHeigth;

    sprite.scale.set(
        window.innerHeight > window.innerWidth
            ? window.outerHeight / 1728
            : window.innerWidth / 1728
    );

    const headingTL = gsap.timeline({
        scrollTrigger: {
            trigger: domContent,
            start: "top top",
            end: "+=4000",
            toggleActions: "restart none none reverse",
            scrub: 1,
            pin: true,
            onLeave: () => {
                snap(".secretsection", 800, 1.8);
            },
        },
    });

    const offsetY = { value: 0 };

    let typeSplit = new SplitType(p, {
        types: "lines",
        absolute: true,
    });

    const lines = typeSplit.lines as any;

    const lineCount = lines.length;
    const lineWidth = lines[0].offsetWidth;

    gsap.set(lines, {
        backgroundImage: `linear-gradient(to right, white 0%, #D4312C 5%, #8765F6 20%, white 35%, white 100%)`,
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        backgroundSize: "200% 100%",
        backgroundPosition: "70% 0%",
        border: "none",
    });

    headingTL
        .add("start")
        .to(
            textCont1,
            {
                opacity: 0,
                top: "-30vh",
                duration: 0.3,
            },
            "start"
        )
        .to(
            offsetY,
            {
                value: 1,
                duration: 0.5,
                onUpdate: () => {
                    sprite.y =
                        startHeigth -
                        (startHeigth - window.outerHeight / 2) * offsetY.value;
                },
            },
            "start"
        )
        .to(frameOffset, {
            value: count - 1,
            snap: "value",
            duration: 1.5,
            onUpdate: () => {
                sprite.gotoAndStop(Math.floor(frameOffset.value));
            },
        })
        .to(text, {
            opacity: 1,
            top: "50vh",
            duration: 0.3,
            ease: "none",
        })
        .to(text, {
            webkitMaskPosition: "0% 100%",
            duration: 0.3,
        })
        .to(domContent, { duration: 0.2 })
        .add("start2")
        .to(
            lines,
            {
                backgroundPosition: `-90% 0%`,
                duration: window.innerWidth >= 768 ? 0.165 : 0.157,
                // ease: "power4.in",
                stagger: 0.1,
            },
            "start2"
        )
        .to(
            text,
            {
                webkitMaskPosition: "0% 0%",
                duration: (lineCount - 1) * 0.27,
                delay: 0.05,
            },
            "start2"
        )
        .to(text, {
            opacity: 0,
            top: "40vh",
            duration: 0.2,
        });

    window.addEventListener("resize", () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);

        sprite.scale.set(
            window.innerHeight > window.innerWidth
                ? window.innerHeight / 1728
                : window.innerWidth / 1728
        );
        sprite.x = window.innerWidth / 2;
        sprite.y =
            startHeigth -
            (startHeigth - window.innerHeight / 2) *
                (frameOffset.value / count);
    });
};
