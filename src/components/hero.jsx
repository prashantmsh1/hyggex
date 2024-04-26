import { MdOutlineLightbulb } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoMdRefresh } from "react-icons/io";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { CgMaximize } from "react-icons/cg";
import FlipCard from "./flipcard";



const Hero = () => {
    return (
        <div className=" mx-auto mt-12">
            <div>
                <h1 className=" text-blue-800 font-bold text-4xl">Relations and Functions (Mathematics)</h1>
            </div>
            <div className=" md:w-1/2 mx-auto mt-8">
                <div className="*:font-medium *:cursor-pointer text-xl md:w-9/12 mx-auto  *: flex flex-row text-center justify-around">
                    <div className="border-b-[3px] px-2 py-1  text-blue-950 border-blue-950" >
                        Study
                    </div>
                    <div className=" transition-all duration-100 hover:border-b-[3px] text-gray-500 px-2 py-1 hover:text-blue-950 border-blue-950">Quiz</div>
                    <div className="transition-all duration-100 hover:border-b-[3px] text-gray-500 px-2 py-1 hover:text-blue-950 border-blue-950">Test</div>
                    <div className="transition-all duration-100 hover:border-b-[3px] text-gray-500 px-2 py-1 hover:text-blue-950 border-blue-950">Game</div>
                    <div className="transition-all duration-100 hover:border-b-[3px] text-gray-500 px-2 py-1 hover:text-blue-950 border-blue-950">Others</div>
                </div>

                <div className=" ">
                    {/* <div className=" justify-center mx-auto relative flex items-center bg-gradient-to-tr from-blue-500 from-10%  via-blue-700 to-blue-950 h-56 md:h-96 mt-8 mb-8 rounded-[40px] ">
                        <div className=" w-full px-10 my-8 absolute left-0 top-0 flex flex-row justify-between ">
                            <button><MdOutlineLightbulb className=" text-white" size={30} /></button>
                            <button><HiOutlineSpeakerWave className=" text-white" size={30} /></button>
                        </div>
                        <h1 className=" text-white font-bold text-4xl"> 9+6+7x-2x-3</h1>
                    </div> */}
                    <FlipCard />
                    <div className=" md:px-12 flex flex-row justify-between items-center">
                        <div><button><IoMdRefresh className=" text-blue-800 text-5xl " /></button></div>
                        <div className=" flex flex-row justify-between items-center space-x-6">
                            <button><IoChevronBackCircle className=" text-6xl text-blue-800" /></button>
                            <div>
                                <span className=" text-2xl text-blue-800">01/10</span>
                            </div>
                            <button><IoChevronForwardCircle className=" text-6xl  text-blue-800" /></button>
                        </div>
                        <div>
                            <button><CgMaximize className=" text-4xl" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;