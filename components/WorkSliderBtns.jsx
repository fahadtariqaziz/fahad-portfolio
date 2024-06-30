"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"; // Ensure the correct icon names

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={`absolute w-full h-full top-0 left-0 flex justify-between items-center ${containerStyles}`}>
            <button className={`${btnStyles} left-0 ml-4 z-20`} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={`${btnStyles} right-0 mr-4 z-20`} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
