import ScrollToTop from "../components/ScrollToTop"
import Footer from "../components/Footer"


const Homepage = () => {
    return(
        <body>
            
            <ScrollToTop />

            {/* Background Image */}
            <div
                className="bg-cover overflow-hidden bg-no-repeat h-screen w-screen md:w-full"
                style={{
                    backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2019/10/29/20/25/mobile-phone-4588057_960_720.jpg')",
                    
                }}>
                <div 
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}> 
                        <div className="flex h-full items-center justify-center">
                            <div className="text-white">
                                <h1 className="mb-4 text-8xl font-semibold uppercase">Netolismus</h1>
                                <button
                                type="button"
                                className=" border-2 p-2 ml-2 rounded">
                                <a href="#info">Více zde</a>
                                </button>
                            </div>
                    </div>
                </div>

            </div>
            
            {/* BASIC INFO */}

            <p id="info" className=" text-center text-2xl py-12 px-20">Bez internetu se dnes už prakticky nikdo neobejde. Využíváme ho k práci, ke studiu, ke komunikaci s přáteli, k nakupování, k zábavě, k zahnání nudy, zkrátka ke všemu. Internet velmi rychle, spolehlivě a prakticky bez námahy uspokojuje řadu našich lidských potřeb, a proto se také stal tak důležitou součástí našich každodenních životů. Do některých životů se bohužel začlenil tak výrazně, že nemožnost jeho používání vyvolává u člověka abstinenční příznaky. V takovém případě hovoříme o netolismu.</p>

            <p className=" text-center text-2xl py-12 px-20">Netolismus, nebo také chorobná závislost na internetu a jeho službách patří mezi tzv. nelátkové závislosti. Znamená to, že u netolismu není člověk závislý na dodávce nějaké psychoaktivní látky do těla, jako je tomu u drogové závislosti, ale je závislý na určitém procesu, nebo způsobu chování, které nemůže ovládnout, např. potřeba být neustále online, nebo potřeba neustále kontrolovat mobilní telefon. K virtuálním drogám tedy patří sociální sítě, počítačové hry, různé internetové služby, ale i užívání samotných zařízení jako např. mobilní telefon, televize.</p>

            <p className=" text-center text-2xl py-12 px-20">Takovéto nutkavé chování se postupně stává pro daného jedince patologické, ovlivňuje vztahy s jeho rodinou a okolím, ovlivňuje jeho výkon v práci, nebo prospěch ve škole, negativně ovlivňuje i jeho zdraví a může vést k finančním problémům.</p>

            {/* Footer */}
            <Footer />

        </body>
    )
}

export default Homepage