import MenuIcon from "../../assets/menu.png"
import Logo from "../../assets/Elixr_Colour_logo.png";

export const Topbar = () => {
    return (
        <div className="fixed left-[50%] translate-x-[-50%] flex justify-between align-center w-[95.3%] z-[11] mt-6 2xl:mt-[58px]">
            <img src={Logo} alt="Elixr Logo" className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[34px] xl:w-[35px] xl:h-[34px]"/>
            {/* <img src={MenuIcon} alt="Menu Icon" className="w-[25px] h-[21px] lg:h-[25px] md:h-[25px] sm:h-[21px] self-center"/> */}
        </div>
    );
};
