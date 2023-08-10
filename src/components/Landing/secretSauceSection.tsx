import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

import { FullSection, GradientText } from "../../theme/components";
import BeNews from "../../assets/Benews.png";
import Insider from "../../assets/Insider.png";
import UN75 from "../../assets/UN75.png";
import Forbes from "../../assets/forbes.png";
import { useEffect, useRef } from "react";
import styled from "styled-components";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Logo = styled.div`
    position: relative;
    width: 14.28vw;
    height: 3vw;
    display: flex;

    @media only screen and (max-width: 640px) {
        width: 20vw;
        height: 5vw;
    }
`;

const LogoImg = styled.img`
    position: relative;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    align-self: center;
    // height: -webkit-fill-available;
}
`;
export const SecretSauceSection = ({ snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const heading = section.querySelector(".heading");
            const elements = section.querySelectorAll(".element");
            const imageFlowDiv = section.querySelector(".flowDiv");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=1000",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                    pin: true,
                },
                ease: "none",
            });

            gsap.to(imageFlowDiv, {
                duration: 8,
                translateX: "50%",
                repeat: -1,
                ease: "none",
            });

            gsap.set(elements, {
                backgroundSize: "200% 200%",
                backgroundPosition: "50% 50%",
                transform: "translateY(50%)",
                opacity: 0,
            });
            gsap.set(heading, { top: "40vh", opacity: 0 });
            gsap.set(".element p", { top: "50%", position: "relative" });

            tl.to(
                heading,
                {
                    top: "10vh",
                    opacity: 1,
                    duration: 0.4,
                },
                "<"
            )
                .to(
                    elements,
                    {
                        transform: "translateY(0%)",
                        backgroundSize: "100% 100%",
                        duration: 0.3,
                        delay: 0.1,
                        opacity: 1,
                    },
                    "<"
                )
                .to(
                    ".element p",
                    {
                        top: "0%",
                        duration: 0.2,
                        delay: 0.1,
                    },
                    "<"
                )
                .to(section, {
                    duration: 0.1,
                });

            elements.forEach((el: any) => {
                el.addEventListener("mouseenter", (ev: any) => {
                    gsap.to(ev.target, {
                        backgroundSize: "150% 150%",
                        duration: 0.2,
                    });
                });

                el.addEventListener("mouseleave", (ev: any) => {
                    gsap.to(ev.target, {
                        backgroundSize: "100% 100%",
                        duration: 0.2,
                    });
                });
            });
        }
    });
    return (
        <FullSection
            className="secretsection flex flex-col items-center"
            style={{
                maxHeight: "none",
                height: "fit-content",
                minHeight: "100vh",
                background: "linear-gradient(rgb(35,36,40) 10%,  #15171C 100%)",
            }}
            ref={sectionRef}
        >
            <p className="heading relative mb-[90px] 2xl:mb-[118px] xl:mb-[88px] lg:mb-[70px] md:mb-[52px] text-white leading-[76.5px] 2xl:leading-[76.5px] xl:leading-[57px] lg:leading-[45.6px] md:leading-[34.2px] tracking-[-1px] 2xl:tracking-[-2.2px] xl:tracking-[-1.6px] lg:tracking-[-1.3px] md:tracking-[-1px] text-[35px] 2xl:text-[74px] xl:text-[55px] lg:text-[44px] md:text-[33px]">
                Our <GradientText>secret</GradientText> sauce
            </p>

            <div className="relative grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 align-center gap-[60px] 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 top-[10px] md:top-[50px]">
                <div className="element flex justify-center bg-[url('assets/SDG.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px]">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        SDG Aligment
                    </p>
                </div>
                <div className="element flex justify-center bg-[url('assets/smartcity.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px]">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        Smart Cities
                    </p>
                </div>
                <div className="element flex justify-center bg-[url('assets/gento.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px]">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        Gen X to Gen Z
                    </p>
                </div>
                <div className="element flex justify-center bg-[url('assets/industry4.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px]">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        Industry 4.0
                    </p>
                </div>
                <div className="element flex justify-center bg-[url('assets/proprietary.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px]">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        Proprietary Tech Stack
                    </p>
                </div>
                <div className="element flex justify-center bg-[url('assets/sustainability.png')] bg-no-repeat bg-cover w-[367.6px] h-[265.2px] rounded-[54px] 2xl:w-[427px] 2xl:h-[308px] xl:w-[318px] xl:h-[229px] lg:w-[254.3px] lg:h-[183.5px] md:w-[190.3px] md:h-[137.4px] max-w-[427px] max-h-[308px] 2xl:rounded-[63px] xl:rounded-[47px] lg:rounded-[37.6px] md:rounded-[28.1px] mb-[70px] lg:mb-0">
                    <p className="text-[22px] leading-[74px] tracking-[-0.65px] 2xl:text-[26px] 2xl:leading-[90px] 2xl:tracking-[-0.8px] xl:text-[19.5px] xl:leading-[67px] xl:tracking-[-0.6px] lg:text-[15.5px] lg:leading-[54px] lg:tracking-[-0.46px] md:text-[11.6px] md:leading-[40.1px] md:tracking-[-0.34px] text-white text-center font-medium">
                        Sustainability Focused
                    </p>
                </div>
            </div>

            <div className="flowDiv absolute flex flex-row bottom-[1vh] left-[0px] translate-x-[-50%]">
                <Logo>
                    <LogoImg src={Forbes} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Forbes" />
                </Logo>
                <Logo>
                    <LogoImg src={UN75} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="UN75" />
                </Logo>
                <Logo>
                    <LogoImg src={Insider} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Insider" />
                </Logo>
                <Logo>
                    <LogoImg src={BeNews} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="BeNews" />
                </Logo>
                <Logo>
                    <LogoImg src={Forbes} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Forbes" />
                </Logo>
                <Logo>
                    <LogoImg src={UN75} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="UN75" />
                </Logo>
                <Logo>
                    <LogoImg src={Insider} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Insider" />
                </Logo>
                <Logo>
                    <LogoImg src={Forbes} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Forbes" />
                </Logo>
                <Logo>
                    <LogoImg src={UN75} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="UN75" />
                </Logo>
                <Logo>
                    <LogoImg src={Insider} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Insider" />
                </Logo>
                <Logo>
                    <LogoImg src={BeNews} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="BeNews" />
                </Logo>
                <Logo>
                    <LogoImg src={Forbes} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Forbes" />
                </Logo>
                <Logo>
                    <LogoImg src={UN75} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="UN75" />
                </Logo>
                <Logo>
                    <LogoImg src={Insider} className="w-[48px] h-[15px] xl:w-[90px] xl:h-[30px] md:w-[64px] md:h-[20px]" alt="Insider" />
                </Logo>
            </div>
        </FullSection>
    );
};
