import ScrollToTop from "../components/ScrollToTop"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import Image from "../images/social-media.png"

import { motion as m } from "framer-motion"

const LecbaPage = () =>{

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
                                    <h1 className="mb-4 text-8xl font-semibold uppercase">Léčba</h1>
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


                    {/* jak tomu předcházet */}

                       <section>
                            <div className="py-6 bg-white">  
                                <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
                                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                    <div className="md:5/12 lg:w-5/12">
                                        <img src="https://cdn.pixabay.com/photo/2016/07/29/15/26/pokemon-1553971_960_720.jpg" alt="Relaps" />
                                    </div>
                                    <div className="md:7/12 lg:w-6/12">
                                        <h2 className=" text-4xl font-bold my-5" id="info">Jak netolismu předcházet?</h2>
                                        <ol className=" list-disc text-xl px-10">
                                            <li>Sledujte, jaké hry děti hrají.</li>
                                            <li>Hrajte hry spolu s dítětem a potom si o nich povídejte <br /> <i>(pomáháte tak rozlišovat fikci od reality)</i></li>
                                            <li>Stanovte striktní limity, kdy dítě může hrát a kdy ne.</li>
                                            <li>Dávejte pozor, aby dítě nehrálo hry u kamarádů.</li>
                                            <li>Zjistěte, zda dítě hraním počítačových her neutíká od nějakých problémů.</li>
                                            
                                            <li>Podporujte dítě v jiných zájmech.</li>
                                            <li>Předcházejte tomu, aby se dítě nudilo.</li>
                                            <li>Posilujte zdravé sebevědomí dítěte.</li>
                                        </ol>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                    </section>

                    {/* léčba */}
                    <h2 className=" text-4xl font-bold text-center my-5">Léčba</h2>

                    <p className=" text-center text-xl my-2 px-2 md:px-10">Obecně se odborníci shodují, že hlavní léčebnou metodou pro závislost na internetu by měla být psychoterapie, doplněná farmakoterapií v případě závažnějších případů, zejména antidepresivy. Nicméně, pouze zlomek závislých vyhledává odbornou pomoc, pravděpodobně kvůli tomu, že mnoho z nich se dokáže samo nebo s pomocí svých blízkých omezit. Dalším vysvětlením může být tendence popírat závislost samotnými závislými a nedostatečná informovanost veřejnosti o této problematice a možnostech léčby.</p>

                    <p className=" text-center text-xl my-2 px-2 md:px-10">Vážné případy závislosti na internetu však přesto mohou být léčeny odborníky, jak ukazují zprávy o vzniku specializovaných zařízení v zahraničí. Většina odborníků se shoduje na tom, že není reálné si v rámci terapeutických intervencí klást za cíl být po zbytek života offline, protože internet je neodmyslitelnou součástí moderní společnosti. Místo toho se doporučuje kontrolované užívání internetu, s cílem přerušit používání problematických aplikací (jako jsou online hry, pornografické stránky či chatování) a pokračovat v užívání méně ohrožujících aplikací, které jsou potřebné pro běžné fungování (například emailová pošta nebo vyhledávání informací).</p>

                    {/* IMG */}
                    <img src={Image} alt="Image-phone" className=" h-24 block mx-auto mt-10" id="info" />
                    
                {/* Footer */}
                <Footer />
        </m.body>
    )
}

export default LecbaPage