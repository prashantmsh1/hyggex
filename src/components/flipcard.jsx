
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { MdOutlineLightbulb } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
        >
            <div className="front">
                <div onClick={handleClick} className=" justify-center mx-auto relative flex items-center bg-gradient-to-tr from-blue-500 from-10%  via-blue-700 to-blue-950 h-56 md:h-96 mt-8 mb-8 rounded-[40px] ">
                    <div className=" w-full px-10 my-8 absolute left-0 top-0 flex flex-row justify-between ">
                        <button><MdOutlineLightbulb className=" text-white" size={30} /></button>
                        <button><HiOutlineSpeakerWave className=" text-white" size={30} /></button>
                    </div>
                    <h1 className=" text-white font-bold text-4xl"> 9+6+7x-2x-3</h1>
                </div>

            </div>
            <div className="back">

                <div onClick={handleClick} className=" justify-center mx-auto relative flex items-center bg-gradient-to-tr from-cyan-500   via-cyan-800  to-blue-950 h-56 md:h-96 mt-8 mb-8 rounded-[40px] ">
                    <div className=" w-full px-10 my-8 absolute left-0 top-0 flex flex-row justify-between ">
                        <button><MdOutlineLightbulb className=" text-white" size={30} /></button>
                        <button><HiOutlineSpeakerWave className=" text-white" size={30} /></button>
                    </div>
                    <h1 className=" text-white font-bold text-4xl"> 9+6+7x-2x-3</h1>
                </div>

            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;