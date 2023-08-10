import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FullSection, GradientText } from "../../theme/components";
import videoUrl from "../../assets/elixr_launch.webm"
import videoUrlMp4 from "../../assets/elixr_launch.mp4"
gsap.registerPlugin(ScrollTrigger);

export const PlanetSection = ({ snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const div = section.childNodes[0];
            const video = section.childNodes[1];
            const head1 = div.childNodes[0];
            const head2 = div.childNodes[1];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=1000",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                    pin: true,
                    onLeave: () => {
                        snap(".timelinesection", 450);
                    },
                },
                ease: "none",
            });

            tl.add("start")
                .to(
                    head1,
                    {
                        opacity: 1,
                        translateY: "0vh",
                        duration: 0.2,
                        ease: "power3.easeOut",
                    },
                    "start"
                )
                .to(
                    head2,
                    {
                        opacity: 1,
                        translateY: "0vh",
                        duration: 0.17,
                        delay: 0.03,
                        ease: "power3.easeOut",
                    },
                    "start"
                )
                .to(section, {
                    duration: 0.2,
                })
                .to(div, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    onStart: () => {
                        snap(".planetsection", 900);
                    },
                })
                .to(video, {
                    scale: 1,
                    backgroundSize: "100% 100%",
                    duration: 0.2,
                    opacity: 2,
                })
                .to(section, {
                    duration: 0.1,
                });
        }
    }, []);
    return (
        <FullSection
            className="planetsection flex flex-col justify-center"
            ref={sectionRef}
        >
            <div>
                <p className="text-[32px] leading-[35px] tracking-[-1px] translate-y-[20vh] opacity-0 text-white text-center font-medium 2xl:text-[90px] 2xl:leading-[100px] 2xl:tracking-[-2.7px] xl:text-[76px] xl:leading-[85px] xl:tracking-[-2.3px] lg:text-[61px] lg:leading-[68px] lg:tracking-[-1.8px] md:text-[45.6px] md:leading-[50.6px] md:tracking-[-1.3px]">
                    Creating an ecosystem
                </p>
                <p className="text-[32px] leading-[35px] tracking-[-1px] translate-y-[20vh] opacity-0 text-white text-center font-medium 2xl:text-[90px] 2xl:leading-[100px] 2xl:tracking-[-2.7px] xl:text-[76px] xl:leading-[85px] xl:tracking-[-2.3px] lg:text-[61px] lg:leading-[68px] lg:tracking-[-1.8px] md:text-[45.6px] md:leading-[50.6px] md:tracking-[-1.3px]">
                    called <GradientText>planet.earth</GradientText>
                </p>
            </div>
            <video
                autoPlay muted loop
                className="absolute hidden 2xl:block xl:block lg:block md:block left-[50%] translate-x-[-50%] scale-[2] opacity-0 w-[90vw] h-[calc(90vw/1920*1080)] rounded-[3.7vw] 2xl:w-[76.4vw] 2xl:h-[calc(76.4vw/1920*1080)] xl:w-[76.4vw] xl:h-[calc(76.4vw/1920*1080)] lg:w-[76.4vw] lg:h-[calc(76.4vw/1920*1080)] md:w-[76.4vw] md:h-[calc(76.4vw/1920*1080)] lg:rounded-[49px]"
            >
                <source className="w-full" src={videoUrlMp4} type="video/webm" />
            </video>
        </FullSection>
    );
};
