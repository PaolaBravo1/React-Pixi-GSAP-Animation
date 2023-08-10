import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { FullSection, GradientText } from "../../theme/components";
gsap.registerPlugin(ScrollTrigger);

export const VisionarySection = ({ snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const head1 = section.childNodes[0];
            const head2 = section.childNodes[1];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=1000",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                    pin: true,
                    onLeave: () => {
                        snap(".visionariephotosection", 600);
                    },
                },
                ease: "none",
            });

            tl.to([head1, head2], {
                translateY: "0vh",
                opacity: 1,
                duration: 0.4,
                ease: Power4.easeOut,
            })
                .to(section, {
                    duration: 0.2,
                })
                .to([head1, head2], {
                    translateY: "-20vh",
                    opacity: 0,
                    duration: 0.4,
                    ease: Power4.easeIn,
                });
        }
    });

    return (
        <FullSection
            className="flex flex-col justify-center"
            style={{ backgroundColor: "black" }}
            ref={sectionRef}
        >
            <p className="visionarisection text-white translate-y-[30vh] opacity-0 text-[27px] 2xl:text-[4.2vw] xl:text-[4.2vw] lg:text-[4.2vw] md:text-[4.2vw] text-center font-medium leading-[34px] 2xl:leading-[5.2vw] xl:leading-[5.2vw] lg:leading-[5.2vw] md:leading-[5.2vw] tracking-[-0.8px] 2xl:tracking-[-2px] xl:tracking-[-1.6px] lg:tracking-[-1.2px] md:tracking-[-0.8px] self-center mb-[18px] 2xl:mb-12 xl:mb-[36px] lg:mb-[28px] md:mb-[21px]">
                Meet the <GradientText>visionaries</GradientText> behind
                <br />
                the Elixr ecosystem
            </p>
            <p className="text-white translate-y-[30vh] opacity-0 text-[18px] 2xl:text-[1.45vw] xl:text-[1.45vw] lg:text-[1.45vw] md:text-[1.45vw] font-medium leading-[22px] 2xl:leading-[2.3vw] xl:leading-[2.3vw] lg:leading-[2.3vw] md:leading-[2.3vw] tracking-[-0.5px] self-center text-center">
                A multi-dimensional team consisting of strategists,
                technologists
                <br />
                creatives focused on creating a future that we can be proud of.
            </p>
        </FullSection>
    );
};
