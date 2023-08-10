import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
    FullSection,
    GradientText,
    InvestorGradientText,
} from "../../theme/components";
import MacBook from "../../assets/MacBook.png";
import Phone from "../../assets/arclive_phone.png";
import Everyday_Phone from "../../assets/everyday_phone.png";
import LockWhite from "../../assets/lock_white.svg";
import LockBlack from "../../assets/lock_black.svg";
import LockGrey from "../../assets/gray_lock.svg";
import YVYV from "../../assets/arclive_phone1.png";
import T_Phone from "../../assets/12Phone.png";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);
const TimeBar = styled.div`
    width: 100%;
    background: linear-gradient(
        to right,
        #62687E 0%,
        #62687E 50%,
        #222428 50%,
        #222428 100%
    );
`;

const TimeBall = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    left: 50%;
    top: 50%;
    transform: translate3D(-50%, -50%, 0);
    background-color: white;
    border-color: #15171c;
    border-width: 10px;
    background-size: 100% 100%;
`;
export const TimeLineSection = ({ snap }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;

            const miniSec = section.childNodes[0];
            const minihead = miniSec.childNodes[0];

            const timeline = section.querySelector(".timeline");
            const lockDiv = timeline?.childNodes[1] as any;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=6000",
                    toggleActions: "restart none none reverse",
                    scrub: 0.2,
                    pin: true,
                    onLeave: () => {
                        snap(".visionarisection", 300);
                    },
                    snap: {
                        snapTo: "labels",
                        duration: 1,
                        delay: 0,
                        ease: "power3.out",
                    },
                },
                ease: "none",
            });

            tl.to(
                minihead.childNodes[0],
                { top: "20vh", duration: 0.15, opacity: 1 },
                "<"
            )
                .to(
                    minihead.childNodes[1],
                    {
                        top: "20vh",
                        opacity: 1,
                        duration: 0.1,
                        delay: 0.05,
                    },
                    "<"
                )
                .to(
                    timeline,
                    {
                        width: "100vw",
                        duration: 0.2,
                        opacity: 1,
                    },
                    "<"
                )
                .addLabel("headAnim")
                .addLabel("lock")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-100vw",
                    duration: 0.3,
                })
                .to(
                    lockDiv,
                    {
                        backgroundColor: "#15171c",
                        borderRadius: '0',
                        duration: 0.3,
                    },
                    "lock"
                )
                .addLabel("MetaConnex")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-200vw",
                    duration: 0.3,
                })
                .addLabel("Senze")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-300vw",
                    duration: 0.3,
                })
                .addLabel("ArcLive")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-400vw",
                    duration: 0.3,
                })
                .addLabel("Solution")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-500vw",
                    duration: 0.3,
                })
                .addLabel("ComingSoon")
                .to(section, { duration: 0.1 })
                .to(miniSec, {
                    left: "-600vw",
                    duration: 0.3,
                })
                .addLabel("Omnia")
                .to(section, { duration: 0.2 })
                .to(
                    timeline,
                    {
                        width: "0px",
                        left: "100vw",
                        duration: 0.2,
                    },
                    "Omnia"
                )
                .to(
                    section,
                    {
                        opacity: 0,
                        duration: 0.3,
                        delay: 0.1,
                    },
                    "Omnia"
                );
        }
    }, []);
    return (
        <FullSection ref={sectionRef} className="timelinesection">
            <div className="relative w-full h-full">
                <div className="absolute flex flex-col left-[50%] h-[100vh] translate-x-[-50%] mt-[150px] lg:mt-[100px] md:mt-[80px]">
                    <p className="head1 relative w-[355px] top-[40vh] opacity-0 text-center self-center text-white font-medium text-[28px] leading-[35px] tracking-[-0.8px] 2xl:text-[4vw] 2xl:leading-[5.2vw] 2xl:tracking-[-2px] 2xl:w-[52vw] xl:text-[4.2vw] xl:leading-[5.2vw] xl:tracking-[-1.6px] xl:w-[52.6vw] lg:text-[4.1vw] lg:leading-[5.2vw] lg:tracking-[-1.2px] lg:w-[52.6vw] md:text-[4.1vw] md:leading-[5.2vw] md:tracking-[-0.96px] md:w-[52.6vw]">
                        The <GradientText>timeline</GradientText> for launching{" "}
                        our companies.
                    </p>
                    <p className="head2 relative top-[40vh] opacity-0 text-white text-center self-center font-medium text-[20px] leading-[22px] tracking-[-0.6px] mt-[18px] w-[90vw] 2xl:text-[1.5vw] 2xl:leading-[2.3vw] 2xl:tracking-[-0.75px] 2xl:mt-[49px] 2xl:w-[34vw] xl:text-[1.44vw] xl:leading-[2.31vw] xl:tracking-[-0.55px] xl:mt-[35.6px] xl:w-[31.4vw] lg:text-[1.44vw] lg:leading-[2.3vw] lg:tracking-[-0.44px] lg:mt-[28.6px] lg:w-[31.4vw] md:text-[1.44vw] md:leading-[2.3vw] md:tracking-[-0.33px] md:mt-[21.5px] md:w-[31.4vw] sm:text-[20px] sm:leading-[22px] sm:tracking-[-0.6px] sm:mt-[18px] sm:w-[90vw]">
                        Paradigm shifting platforms, each poised to revolutionise{" "}
                        their respective industries.
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[100vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                        <div className="w-[347px] relative h-[342px] 2xl:w-[767px] 2xl:h-[755px] xl:w-[571px] xl:h-[562px] lg:w-[457px] lg:h-[449px] md:w-[343px] md:h-[337px] sm:w-[347px] sm:h-[342px] bg-[#B5CC6C] rounded-[29px] 2xl:rounded-[64px] xl:rounded-[47.6px] lg:rounded-[38.1px] md:rounded-[28.6px] sm:rounded-[29px] pl-[31px] 2xl:pl-[70px] xl:pl-[52.1px] lg:pl-[41.6px] md:pl-[32.6px] sm:pl-[31px] pt-[35px] 2xl:pt-[78px] xl:pt-[58px] lg:pt-[46px] md:pt-[34.8px] sm:pt-[35px]">
                            <p className="text-white text-[36px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] sm:leading-[20px] 2xl:text-[80px] xl:text-[59.6px] lg:text-[47.6px] md:text-[35.7px] sm:text-[36px] font-[500] tracking-[-1px] 2xl:tracking-[-2.4px] xl:tracking-[-1.8px] lg:tracking-[-1.4px] md:tracking-[-1px] sm:tracking-[-1px]">
                                MetaConnex
                            </p>
                            <div>
                                <div className="flex gap-[14px] mt-[10px] 2xl:mt-[23px] xl:mt-[16.9px] 2xl:gap-8 xl:gap-6 lg:gap-[18px] md:gap-[14px] mb-[6px] 2xl:mb-3 xl:mb-[10px] lg:mb-[7px] md:mb-[5.5px]">
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Planning
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Digital Twin
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Hardware
                                    </p>
                                </div>
                                <button className="flex px-[11px] py-[6px] 2xl:px-6 2xl:py-3 xl:px-6 xl:py-[10px] lg:px-[18px] lg:py-2 rounded-[16px] 2xl:rounded-[34px] xl:rounded-[25.7px] lg:rounded-[20.5px] w-fit bg-white">
                                    <span className="text-[#B5CC6C] tracking-[-0.3px] text-[10px] leading-[20px] font-[600] 2xl:text-[22px] 2xl:leading-[44px] xl:text-[16.4px] xl:leading-[32.6px] lg:text-[13px] lg:leading-[26px] md:text-[10px] md:leading-[19.5px] tracking-[-1px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Enter now
                                    </span>
                                </button>
                                <img
                                    className="mt-7 2xl:mt-[78px] xl:mt-[51.4px] lg:mt-[41px] md:mt-[30px] w-[283px] h-[171px] 2xl:w-[625px] 2xl:h-[378px] xl:w-[463px] xl:h-[281px] lg:w-[370px] lg:h-[225px] md:w-[278px] md:h-[169px]"
                                    src={MacBook}
                                    alt="Mac Book"
                                />
                            </div>
                            <img
                                className="absolute w-3 h-4 2xl:w-6 2xl:h-8 xl:w-6 xl:h-8 lg:w-5 lg:h-8 md:w-[10px] md:h-[14px] top-4 right-6 2xl:top-8 2xl:right-12 xl:top-6 xl:right-9 lg:top-6 lg:right-9 md:top-[14px] md:right-6"
                                src={LockWhite}
                                alt="lock icon"
                            />
                        </div>
                        <div className="flex flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428] bg-[url('assets/gif/MetaConnex.gif')] bg-[center_bottom_-1.5rem] bg-no-repeat bg-bottom bg-cover">
                                <p className="text-white text-[12px] 2xl:text-[1.15vw] xl:text-[15px] lg:text-[12px] md:text-[9px] font-normal leading-[10px] 2xl:leading-[1.45vw] xl:leading-[18.6px] lg:leading-[15px] md:leading-[11px] tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.25px] mb-[30px] 2xl:mb-[68px] xl:mb-[60.2px] lg:mb-[50.2px] md:mb-[40.2px]">
                                    Round A
                                </p>
                                <p className="text-white text-[45.5px] 2xl:text-[8.7vw] xl:text-[111.7px] lg:text-[89.3px] md:text-[67px] leading-[8px] 2xl:leading-[25px] xl:leading-[18.7px] lg:leading-[14.8px] md:leading-[11px] font-[600] tracking-[-4px] xl:tracking-[-3.3px] lg:tracking-[-2.6px] md:tracking-[-2px]">
                                    £25M
                                </p>
                                <p className="text-white text-[14px] 2xl:text-[1.16vw] xl:text-[22.3px] lg:text-[17.8px] md:text-[13.4px] font-medium leading-[7.6px] 2xl:leading-[25px] xl:leading-[18.6px] lg:leading-[14.8px] md:leading-[11.1px] tracking-[-0.5px] mt-[30px] 2xl:mt-[5.2vw] xl:mt-[70px] lg:mt-[60px] md:mt-[50px]">
                                    Raising £2.5M
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428]">
                                <p className="text-white text-[15.6px] 2xl:text-[2.9vw] xl:text-[37.2px] lg:text-[29.6px] md:text-[22.3px] font-medium leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-1.1px] lg:tracking-[-0.9px] md:tracking-[-0.7px]">
                                    Launch Event
                                </p>
                                <p className="text-[#B5CC6C] text-[27.7px] 2xl:text-[5.2vw] xl:text-[66.2px] lg:text-[53px] md:text-[39.7px] font-[600] leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.4px] 2xl:tracking-[-2.5px] xl:tracking-[-2px] lg:tracking-[-1.6px] md:tracking-[-1.2px] mt-[12px] 2xl:mt-[1vw] xl:mt-[14px] lg:mt-[10.5px] md:mt-[7.6px]">
                                    30.08.23
                                </p>
                                <button className="flex px-[30px] py-1 2xl:px-[45px] 2xl:py-3 xl:px-[33px] xl:py-[10px] lg:px-[26px] lg:py-[7px] md:px-[20px] md:py-[5px] bg-[#B5CC6C] rounded-[10.7px] 2xl:rounded-[2vw] xl:rounded-[25.7px] lg:rounded-[20.5px] md:rounded-[15.4px] w-fit mt-5 2xl:mt-12 xl:mt-[35.6px] lg:mt-[28.2px] md:mt-[21px]">
                                    <span className="text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Sign up
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[9vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        August, 2023
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[200vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                        <div className="bg-[#153729] relative w-[347px] h-[342px] 2xl:w-[767px] 2xl:h-[755px] xl:w-[571px] xl:h-[562px] lg:w-[457px] lg:h-[449px] md:w-[343px] md:h-[337px] sm:w-[347px] sm:h-[342px] rounded-[29px] 2xl:rounded-[64px] xl:rounded-[47.6px] lg:rounded-[38.1px] md:rounded-[28.6px] sm:rounded-[29px] pl-[31px] 2xl:pl-[70px] xl:pl-[52.1px] lg:pl-[41.6px] md:pl-[32.6px] sm:pl-[31px] pt-[35px] 2xl:pt-[78px] xl:pt-[58px] lg:pt-[46px] md:pt-[34.8px] sm:pt-[35px]">
                            <p className="text-[#C4EF57] text-[36px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] sm:leading-[20px] 2xl:text-[80px] xl:text-[59.6px] lg:text-[47.6px] md:text-[35.7px] sm:text-[36px] font-[500] tracking-[-1px] 2xl:tracking-[-2.4px] xl:tracking-[-1.8px] lg:tracking-[-1.4px] md:tracking-[-1px] sm:tracking-[-1px]">
                                Senze
                            </p>
                            <div className="flex">
                                <div className="flex flex-col gap-4 lg:gap-[26px] mt-[40px] 2xl:mt-[90px] xl:mt-[67px] lg:mt-[54px] md:mt-[40px]">
                                    <p className="text-[#C4EF57] text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Retrofit
                                    </p>
                                    <p className="text-[#C4EF57] text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Digital Twin
                                    </p>
                                    <p className="text-[#C4EF57] text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px] mb-[50px] 2xl:mb-[195px] xl:mb-[110px] lg:mb-[90px] md:mb-[85px]">
                                        Lidar Tech
                                    </p>
                                    <button className="flex px-[11px] py-[6px] 2xl:px-6 2xl:py-3 xl:px-6 xl:py-[10px] lg:px-[18px] lg:py-2 rounded-[16px] 2xl:rounded-[34px] xl:rounded-[25.7px] lg:rounded-[20.5px] w-fit bg-white">
                                        <span className="text-[#153729] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                            Register interest
                                        </span>
                                    </button>
                                </div>
                                <img
                                    className="mt-[40px] 2xl:mt-[80px] xl:mt-[60px] lg:mt-[50px] md:mt-[35px] ml-[40px] 2xl:ml-[80px] xl:ml-[60px] lg:ml-[48px] md:ml-[34px] w-[143px] h-[247px] 2xl:w-[324px] 2xl:h-[553px] xl:w-[240px] xl:h-[412px] lg:w-[192px] lg:h-[327.7px] md:w-[144px] md:h-[250px]"
                                    src={Phone}
                                    alt="Mac Book"
                                />
                            </div>
                            <img
                                className="absolute w-3 h-4 2xl:w-6 2xl:h-8 xl:w-6 xl:h-8 lg:w-5 lg:h-8 md:w-[10px] md:h-[14px] top-4 right-6 2xl:top-8 2xl:right-12 xl:top-6 xl:right-9 lg:top-6 lg:right-9 md:top-[14px] md:right-6"
                                src={LockWhite}
                                alt="lock icon"
                            />
                        </div>
                        <div className="flex flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428] bg-[url('assets/gif/Senze.gif')] bg-[center_bottom_-1.5rem] bg-no-repeat bg-bottom bg-cover">
                                <p className="text-white text-[45.5px] 2xl:text-[8.7vw] xl:text-[111.7px] lg:text-[89.3px] md:text-[67px] leading-[8px] 2xl:leading-[25px] xl:leading-[18.7px] lg:leading-[14.8px] md:leading-[11px] font-[600] tracking-[-4px] xl:tracking-[-3.3px] lg:tracking-[-2.6px] md:tracking-[-2px]">
                                    TBC
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428]">
                                <p className="text-white text-[15.6px] 2xl:text-[2.9vw] xl:text-[37.2px] lg:text-[29.6px] md:text-[22.3px] font-medium leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-1.1px] lg:tracking-[-0.9px] md:tracking-[-0.7px]">
                                    Launch Event
                                </p>
                                <p className="text-[#B5CC6C] text-[27.7px] 2xl:text-[5.2vw] xl:text-[66.2px] lg:text-[53px] md:text-[39.7px] font-[600] leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.8px] 2xl:tracking-[-2.5px] xl:tracking-[-2px] lg:tracking-[-1.6px] md:tracking-[-1.2px] mt-[12px] 2xl:mt-[1vw] xl:mt-[14px] lg:mt-[10.5px] md:mt-[7.6px]">
                                    18.09.23
                                </p>
                                <button className="flex px-[30px] py-1 2xl:px-[45px] 2xl:py-3 xl:px-[33px] xl:py-[10px] lg:px-[26px] lg:py-[7px] md:px-[20px] md:py-[5px] bg-[#B5CC6C] rounded-[10.7px] 2xl:rounded-[2vw] xl:rounded-[25.7px] lg:rounded-[20.5px] md:rounded-[15.4px] w-fit mt-5 2xl:mt-12 xl:mt-[35.6px] lg:mt-[28.2px] md:mt-[21px]">
                                    <span className="text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Sign up
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[9vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        September, 2023
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[300vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                        <div className="bg-[#FAE914] relative w-[347px] h-[342px] 2xl:w-[767px] 2xl:h-[755px] xl:w-[571px] xl:h-[562px] lg:w-[457px] lg:h-[449px] md:w-[343px] md:h-[337px] rounded-[29px] 2xl:rounded-[64px] xl:rounded-[47.6px] lg:rounded-[38.1px] md:rounded-[28.6px] sm:rounded-[29px] pl-[31px] 2xl:pl-[70px] xl:pl-[52.1px] lg:pl-[41.6px] md:pl-[32.6px] sm:pl-[31px] pt-[35px] 2xl:pt-[78px] xl:pt-[58px] lg:pt-[46px] md:pt-[34.8px] sm:pt-[35px]">
                            <p className="text-[36px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] sm:leading-[20px] 2xl:text-[80px] xl:text-[59.6px] lg:text-[47.6px] md:text-[35.7px] sm:text-[36px] font-[500] tracking-[-1px] 2xl:tracking-[-2.4px] xl:tracking-[-1.8px] lg:tracking-[-1.4px] md:tracking-[-1px] sm:tracking-[-1px]">
                                YVYV
                            </p>
                            <div className="flex">
                                <div className="flex flex-col gap-4 lg:gap-[26px] mt-[40px] 2xl:mt-[90px] xl:mt-[67px] lg:mt-[54px] md:mt-[40px]">
                                    <p className="text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Non Profit
                                    </p>
                                    <p className="text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Voting
                                    </p>
                                    <p className="text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px] mb-[50px] 2xl:mb-[195px] xl:mb-[110px] lg:mb-[90px] md:mb-[85px]">
                                        Digital Passport
                                    </p>
                                    <button className="flex px-[11px] py-[6px] 2xl:px-6 2xl:py-3 xl:px-6 xl:py-[10px] lg:px-[18px] lg:py-2 rounded-[16px] 2xl:rounded-[34px] xl:rounded-[25.7px] lg:rounded-[20.5px] w-fit bg-white">
                                        <span className="text-[#030303] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                            Register interest
                                        </span>
                                    </button>
                                </div>
                                <img
                                    className="mt-[40px] 2xl:mt-[80px] xl:mt-[60px] lg:mt-[50px] md:mt-[35px] ml-[40px] 2xl:ml-[80px] xl:ml-[60px] lg:ml-[48px] md:ml-[34px] w-[143px] h-[247px] 2xl:w-[324px] 2xl:h-[553px] xl:w-[240px] xl:h-[412px] lg:w-[192px] lg:h-[327.7px] md:w-[144px] md:h-[250px]"
                                    src={YVYV}
                                    alt="Mac Book"
                                />
                            </div>
                            <img
                                className="absolute w-3 h-4 2xl:w-6 2xl:h-8 xl:w-6 xl:h-8 lg:w-5 lg:h-8 md:w-[10px] md:h-[14px] top-4 right-6 2xl:top-8 2xl:right-12 xl:top-6 xl:right-9 lg:top-6 lg:right-9 md:top-[14px] md:right-6"
                                src={LockBlack}
                                alt="lock icon"
                            />
                        </div>
                        <div className="flex flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428] bg-[url('assets/gif/YVYV.gif')] bg-[center_bottom_-1.5rem] bg-no-repeat bg-bottom bg-cover">
                                <p className="mt-4 text-white text-[28px] 2xl:text-[5.8vw] xl:text-[5.8vw] lg:text-[5.8vw] md:text-[5.8vw] leading-[8px] lg:leading-[18px] md:leading-[18px] sm:leading-[8px] font-[600] tracking-[-0.5px] lg:tracking-[-3px] md:tracking-[-3px] sm:tracking-[-0.5px]">
                                    Non Profit
                                </p>
                                <p className="text-white text-[14px] 2xl:text-[1.16vw] xl:text-[22.3px] lg:text-[17.8px] md:text-[13.4px] font-medium leading-[7.6px] 2xl:leading-[25px] xl:leading-[18.6px] lg:leading-[14.8px] md:leading-[11.1px] tracking-[-0.5px] mt-[45px] 2xl:mt-[5.2vw] xl:mt-[60px] lg:mt-[50px] md:mt-[40px]">
                                    Raising £1M
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428]">
                                <p className="text-white text-[15.6px] 2xl:text-[2.9vw] xl:text-[37.2px] lg:text-[29.6px] md:text-[22.3px] font-medium leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-1.1px] lg:tracking-[-0.9px] md:tracking-[-0.7px]">
                                    Launch Event
                                </p>
                                <p className="text-[#FAE914] text-[27.7px] 2xl:text-[5.2vw] xl:text-[66.2px] lg:text-[53px] md:text-[39.7px] font-[600] leading-[17.1px] 2xl:leading-[75px] xl:leading-[60px] lg:leading-[45.7px] md:leading-[40.5px] tracking-[-0.8px] 2xl:tracking-[-2.5px] xl:tracking-[-2px] lg:tracking-[-1.6px] md:tracking-[-1.2px] mt-[12px] 2xl:mt-[1vw] xl:mt-[14px] lg:mt-[10.5px] md:mt-[7.6px]">
                                    09.10.23
                                </p>
                                <button className="flex px-[30px] py-1 2xl:px-[45px] 2xl:py-3 xl:px-[33px] xl:py-[10px] lg:px-[26px] lg:py-[7px] md:px-[20px] md:py-[5px] bg-[#FAE914] rounded-[10.7px] 2xl:rounded-[2vw] xl:rounded-[25.7px] lg:rounded-[20.5px] md:rounded-[15.4px] w-fit mt-5 2xl:mt-12 xl:mt-[35.6px] lg:mt-[28.2px] md:mt-[21px]">
                                    <span className="text-[#153729] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Sign up
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[9vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        November, 2023
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[400vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                        <div className="bg-gradient-to-r from-[#BED4EA] to-[#EBBFD0] relative w-[347px] h-[342px] 2xl:w-[767px] 2xl:h-[755px] xl:w-[571px] xl:h-[562px] lg:w-[457px] lg:h-[449px] md:w-[343px] md:h-[337px] sm:w-[347px] sm:h-[342px] rounded-[29px] 2xl:rounded-[64px] xl:rounded-[47.6px] lg:rounded-[38.1px] md:rounded-[28.6px] sm:rounded-[29px] pl-[31px] 2xl:pl-[70px] xl:pl-[52.1px] lg:pl-[41.6px] md:pl-[32.6px] sm:pl-[31px] pt-[35px] 2xl:pt-[78px] xl:pt-[58px] lg:pt-[46px] md:pt-[34.8px] sm:pt-[35px]">
                            <p className="text-white text-[36px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] sm:leading-[20px] 2xl:text-[80px] xl:text-[59.6px] lg:text-[47.6px] md:text-[35.7px] sm:text-[36px] font-[500] tracking-[-1px] 2xl:tracking-[-2.4px] xl:tracking-[-1.8px] lg:tracking-[-1.4px] md:tracking-[-1px] sm:tracking-[-1px]">
                                Omnia
                            </p>
                            <div className="flex">
                                <div className="flex flex-col gap-4 lg:gap-[26px] mt-[40px] 2xl:mt-[90px] xl:mt-[67px] lg:mt-[54px] md:mt-[40px]">
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        ESG Solution
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Hardware
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px] mb-[50px] 2xl:mb-[195px] xl:mb-[110px] lg:mb-[90px] md:mb-[85px]">
                                        Smart Homes
                                    </p>
                                    <button className="flex px-[11px] py-[6px] 2xl:px-6 2xl:py-3 xl:px-6 xl:py-[10px] lg:px-[18px] lg:py-2 rounded-[16px] 2xl:rounded-[34px] xl:rounded-[25.7px] lg:rounded-[20.5px] w-fit bg-white">
                                        <span className="text-[#BED4EA] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                            Learn more
                                        </span>
                                    </button>
                                </div>
                                <img
                                    className="mt-[40px] 2xl:mt-[80px] xl:mt-[60px] lg:mt-[50px] md:mt-[35px] ml-[40px] 2xl:ml-[80px] xl:ml-[60px] lg:ml-[48px] md:ml-[34px] w-[143px] h-[247px] 2xl:w-[324px] 2xl:h-[553px] xl:w-[240px] xl:h-[412px] lg:w-[192px] lg:h-[327.7px] md:w-[144px] md:h-[250px]"
                                    src={T_Phone}
                                    alt="Everyday Phone"
                                />
                            </div>
                            <img
                                className="absolute w-3 h-4 2xl:w-6 2xl:h-8 xl:w-6 xl:h-8 lg:w-5 lg:h-8 md:w-[10px] md:h-[14px] top-4 right-6 2xl:top-8 2xl:right-12 xl:top-6 xl:right-9 lg:top-6 lg:right-9 md:top-[14px] md:right-6"
                                src={LockWhite}
                                alt="lock icon"
                            />
                        </div>
                        <div className="flex flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428] bg-[url('assets/gif/Omnia.gif')] bg-[center_bottom_-1.5rem] bg-no-repeat bg-bottom bg-cover">
                                <p className="text-white text-[12px] 2xl:text-[1.15vw] xl:text-[15px] lg:text-[12px] md:text-[9px] font-normal leading-[10px] 2xl:leading-[1.45vw] xl:leading-[18.6px] lg:leading-[15px] md:leading-[11px] tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.25px] mb-[30px] 2xl:mb-[68px] xl:mb-[60.2px] lg:mb-[50.2px] md:mb-[40.2px]">
                                    Round A
                                </p>
                                <p className="text-white text-[45.5px] 2xl:text-[8.7vw] xl:text-[111.7px] lg:text-[89.3px] md:text-[67px] leading-[8px] 2xl:leading-[25px] xl:leading-[18.7px] lg:leading-[14.8px] md:leading-[11px] font-[600] tracking-[-4px] xl:tracking-[-3.3px] lg:tracking-[-2.6px] md:tracking-[-2px]">
                                    £30M
                                </p>
                                <p className="text-white text-[14px] 2xl:text-[1.16vw] xl:text-[22.3px] lg:text-[17.8px] md:text-[13.4px] font-medium leading-[7.6px] 2xl:leading-[25px] xl:leading-[18.6px] lg:leading-[14.8px] md:leading-[11.1px] tracking-[-0.5px] mt-[30px] 2xl:mt-[5.2vw] xl:mt-[70px] lg:mt-[60px] md:mt-[50px]">
                                    Raising £3m
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428]">
                                <p className="text-white text-[15.6px] 2xl:text-[2.9vw] xl:text-[37.2px] lg:text-[29.6px] md:text-[22.3px] font-medium leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-1.1px] lg:tracking-[-0.9px] md:tracking-[-0.7px]">
                                    Launch Event
                                </p>
                                <p className="bg-gradient-to-r from-[#BED4EA] to-[#EBBFD0] bg-clip-text text-transparent text-[27.7px] 2xl:text-[5.2vw] xl:text-[66.2px] lg:text-[53px] md:text-[39.7px] font-[600] leading-[23px] 2xl:leading-[75px] xl:leading-[60px] lg:leading-[45.7px] md:leading-[40.5px] tracking-[-0.8px] 2xl:tracking-[-2.5px] xl:tracking-[-2px] lg:tracking-[-1.6px] md:tracking-[-1.2px] mt-[12px] 2xl:mt-[1vw] xl:mt-[14px] lg:mt-[10.5px] md:mt-[7.6px]">
                                    27.11.23
                                </p>
                                <button className="flex px-[30px] py-1 2xl:px-[45px] 2xl:py-3 xl:px-[33px] xl:py-[10px] lg:px-[26px] lg:py-[7px] md:px-[20px] md:py-[5px] bg-gradient-to-r from-[#BED4EA] to-[#EBBFD0] rounded-[10.7px] 2xl:rounded-[2vw] xl:rounded-[25.7px] lg:rounded-[20.5px] md:rounded-[15.4px] w-fit mt-5 2xl:mt-12 xl:mt-[35.6px] lg:mt-[28.2px] md:mt-[21px]">
                                    <span className="text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Sign up
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[9vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        December, 2023
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[500vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                        <div className="bg-[#7645E0] relative w-[347px] h-[342px] 2xl:w-[767px] 2xl:h-[755px] xl:w-[571px] xl:h-[562px] lg:w-[457px] lg:h-[449px] md:w-[343px] md:h-[337px] sm:w-[347px] sm:h-[342px] rounded-[29px] 2xl:rounded-[64px] xl:rounded-[47.6px] lg:rounded-[38.1px] md:rounded-[28.6px] sm:rounded-[29px] pl-[31px] 2xl:pl-[70px] xl:pl-[52.1px] lg:pl-[41.6px] md:pl-[32.6px] sm:pl-[31px] pt-[35px] 2xl:pt-[78px] xl:pt-[58px] lg:pt-[46px] md:pt-[34.8px] sm:pt-[35px]">
                            <p className="text-white text-[36px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] sm:leading-[20px] 2xl:text-[80px] xl:text-[59.6px] lg:text-[47.6px] md:text-[35.7px] sm:text-[36px] font-[500] tracking-[-1px] 2xl:tracking-[-2.4px] xl:tracking-[-1.8px] lg:tracking-[-1.4px] md:tracking-[-1px] sm:tracking-[-1px]">
                                Q
                            </p>
                            <div className="flex">
                                <div className="flex flex-col gap-4 lg:gap-[26px] mt-[40px] 2xl:mt-[90px] xl:mt-[67px] lg:mt-[54px] md:mt-[40px]">
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Social Media
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px]">
                                        Decarbonisation
                                    </p>
                                    <p className="text-white text-[15px] leading-[20px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.6px] 2xl:text-[33px] xl:text-[24px] lg:text-[19.3px] md:text-[14.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] lg:tracking-[-0.6px] md:tracking-[-0.43px] mb-[50px] 2xl:mb-[195px] xl:mb-[110px] lg:mb-[90px] md:mb-[85px]">
                                        AI
                                    </p>
                                    <button className="flex px-[11px] py-[6px] 2xl:px-6 2xl:py-3 xl:px-6 xl:py-[10px] lg:px-[18px] lg:py-2 rounded-[16px] 2xl:rounded-[34px] xl:rounded-[25.7px] lg:rounded-[20.5px] w-fit bg-white">
                                        <span className="text-[#7645E0] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                            Register interest
                                        </span>
                                    </button>
                                </div>
                                <img
                                    className="mt-[40px] 2xl:mt-[80px] xl:mt-[60px] lg:mt-[50px] md:mt-[35px] ml-[40px] 2xl:ml-[80px] xl:ml-[60px] lg:ml-[48px] md:ml-[34px] w-[143px] h-[247px] 2xl:w-[324px] 2xl:h-[553px] xl:w-[240px] xl:h-[412px] lg:w-[192px] lg:h-[327.7px] md:w-[144px] md:h-[250px]"
                                    src={Everyday_Phone}
                                    alt="Everyday Phone"
                                />
                            </div>
                            <img
                                className="absolute w-3 h-4 2xl:w-6 2xl:h-8 xl:w-6 xl:h-8 lg:w-5 lg:h-8 md:w-[10px] md:h-[14px] top-4 right-6 2xl:top-8 2xl:right-12 xl:top-6 xl:right-9 lg:top-6 lg:right-9 md:top-[14px] md:right-6"
                                src={LockWhite}
                                alt="lock icon"
                            />
                        </div>
                        <div className="flex flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-[23px] xl:gap-[17px] lg:gap-[13px] md:gap-[10px]">
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428] bg-[url('assets/gif/BlueWave.gif')] bg-[center_bottom_-1.5rem] bg-no-repeat bg-bottom bg-cover">
                                <p className="text-white text-[12px] 2xl:text-[1.15vw] xl:text-[15px] lg:text-[12px] md:text-[9px] font-normal leading-[10px] 2xl:leading-[1.45vw] xl:leading-[18.6px] lg:leading-[15px] md:leading-[11px] tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.25px] mb-[30px] 2xl:mb-[68px] xl:mb-[60.2px] lg:mb-[50.2px] md:mb-[40.2px]">
                                    Seed Round
                                </p>
                                <p className="text-white text-[45.5px] 2xl:text-[8.7vw] xl:text-[111.7px] lg:text-[89.3px] md:text-[67px] leading-[8px] 2xl:leading-[25px] xl:leading-[18.7px] lg:leading-[14.8px] md:leading-[11px] font-[600] tracking-[-4px] xl:tracking-[-3.3px] lg:tracking-[-2.6px] md:tracking-[-2px]">
                                    £5M
                                </p>
                                <p className="text-white text-[14px] 2xl:text-[1.16vw] xl:text-[22.3px] lg:text-[17.8px] md:text-[13.4px] font-medium leading-[7.6px] 2xl:leading-[25px] xl:leading-[18.6px] lg:leading-[14.8px] md:leading-[11.1px] tracking-[-0.5px] mt-[30px] 2xl:mt-[5.2vw] xl:mt-[70px] lg:mt-[60px] md:mt-[50px]">
                                    Raising £1M
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[161px] 2xl:w-[530px] xl:w-[394.5px] lg:w-[316px] md:w-[237px] h-[156px] 2xl:h-[366px] xl:h-[272.4px] lg:h-[218px] md:h-[163px] rounded-[21.2px] 2xl:rounded-[70px] xl:rounded-[52px] lg:rounded-[41px] md:rounded-[31px] bg-[#222428]">
                                <p className="text-white text-[15.6px] 2xl:text-[2.9vw] xl:text-[37.2px] lg:text-[29.6px] md:text-[22.3px] font-medium leading-[17.1px] 2xl:leading-[3.2vw] xl:leading-[41px] lg:leading-[32.7px] md:leading-[24.5px] tracking-[-0.5px] 2xl:tracking-[-1px] xl:tracking-[-1.1px] lg:tracking-[-0.9px] md:tracking-[-0.7px]">
                                    Launch Event
                                </p>
                                <p className="text-[#7645E0] text-[27.7px] 2xl:text-[5.2vw] xl:text-[66.2px] lg:text-[53px] md:text-[39.7px] font-[600] leading-[17.1px] 2xl:leading-[75px] xl:leading-[60px] lg:leading-[45.7px] md:leading-[40.5px] tracking-[-0.8px] 2xl:tracking-[-2.5px] xl:tracking-[-2px] lg:tracking-[-1.6px] md:tracking-[-1.2px] mt-[12px] 2xl:mt-[1vw] xl:mt-[14px] lg:mt-[10.5px] md:mt-[7.6px]">
                                    06.12.23
                                </p>
                                <button className="flex px-[30px] py-1 2xl:px-[45px] 2xl:py-3 xl:px-[33px] xl:py-[10px] lg:px-[26px] lg:py-[7px] md:px-[20px] md:py-[5px] bg-[#7645E0] rounded-[10.7px] 2xl:rounded-[2vw] xl:rounded-[25.7px] lg:rounded-[20.5px] md:rounded-[15.4px] w-fit mt-5 2xl:mt-12 xl:mt-[35.6px] lg:mt-[28.2px] md:mt-[21px]">
                                    <span className="text-[#153729] text-[7px] 2xl:text-[22px] xl:text-[16.3px] lg:text-[13px] md:text-[10px] font-[600] leading-[13.6px] 2xl:leading-[44px] xl:leading-[32.6px] lg:leading-[26px] md:leading-[19.5px] tracking-[-0.2px] 2xl:tracking-[-0.6px] xl:tracking-[-0.5px] lg:tracking-[-0.4px] md:tracking-[-0.3px]">
                                        Sign up
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[9vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        January, 2024
                    </p>
                </div>

                <div className="absolute mt-0 2xl:mt-10 xl:mt-[60px] lg:mt-[60px] md:mt-[30px] w-full h-[100vh] left-[600vw] flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center">
                    <div className="relative top-[2vh] lg:top-[7vh] flex justify-center bg-[#222428] w-[88.7vw] h-[342px] rounded-[7.3vw] 2xl:w-[76.7vw] xl:w-[76.7vw] lg:w-[76.7vw] md:w-[76.7vw] 2xl:h-[755px] xl:h-[562px] lg:h-[449px] md:h-[337px] 2xl:rounded-[3.7vw] xl:rounded-[3.7vw] lg:rounded-[3.7vw] md:rounded-[3.7vw]">
                        <div className="flex flex-col items-center justify-center">
                            <img src={LockGrey} alt="Lock Icon" className="w-[24.5px] h-[32.8px] 2xl:w-[2.8vw] 2xl:h-[calc(2.8vw/1280*831)] xl:w-[2.8vw] xl:h-[calc(2.8vw/1280*831)] lg:w-[2.8vw] lg:h-[calc(2.8vw/1280*831)] md:w-[2.8vw] md:h-[calc(2.8vw/1280*831)] " />
                            <p className="mt-[32px] text-white font-[500] text-[30.5px] leading-[27.8px] tracking-[-1px] 2xl:text-[3.5vw] 2xl:leading-[3.2vw] 2xl:tracking-[-1.2px] xl:text-[3.5vw] xl:leading-[3.2vw] xl:tracking-[-1.2px] lg:text-[3.5vw] lg:leading-[3.2vw] lg:tracking-[-1.2px] md:text-[3.5vw] md:leading-[3.2vw] md:tracking-[-1.2px] 2xl:mt-[3.1vh] xl:mt-[3.1vh] lg:mt-[3.1vh] md:mt-[3.1vh]">A whole lot more</p>
                            <h1 className="mt-3 font-[600] text-[45px] leading-[27.8px] tracking-[-1.35px] 2xl:text-[5.1vw] 2xl:leading-[3.2vw] 2xl:tracking-[-1.8px] xl:text-[5.1vw] xl:leading-[3.2vw] xl:tracking-[-1.8px] lg:text-[5.1vw] lg:leading-[3.2vw] lg:tracking-[-1.8px] md:text-[5.1vw] md:leading-[3.2vw] md:tracking-[-1.8px] 2xl:mt-[2.2vh] xl:mt-[2.2vh] lg:mt-[2.2vh] md:mt-[2.2vh]"><GradientText>Coming soon</GradientText></h1>
                        </div>
                    </div>
                    <p className="absolute bottom-[90vh] 2xl:bottom-[4.5vh] xl:bottom-[8.5vh] lg:bottom-[11vh] md:bottom-[8vh] text-white text-[20px] 2xl:text-[30px] xl:text-[22.3px] lg:text-[18px] md:text-[13.4px] font-medium leading-[22px] 2xl:leading-[43px] xl:leading-[32px] lg:leading-[25.6px] md:leading-[19px] tracking-[-0.6px] 2xl:tracking-[-1px] xl:tracking-[-0.7px] md:tracking-[-0.4px]">
                        2024
                    </p>
                </div>
            </div>

            <div className="timeline absolute w-0 bottom-[87vh] lg:bottom-[65px] md:bottom-[45px] opacity-0">
                <TimeBar className="h-[3px] lg:h-[5px] md:h-[5px] sm:h-[3px]" />
                <TimeBall className="bg-[url('assets/lock_white.svg')]" />
            </div>
        </FullSection>
    );
};
