import React, { useState } from "react";
import ElixrLogo from "../../assets/ELIXR_Preloader.gif";
import ElixrText from "../../assets/elixr_wordmark.svg";
import SenderGray from "../../assets/gray_sender.svg";
import SenderPink from "../../assets/pink_sender.svg";
import styled from "styled-components";
const FadeInDiv = styled.div`
    animation-name: fadein;
    animation-duration: 2s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Holding = () => {
    const [isNotify, setNotify] = useState<boolean>(false);
    const [isSent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const handleEmail = () => {
        if (email) {
            setSent(true);
        }
    };

    return (
        <div className="relative flex justify-center items-center w-[100vw] h-[100vh] bg-[#000]">
            <div className="flex flex-col items-center">
                <img
                    className="w-[121px] h-[121px] lg:w-[150px] lg:h-[150px]"
                    src={ElixrLogo}
                    alt="Elixr Logo"
                />
                <img className="" src={ElixrText} alt="Elixr Text" />
            </div>
            <div className="absolute mx-auto bottom-[32px] flex flex-col items-center justify-center w-[353px] h-[145px] lg:w-[500px] lg:h-[205px] rounded-[21.8px] lg:rounded-[30.9px] bg-[#131518]">
                {!isNotify ? (
                    <>
                        <p className="text-white text-center text-[23px] lg:text-[32.5px] font-[500] leading-[17px] lg:leading-[24.2px] tracking-[-0.7px] lg:tracking-[-0.1px]">
                            Launching on
                        </p>
                        <p className="text-white text-[42px] lg:text-[59.5px] font-[600] leading-[17px] lg:leading-[24.2px] tracking-[-1.26px] lg:tracking-[-1.78px] mt-[18px] lg:mt-[26px]">
                            14.07.23
                        </p>
                        <button
                            className="bg-gradient-to-r from-[#DF1583] to-[#21466E] mt-[15px] lg:mt-[22px] w-[147px] lg:w-[208px] h-[30px] lg:h-[42.5px] flex justify-center items-center rounded-[20px] lg:rounded-[28.3px]"
                            onClick={() => setNotify(true)}
                        >
                            <span className="text-white text-[10px] lg:text-[14px] font-[600] leading-[14px] lg:leading-[19.3px] tracking-[-0.3px] lg:tracking-[-0.42px]">
                                Notify me
                            </span>
                        </button>
                    </>
                ) : !isSent ? (
                    <FadeInDiv className="w-[233px] h-[53px] lg:w-[330px] lg:h-[75px] pl-[20px] lg:pl-[29px] flex items-center bg-[url(assets/holding_border.svg)] bg-cover bg-no-repeat">
                        <input
                            className="bg-transparent text-center w-[149px] lg:w-[221px] text-[#ccc] text-[12px] lg:text-[17px] font-[400] focus:outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                        />
                        <button
                            onClick={handleEmail}
                            className="bg-white ml-4 w-[41px] h-[41px] lg:w-[58px] lg:h-[58px] rounded-[999px] flex justify-center items-center"
                        >
                            {!email ? (
                                <img src={SenderGray} alt="SenderGray" />
                            ) : (
                                <img src={SenderPink} alt="SenderGray" />
                            )}
                        </button>
                    </FadeInDiv>
                ) : (
                    <p className="w-[175px] lg:w-[247px] self-center text-center text-[#ccc] text-[20px] lg:text-[28.2px] font-[500] leading-[25px] lg:leading-[35.3px] tracking-[-0.6px] lg:tracking-[-0.84px]">
                        You will hear from us soon.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Holding;
