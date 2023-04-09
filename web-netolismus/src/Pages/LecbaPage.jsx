import ScrollToTop from "../components/ScrollToTop"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const LecbaPage = () =>{
    return(
        <>

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

                    {/* jak tomu předcházet */}
                    <h2 className=" text-4xl font-bold text-center my-5" id="info">Jak netolismu předcházet?</h2>

                    <ol className=" list-disc mx-5">
                        <li>Sledujte, jaké hry děti hrají.</li>
                        <li>Uvědomte si, že hry mají i kladné stránky: některé umožňují rozvíjet logiku, postřeh, schopnost orientace ve složité situaci apod.</li>
                        <li>Hrajte hry spolu s dítětem a potom si o nich povídejte – pomáháte tak rozlišovat fikci od reality.</li>
                        <li>Stanovte striktní limity, kdy dítě může hrát a kdy ne.</li>
                        <li>Dávejte pozor, aby dítě nehrálo hry u kamarádů.</li>
                        <li>Zjistěte, zda dítě hraním počítačových her neutíká od nějakých problémů.</li>
                        <li>V průběhu hraní veďte dítě k tomu, aby si po určité době (např. po hodině) udělalo přestávku, během ní o hře mluvte.</li>
                        <li>Podporujte dítě v jiných zájmech.</li>
                        <li>Předcházejte tomu, aby se dítě nudilo.</li>
                        <li>Posilujte zdravé sebevědomí dítěte.</li>
                    </ol>

                    {/* léčba */}
                    <h2 className=" text-4xl font-bold text-center my-5">Léčba</h2>

                    <p className=" text-center text-xl my-2 px-2 md:px-10">Obecně se odborníci shodují, že hlavní léčebnou metodou pro závislost na internetu by měla být psychoterapie, doplněná farmakoterapií v případě závažnějších případů, zejména antidepresivy. Nicméně, pouze zlomek závislých vyhledává odbornou pomoc, pravděpodobně kvůli tomu, že mnoho z nich se dokáže samo nebo s pomocí svých blízkých omezit. Dalším vysvětlením může být tendence popírat závislost samotnými závislými a nedostatečná informovanost veřejnosti o této problematice a možnostech léčby.</p>

                    <p className=" text-center text-xl my-2 px-2 md:px-10">Vážné případy závislosti na internetu však přesto mohou být léčeny odborníky, jak ukazují zprávy o vzniku specializovaných zařízení v zahraničí. Většina odborníků se shoduje na tom, že není reálné si v rámci terapeutických intervencí klást za cíl být po zbytek života offline, protože internet je neodmyslitelnou součástí moderní společnosti. Místo toho se doporučuje kontrolované užívání internetu, s cílem přerušit používání problematických aplikací (jako jsou online hry, pornografické stránky či chatování) a pokračovat v užívání méně ohrožujících aplikací, které jsou potřebné pro běžné fungování (například emailová pošta nebo vyhledávání informací).</p>
                    

                {/* Footer */}
                <Footer />
        </>
    )
}

export default LecbaPage