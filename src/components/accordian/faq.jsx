import { IoIosArrowDown } from "react-icons/io";
import data from "./data"
import { useState } from "react"
export default function Faq() {
    const [selection, setselection] = useState(null)
    const [multiSelection, setmultiSelection] = useState(true)
    const [multiSelectionData, setmultiSelectionData] = useState([])
    function handleSingleSelection(getId) {

        if (selection === getId) {
            setselection(false)
        } else {
            setselection(getId)
        }
    }
    function handleMultiSelection(getId) {

        let temp = [...multiSelectionData];
        setselection(false)
        const findIndexofId = temp.indexOf(getId)
        console.log(findIndexofId)
        if (findIndexofId === -1) {
            temp.push(getId)
        }
        else {
            temp.splice(findIndexofId, 1)
        }
        setmultiSelectionData(temp)
    }
    console.log(multiSelection, multiSelectionData)
    return (
        <div className=" mt-44 mb-44">
            <h1 className="text-4xl font-bold text-blue-900">FAQ</h1>

            <div className=" flex mt-12 flex-col justify-center  md:w-4/5 space-y-8  ">
                {
                    data && data.length > 0 ?
                        (data.map((item) =>
                        (
                            <div key={item.id} onClick={multiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="flex h-fit p-4 cursor-pointer flex-row border-blue-600 border rounded-xl transition-transform duration-500 flex-wrap space-y-2 ">
                                <div className="flex flex-row  items-center w-full justify-between ">
                                    <h1 className="text-lg font-semibold text-black">{item.question}</h1>
                                    <button onClick={multiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className={`text-xl font-bold`}><IoIosArrowDown className={` ${multiSelectionData.indexOf(item.id) !== -1 ? "rotate-180" : ""} `} /></button>
                                </div>
                                {
                                    selection === item.id || multiSelectionData.indexOf(item.id) !== -1 ? <div className=" text-gray-800 font-medium  ">{item.answer}</div> : null
                                }
                            </div>
                        )
                        )) : <div>No data Found</div>
                }
            </div>
        </div>
    )
}