import ScrollToTop from "../components/ScrollToTop"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

import Image from "../images/social-media.png"

import { motion as m } from "framer-motion"

const Homepage = () => {
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
                                <h1 className="mb-4 text-6xl md:text-8xl font-semibold uppercase">Netolismus</h1>
                                <button
                                type="button"
                                className=" border-2 py-2 px-5 ml-2 rounded hover:text-black hover:bg-white duration-500 ease-in-out hover:font-semibold">
                                <a href="#info">Více zde</a>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            
            {/* BASIC INFO */}

            {/* IMG */}
            
            <img src={Image} alt="Image-phone" className=" h-24 block mx-auto mt-10" id="info" />

            <p className=" text-center text-2xl my-8 px-4 md:px-12">Bez internetu se dnes už prakticky nikdo neobejde. Využíváme ho k práci, ke studiu, ke komunikaci s přáteli, k nakupování, k zábavě, k zahnání nudy, zkrátka ke všemu. Internet velmi rychle, spolehlivě a prakticky bez námahy uspokojuje řadu našich lidských potřeb, a proto se také stal tak důležitou součástí našich každodenních životů. Do některých životů se bohužel začlenil tak výrazně, že nemožnost jeho používání vyvolává u člověka abstinenční příznaky. V takovém případě hovoříme o netolismu.</p>

            {/* VIDEO */}

            <iframe width="720" height="480" 
                    src="https://www.youtube.com/embed/4UBwrHIqyVM" 
                    title="Zavislost na Internetu" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className=" block mx-auto m-5 border border-black w-full md:w-3/4"
                    >    
            </iframe>

            <p className=" text-center text-2xl my-8 px-2 md:px-10">Netolismus, nebo také chorobná závislost na internetu a jeho službách patří mezi tzv. nelátkové závislosti. Znamená to, že u netolismu není člověk závislý na dodávce nějaké psychoaktivní látky do těla, jako je tomu u drogové závislosti, ale je závislý na určitém procesu, nebo způsobu chování, které nemůže ovládnout, např. potřeba být neustále online, nebo potřeba neustále kontrolovat mobilní telefon. K virtuálním drogám tedy patří sociální sítě, počítačové hry, různé internetové služby, ale i užívání samotných zařízení jako např. mobilní telefon, televize.</p>

                    {/* <section>
                            <div className="py-6 bg-white">  
                                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                    <div className="md:5/12 lg:w-5/12">
                                        <img src="https://cdn.pixabay.com/photo/2014/07/21/03/53/digital-art-398342_960_720.png" alt="Relaps" />
                                    </div>
                                    <div className="md:7/12 lg:w-6/12">
                                        <p className="mt-6 text-black text-2xl">Takovéto nutkavé chování se postupně stává pro daného jedince patologické, ovlivňuje vztahy s jeho rodinou a okolím, ovlivňuje jeho výkon v práci, nebo prospěch ve škole, negativně ovlivňuje i jeho zdraví a může vést k finančním problémům.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                    </section> */}

                    <img src={Image} alt="Image-phone" className=" h-24 block mx-auto my-10" />

            {/* Footer */}
            <Footer />

        </m.body>
    )
}

export default Homepage