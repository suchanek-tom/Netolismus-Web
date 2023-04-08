import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

import { NavLink } from "react-router-dom";

const RizikaPage = () =>{
    return(
        <body>

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

            <div className="flex justify-center my-14" id="info">

                <div className=" flex-row">
                    <h2 className=" font-bold m-2 text-2xl">Fyzická Rizika</h2>

                    <ul className=" list-disc mx-2">
                        <li>Sedavý způsob života</li>
                        <li>Obezita</li>
                        <li>Cukrovka</li>
                        <li>Bolestí šíje, ramen, bederní páteře, drobných kloubů, zápěstí atd.</li>
                        <li>Epilepsie</li>
                        <li>Dlouhodobý stres</li>
                    </ul>
                </div>

                <div className=" flex-row">
                        <h2 className=" font-bold m-2 text-2xl">Psychologická a sociální rizika</h2>

                        <ul className=" list-disc mx-2">
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
                    <div class=" bg-black rounded-xl bg-opacity-40 p-4">
                        <h1 class="text-center text-white text-2xl font-bold uppercase lg:text-6xl">Jak tomu předejít?</h1>
                        
                        <button class="my-4 mr-auto ml-auto block border-4 border-green-800 text-white p-2 font-bold uppercase hover:text-white duration-700 hover:bg-green-800 ">
                            <NavLink to="/lecba" className={({ isActive }) =>
                                isActive ? "text-black" : "mx-2"
                            }>Čtěte zde</NavLink>
                        </button>
                    </div>
                </div>

            {/* Footer */}
            <Footer />

        </body>
    )
}

export default RizikaPage