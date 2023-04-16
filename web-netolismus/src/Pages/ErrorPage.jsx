import { NavLink } from "react-router-dom"

const ErrorPage = () =>{
    return(
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                               Vypadá to, že jste našel bránu, která nikam nevede
                            </h1>
                            <p className="my-2 text-gray-800">Omlouváme se vám! <br />Navštivte prosím naši domovskou stránku, abyste se dostali tam, kam potřebujete.</p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-2 px-4 text-center bg-black text-white hover:opacity-50 focus:outline-none duration-500">
                            <NavLink to="/" className=" text-2xl font-semibold">
                                Domů
                            </NavLink>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/06/15/18/49/plug-1459663_960_720.png" />
            </div>
        </div>
    )
}

export default ErrorPage