
const Footer = () =>{
    return(
        <footer className=" bg-white rounded-lg shadow m-4">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm sm:text-center">
                         <b>Stránku vytvořil:</b> Tomáš Suchanek (2023)
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer