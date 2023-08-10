import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { FullSection, GradientText } from "../../theme/components";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Linkdin from "../../assets/linkden.svg";
import WordLogo from "../../assets/Elixr_Wordmark.png";
gsap.registerPlugin(ScrollTrigger);

export const FooterSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const head = section.childNodes[0];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=200",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                    pin: true,
                },
                ease: "none",
            });

            tl.to(head, {
                translateY: "0vh",
                opacity: 1,
                duration: 0.5,
                // ease: Power4.easeOut,
            }).to(section, {
                duration: 0.5,
            });
        }
    });

    return (
        <FullSection
            className="footersection flex flex-col items-center justify-center"
            style={{ backgroundColor: "black" }}
            ref={sectionRef}
        >
            <p className="text-white text-center text-[30px] lg:text-[4.6vw] md:text-[4.6vw] sm:text-[30px] font-medium leading-[100px] leading-[76px] lg:leading-[5.2vw] md:leading-[5.2vw] sm:leading-[76px] tracking-[-0.9px] lg:tracking-[-2px] md:tracking-[-2px] sm:tracking-[-0.9px] translate-y-[20vh] opacity-0">
                Get in touch
            </p>
            <div className="border-b-2 border-white pb-2 lg:pb-4 md:pb-4 sm:pb-2 mt-14 lg:mt-[5.7vw] md:mt-[5.7vw] sm:mt-8 w-[90vw] lg:w-[36.5vw] md:w-[36.5vw]">
                <input
                    className="bg-black w-full text-white text-center lg:text-left md:text-left sm:text-center text-[20px] font-medium leading-[44px] tracking-[-0.5px] focus:outline-none"
                    placeholder="Enter your email"
                />
            </div>
            <button className="py-[12px] px-[58px] rounded-[34.5px] bg-gradient-to-r from-[#D4312C] to-[#8765F6] w-fit mt-[88px] lg:mt-10 md:mt-10 sm:mt-[80px]">
                <span className="text-white text-[22px] font-[600] leading-11 tracking-[-0.5px]">
                    Send
                </span>
            </button>

            <div className="absolute flex justify-center lg:justify-between md:justify-between sm:justify-center items-center w-full bottom-0 px-[62px] pb-[80px] 2xl:pb-[80px] xl:pb-[70px] lg:pb-[60px] md:pb-[50px]">
                
                <img src={WordLogo} alt="Elixr Word Logo" className="w-[100px] lg:w-[80px] md:w-[80px] hidden lg:block md:block" />
                {/* <p className="text-[48px] lg:text-[36px] md:text-[36px] font-[700]  sm:hidden">
                    <GradientText>ELIXR</GradientText>
                </p> */}

                {/* <div className="hidden lg:flex md:flex sm:hidden gap-[4.1vw]">
                    <p className="text-white text-[20px] font-medium leading-[44px] tracking-[-0.5px]">
                        About
                    </p>
                    <p className="text-white text-[20px] font-medium leading-[44px] tracking-[-0.5px]">
                        Team
                    </p>
                    <p className="text-white text-[20px] font-medium leading-[44px] tracking-[-0.5px]">
                        Contact
                    </p>
                </div> */}

                <div className="flex gap-[26px]">
                    <a href="https://twitter.com/elixrearth?s=21&t=5z2qDIlzPtD9nKfJZDlRoQ" target="_blank">
                        <img
                            src={Twitter}
                            alt="Twitter"
                            className="w-[30px] h-[30px]"
                        />
                    </a>
                    <a href="https://instagram.com/elixr.earth?igshid=MzRlODBiNWFlZA==" target="_blank">
                        <img
                            src={Instagram}
                            alt="Instagram"
                            className="w-[30px] h-[30px]"
                        />
                    </a>
                    <a href=" https://uk.linkedin.com/company/elixrincubator" target="_blank">
                        <img
                            src={Linkdin}
                            alt="Linkdin"
                            className="w-[30px] h-[30px]"
                        />
                    </a>
                </div>
            </div>
        </FullSection>
    );
};
