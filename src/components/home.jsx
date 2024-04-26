import Navbar from "../components/navbar"
import Breadcrumb from "../components/breadcrumb";
import Hero from "../components/hero";
import NewFlash from "./newflash";
import Faq from "../components/accordian/faq";

const Home = () => {
    return (
        <div className=" font-bold w-11/12 mx-auto">
            <Navbar />
            <Breadcrumb />
            <Hero />
            <NewFlash />
            <Faq />
        </div>
    );


}
export default Home