import { FullSection } from "../../theme/components";
import MacBook from "../../assets/MacBook.png"

export const FeatureSection = () => {
    return (
        <FullSection className="flex flex-col items-center">
            <div className="flex justify-center gap-[23px]">
                <div className="w-[44.3vw] h-[calc(44.3vw/767*755)] bg-[#B5CC6C] rounded-[64px] px-[70px] pt-[78px]">
                    <p className="text-white text-[80px] font-medium leading-[44px] tracking-[-3px]">MetaConnex</p>
                    <div className="flex gap-8 mt-6 mb-3">
                        <p className="text-white text-[33px] leading-[44px] tracking-[-1px]">Planning</p>
                        <p className="text-white text-[33px] leading-[44px] tracking-[-1px]">Digital Twin</p>
                        <p className="text-white text-[33px] leading-[44px] tracking-[-1px]">Hardware</p>
                    </div>
                    <button className="px-6 py-3 rounded-[34px] w-fit bg-white"><span className="text-[#B5CC6C] text-[22px] font-[600] leading-[44px] tracking-[-1px]">Learn more</span></button>
                    <img className="mt-12" src={MacBook} alt="Mac Book" />
                </div>
                <div className="flex flex-col gap-[23px]">
                    <div className="flex flex-col items-center justify-center w-[30.6vw] h-[calc(30.6vw/530*366)] rounded-[70px] bg-[#222428] bg-[url('assets/wave.png')] bg-no-repeat bg-bottom bg-cover">
                        <p className="text-white text-[150px] font-[600] tracking-[-4px]">£25M</p>
                        <p className="text-white text-[20px] font-medium leading-[25px] tracking-[-0.5px]">PreValuation</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30.6vw] h-[calc(30.6vw/530*366)] rounded-[70px] bg-[#222428]">
                        <p className="text-white text-[50px] font-medium leading-[55px] tracking-[-1px]">Launch Event</p>
                        <p className="text-[#B5CC6C] text-[89px] font-[600] leading-[55px] tracking-[-2.5px] mt-[18px]">11.08.23</p>
                        <button className="px-[45px] py-[12px] bg-[#B5CC6C] rounded-[34.5px] w-fit mt-12"><span className="text-[22px] font-[600] leading-[44px] tracking-[0.6px]">Sign up</span></button>
                    </div>
                </div>
            </div>
        </FullSection>
    );
};
