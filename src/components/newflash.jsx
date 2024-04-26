import logo from "../assets/logo.png"
import { FaCirclePlus } from "react-icons/fa6";

const NewFlash = () => {
    return (
        <div className="  flex mt-12  md:flex-row flex-col-reverse space-y-10 justify-between items-center">
            <div className=" hidden md:flex flex-row space-x-4">
                <div className=" rounded-full border shadow-[0px_0px_20px_0px_#2b6cb0] p-4">
                    <img src={logo} className=" h-12 w-12" alt="" />

                </div>
                <div className=" flex flex-col">
                    <span className=" text-gray-700 text-sm font-medium">Published by</span>
                    <span className=" font-medium text-4xl text-blue-900 ">Hygge<span className=" font-bold">X</span></span>
                </div>
            </div>
            <div className=" flex flex-row space-x-2 items-center">

                <button><FaCirclePlus className=" text-5xl text-blue-800" /></button>
                <span className=" font-semibold text-3xl text-blue-800">Create Flashcard</span>

            </div>

        </div>
    )
}

export default NewFlash