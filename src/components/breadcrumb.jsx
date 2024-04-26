import { GoHome } from "react-icons/go";

import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
    return (
        <div className=" flex flex-row *:items-center mt-12">
            <div className=" items-center flex md:px-2">
                <GoHome size={28} />

            </div>
            <div className=" flex items-center">
                <ul className=" *:flex *:flex-row *:items-center *:font-medium *:text-lg *:text-gray-500  flex flex-row md:space-x-2 ">
                    <li className="  ">
                        <IoIosArrowForward className=" text-blue-900" />
                        Flashcard
                    </li>
                    <li>

                        <IoIosArrowForward className=" text-blue-900" />
                        Mathematics
                    </li>
                    <li className=" ">

                        <IoIosArrowForward className=" text-blue-900" />
                        <span className="  text-blue-950">Relation and Functions</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb