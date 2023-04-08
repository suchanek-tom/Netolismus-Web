import ScrollToTop from "../components/ScrollToTop"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const PriznakyPage = () =>{
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
                            <div className="text-white">
                                <h1 className="mb-4 text-8xl font-semibold uppercase">Příznaky</h1>
                                <button
                                type="button"
                                className=" border-2 p-2 ml-2 rounded">
                                <a href="#info">Více zde</a>
                                </button>
                            </div>
                    </div>
                </div>
            </div>

            {/* Body */}

                {/* 1 */}
            <section>
                <div className="py-16 bg-white">  
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            {/* img */}
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">1. Význačnost</h2>
                            <p className="mt-6 text-gray-600">Určitá aktivita se stane nejdůležitější v životě člověka a začíná ovládat jeho myšlení, cítění a chování.</p>
                            
                        </div>
                        </div>
                    </div>
                </div>  
            </section>

                {/* 2 */}
                    <section className="my-10">
                        <div className="py-16 bg-white">  
                            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                    <div className="md:7/12 lg:w-6/12">
                                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">2. Změny nálady</h2>
                                    <p className="mt-6 text-gray-600">V důsledku zapojení se do určité aktivity, které mohou být vnímány jako vyrovnávací strategie za účelem uklidnění se.</p>
                                    
                                    </div>
                                    <div className="md:5/12 lg:w-5/12">
                                        {/* img */}
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </section>

                {/* 3 */}
                    <section>
                        <div className="py-16 bg-white">  
                            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                <div className="md:5/12 lg:w-5/12">
                                    {/* img */}
                                </div>
                                <div className="md:7/12 lg:w-6/12">
                                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">3. Tolerance</h2>
                                    <p className="mt-6 text-gray-600">Proces, při kterém je nutno stále více aktivity k dosažení předchozí míry uspokojení. V praxi tedy např. roste délka času tráveného online.</p>
                                </div>
                                </div>
                            </div>
                        </div>  
                    </section>

                {/* 4 */}
                    <section className="my-10">
                            <div className="py-16 bg-white">  
                                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                        <div className="md:7/12 lg:w-6/12">
                                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">4. Odvykací příznaky</h2>
                                        <p className="mt-6 text-gray-600">Ukončení či omezení aktivity se projevuje abstinenčními <abbr title="Symptom je odborný výraz pro příznak. Nahromadění typických příznaků (symptomů) lékaři označují jako syndrom." className="font-semibold">symptomy</abbr>.</p>
                                        
                                        </div>
                                        <div className="md:5/12 lg:w-5/12">
                                            {/* img */}
                                        </div>
                                    </div>
                                </div>
                            </div>  
                    </section>

                {/* 5 */}
                    <section>
                            <div className="py-16 bg-white">  
                                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                    <div className="md:5/12 lg:w-5/12">
                                        {/* img */}
                                    </div>
                                    <div className="md:7/12 lg:w-6/12">
                                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">5. Relaps (znovuvzplanutí)</h2>
                                        <p className="mt-6 text-gray-600">Tendence opakovat dřívější vzorce závislostního chování.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                    </section>

                {/* 6 */}
                    <section className="my-10">
                            <div className="py-16 bg-white">  
                                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                        <div className="md:7/12 lg:w-6/12">
                                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">6. Konflikt</h2>
                                        <p className="mt-6 text-gray-600">Závislost vyvolává problémy: narušuje např. vztahy v zaměstnání, ovlivňuje prospěch, dochází ke ztrátě kontroly, výčitkám apod.</p>
                                        
                                        </div>
                                        <div className="md:5/12 lg:w-5/12">
                                            {/* img */}
                                        </div>
                                    </div>
                                </div>
                            </div>  
                    </section>

            {/* Footer */}
            <Footer />
            
        </>
    )
}

export default PriznakyPage