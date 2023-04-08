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
                                <div className="text-white">
                                    <h1 className="mb-4 text-8xl font-semibold uppercase">Léčba</h1>
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


                {/* Footer */}
                <Footer />
        </>
    )
}

export default LecbaPage