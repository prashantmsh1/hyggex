import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className=" flex flex-row justify-between *:items-center  pt-4">
                <div className=" flex flex-row items-center"><img src={logo} className="h-10 w-12 mix-blend-lighten " alt="" />
                    <span className=" font-medium text-4xl text-blue-900 ">Hygge<span className=" font-bold">X</span></span>
                </div>
                <div className=" flex flex-row md:w-1/2 md:space-x-4 mt-4 lg:w-1/3 justify-around items-center">
                    <ul className=" hidden  md:flex text-lg font-normal text-gray-700 md:flex-row space-x-6 items-center">
                        <li>Home</li>
                        <li>Flashcard</li>
                        <li>Content</li>
                        <li>FAQ</li>
                    </ul>
                    <button className=" items-center justify-self-end rounded-full font-normal text-white px-10 py-3 bg-blue-800 text-lg">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;