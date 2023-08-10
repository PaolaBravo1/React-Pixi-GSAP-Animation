import LoadingIcon from "../../assets/LoadingIcon.gif"

export const LoaderScreen = () => {
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center pt-0 lg:pt-5 md:pt-5 sm:pt-0">
            <img
                src={LoadingIcon}
                className="w-[40vw] lg:w-[10vw] md:w-[10vw] sm:w-[40vw] h-[40vw] lg:h-[10vw] md:h-[10vw] sm:h-[40vw]"
            ></img>
        </div>
    );
};
