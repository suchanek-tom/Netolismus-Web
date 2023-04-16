import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion"

import Image from "../public/social-media.png"

const RizikaPage = () =>{
    return(
        <m.body initial={{ opacity: 0.75 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.45, ease: "easeInOut" }}>

            <ScrollToTop />

            {/* Background Image */}
            <div
                className="bg-cover overflow-hidden bg-no-repeat h-screen w-screen md:w-full -z-10"
                style={{
                    backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2019/10/29/20/25/mobile-phone-4588057_960_720.jpg')",
                    
                }}>
                <div 
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}> 
                        <Nav />
                        <div className="flex h-full items-center justify-center">
                            <div className="text-white -mt-28">
                                <h1 className="mb-4 text-8xl font-semibold uppercase">Rizika</h1>
                                <button
                                type="button"
                                className="border-2 py-2 px-5 ml-2 rounded hover:text-black hover:bg-white duration-500 ease-in-out hover:font-semibold ">
                                <a href="#info">Více zde</a>
                                </button>
                            </div>
                    </div>
                </div>
            </div>

            {/* Body */}

            {/* IMG */}
            <img src={Image} alt="Image-phone" className=" h-24 block mx-auto mt-10" id="info" />

            <div className="text-center md:text-left md:flex md:justify-center my-14" id="info">

                <div className="  md:w-1/2">
                    <h2 className="font-bold text-3xl py-2">Fyzická Rizika</h2>
                    <ul className=" list-disc mx-2 text-lg">
                        <li>Sedavý způsob života</li>
                        <li>Obezita</li>
                        <li>Cukrovka</li>
                        <li>Bolestí šíje</li>
                        <li>Bolest ramen</li>
                        <li>Bolest zad</li>
                        <li>Epilepsie</li>
                        <li>Dlouhodobý stres</li>
                    </ul>
                </div>

                <div className=" ">
                        <h2 className="font-bold m-2 text-3xl py-2">Psychologická a sociální rizika</h2>
                        <ul className=" list-disc mx-2 text-lg">
                            <li>Špatná organizace času</li>
                            <li>Nepravidelnost v jídle</li>
                            <li>Nedostatek spánku</li>
                            <li>Úzkost</li>
                            <li>Horší komunikace</li>
                            <li>Horší prospěch ve škole</li>
                            <li>Poruchy paměti</li>
                            <li>Návykové chování</li>
                        </ul>
                </div>

            </div>

            {/* lecba odkaz */}
                <div class="w-full bg-cover bg-fixed bg-no-repeat p-24 border-t-2 border-b-2 border-black"   
                    style={{
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/12/05/19/49/syringe-1884784_960_720.jpg')",
                    }}>
                    <div class=" bg-black rounded-xl bg-opacity-70 p-4">
                        <h1 class="text-center text-white text-2xl font-bold uppercase lg:text-6xl">Jak tomu předejít?</h1>
                        
                        <button class="my-4 mr-auto ml-auto block border-4 border-white text-white p-2 font-bold uppercase hover:bg-white hover:text-black duration-700">
                            <NavLink to="/lecba" className={({ isActive }) =>
                                isActive ? "text-black" : "mx-2"
                            }>Čtěte zde</NavLink>
                        </button>
                    </div>
                </div>

                <p className=" text-center text-xl my-12 px-16 md:px-36">Se vzrůstajícím časem, který hře lidé věnují, omezují veškeré ostatní aktivity, tedy zájmy, koníčky a sport. Ty postupně redukují, až je nakonec zcela opouštějí.</p>

                {/* IMG */}
                <img src={Image} alt="Image-phone" className=" h-24 block mx-auto mt-10" id="info" />

            {/* Footer */}
            <Footer />

        </m.body>
    )
}

export default RizikaPage