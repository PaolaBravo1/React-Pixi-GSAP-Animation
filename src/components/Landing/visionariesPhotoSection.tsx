import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { FullSection, GradientText } from "../../theme/components";
import Joseph from "../../assets/joseph.png";
import Catalina from "../../assets/catalina.png";
import Jaie from "../../assets/jaie.png";

import styled from "styled-components";
gsap.registerPlugin(ScrollTrigger);

const ImaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35vw;

    @media only screen and (max-width: 1024px) {
        width: 55vw;
    }

    img {
        width: 80%;

        @media only screen and (max-width: 1024px) {
            width: 60%;
        }

        @media only screen and (max-height: 80vw) {
            width: 40vh;
        }
    }
    .first {
        width: 100%;
        @media only screen and (max-height: 80vw) {
            width: 50vh;
        }
    }
`;

const MediaDiv = styled.div`
    left: -12.5vw;
    gap: 10vw;

    @media only screen and (max-width: 1024px) {
        left: -32.5vw;
        gap: 0px;
    }
`;
export const VisionaryPhotoSection = ({ snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const div = section.childNodes[0];
            const name1 = section.childNodes[1];
            const name2 = section.childNodes[2];
            const name3 = section.childNodes[3];
            const imgDivs = gsap.utils.toArray(div.childNodes) as any;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=2000",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                    pin: true,
                    onLeave: () => {
                        snap(".footersection", 200);
                    },
                    snap: {
                        snapTo: "labels",
                        duration: 0.5,
                        delay: 0,
                        ease: "power3.out",
                    },
                },
                ease: "none",
            });

            let offset =
                window.innerWidth <= 1024
                    ? ["-87.5vw", "-142.5vw", "60%"]
                    : ["-57.5vw", "-102.5vw", "80%"];

            const ismapBook = window.innerHeight <= window.innerWidth * 0.8;

            tl.addLabel("start")
                .to(
                    section,
                    {
                        opacity: 1,
                        duration: 0.1,
                    },
                    "start"
                )
                .to(
                    imgDivs,
                    {
                        transform: "translate3D(0, 0, 0)",
                        duration: 0.2,
                    },
                    "start"
                )
                .to(
                    name1,
                    {
                        opacity: 1,
                        duration: 0.1,
                        delay: 0.1,
                    },
                    "start"
                )
                .addLabel("snap2")
                .to(section, {
                    duration: 0.1,
                })
                .addLabel("second")
                .to(
                    div,
                    {
                        left: offset[0],
                        duration: 0.2,
                    },
                    "second"
                )
                .to(
                    imgDivs[1].childNodes[0],
                    {
                        width: ismapBook ? "40vh" : offset[2],
                        duration: 0.2,
                    },
                    "second"
                )
                .to(
                    imgDivs[2].childNodes[0],
                    {
                        width: ismapBook ? "50vh" : "100%",
                        duration: 0.2,
                    },
                    "second"
                )
                .to(
                    name1,
                    {
                        opacity: 0,
                        duration: 0.1,
                    },
                    "second"
                )
                .to(
                    name2,
                    {
                        opacity: 1,
                        duration: 0.1,
                        delay: 0.1,
                    },
                    "second"
                )
                .addLabel("snap2")
                .to(section, {
                    duration: 0.1,
                })
                .addLabel("third")
                .to(
                    div,
                    {
                        left: offset[1],
                        duration: 0.2,
                    },
                    "third"
                )
                .to(
                    imgDivs[2].childNodes[0],
                    {
                        width: ismapBook ? "40vh" : offset[2],
                        duration: 0.2,
                    },
                    "third"
                )
                .to(
                    imgDivs[3].childNodes[0],
                    {
                        width: ismapBook ? "50vh" : "100%",
                        duration: 0.2,
                    },
                    "third"
                )
                .to(
                    name2,
                    {
                        opacity: 0,
                        duration: 0.1,
                    },
                    "third"
                )
                .to(
                    name3,
                    {
                        opacity: 1,
                        duration: 0.1,
                        delay: 0.1,
                    },
                    "third"
                )
                .addLabel("snap3")
                .to(section, {
                    duration: 0.2,
                });
        }
    });

    return (
        <FullSection
            className="visionariephotosection flex flex-col justify-center opacity-0"
            style={{ backgroundColor: "black" }}
            ref={sectionRef}
        >
            <MediaDiv
                className="relative left-[-142.5vw] lg:left-[-102.5vw] md:left-[-102.5vw] sm:left-[-142.5vw] flex gap-[0vw] lg:gap-[10vw] md:gap-[10vw] sm:gap-[0vw]"
                style={{ width: "fit-content" }}
            >
                <ImaContent style={{ transform: "translate3D(-8vw, 8vh, 0)" }}>
                    <img src={Jaie} alt="Jaie" />
                </ImaContent>

                <ImaContent style={{ transform: "translateY(30vh)" }}>
                    <img className="first" src={Joseph} alt="Joseph" />
                </ImaContent>

                <ImaContent style={{ transform: "translate3D(8vw, 8vh, 0)" }}>
                    <img src={Catalina} alt="Catalina" />
                </ImaContent>

                <ImaContent>
                    <img src={Jaie} alt="Jaie" />
                </ImaContent>

                <ImaContent>
                    <img src={Joseph} alt="Joseph" />
                </ImaContent>
            </MediaDiv>
            <div className="absolute bottom-[150px] lg:bottom-0 md:bottom-0 sm:bottom-[150px] left-[50%] translate-x-[-50%] text-center opacity-0">
                <p className="text-white text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px] mt-[56px] lg:mt-5 md:mt-5 sm:mt-[56px]">
                    Joseph Michael Daniels
                </p>
                <p className="w-[100vw] mt-[-24px] text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px]">
                    <GradientText>Chairman & Co-founder</GradientText>
                </p>
            </div>
            <div className="absolute bottom-[150px] lg:bottom-0 md:bottom-0 sm:bottom-[150px] left-[50%] translate-x-[-50%] text-center opacity-0">
                <p className="text-white text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px] mt-[56px] lg:mt-5 md:mt-5 sm:mt-[56px]">
                    Catalina Valentino
                </p>
                <p className="w-[100vw] mt-[-24px] text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px]">
                    <GradientText>CEO & Co-founder</GradientText>
                </p>
            </div>
            <div className="absolute bottom-[150px] lg:bottom-0 md:bottom-0 sm:bottom-[150px] left-[50%] translate-x-[-50%] text-center opacity-0">
                <p className="text-white text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px] mt-[56px] lg:mt-5 md:mt-5">
                    Jaie Petty
                </p>
                <p className="w-[100vw] mt-[-24px] text-[25.7px] 2xl:text-[2.3vw] xl:text-[2.3vw] lg:text-[2.3vw] md:text-[2.3vw] font-medium leading-[64px] 2xl:leading-[5.7vw] xl:leading-[5.7vw] lg:leading-[5.7vw] md:leading-[5.7vw] tracking-[-0.7px] lg:tracking-[-1px] md:tracking-[-1px]">
                    <GradientText>Co-founder & Media Director</GradientText>
                </p>
            </div>
        </FullSection>
    );
};
