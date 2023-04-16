import { NavLink } from "react-router-dom"


const Footer = () =>{
    return(
        <footer className=" shadow mt-4 bg-black text-white">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">
                         <b>Stránku vytvořil:</b> Tomáš Suchanek (2023) SPŠ Karviná
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
                    <li>
                        <NavLink to="/"  className={({ isActive }) =>
                            isActive ? "text-white" : "mx-2"
                        }>Domů</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Priznaky"  className={({ isActive }) =>
                            isActive ? "text-white " : "ml-4 mr-2"
                        }>Příznaky</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Rizika" className={({ isActive }) =>
                            isActive ? "text-white" : "mx-2"
                        }>Rizika</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lecba" className={({ isActive }) =>
                            isActive ? "text-white " : "mx-2"
                        }>Léčba</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer