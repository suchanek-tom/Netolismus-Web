


const Homepage = () => {
    return(
        <body>
            
            {/* Background Image */}
            <div
                className="bg-cover overflow-hidden bg-no-repeat h-screen w-screen md:w-full"
                style={{
                    backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2019/10/29/20/25/mobile-phone-4588057_960_720.jpg')",
                    
                }}>
                <div 
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}> 
                        <div class="flex h-full items-center justify-center">
                            <div class="text-white">
                                <h1 class="mb-4 text-8xl font-semibold uppercase">Netolismus</h1>
                                <button
                                type="button"
                                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Call to action
                                </button>
                            </div>
                    </div>
                </div>

            </div>
            
            {/* BASIC INFO */}
            <h1>Netolismus</h1>

            <p>Bez internetu se dnes už prakticky nikdo neobejde. Využíváme ho k práci, ke studiu, ke komunikaci s přáteli, k nakupování, k zábavě, k zahnání nudy, zkrátka ke všemu. Internet velmi rychle, spolehlivě a prakticky bez námahy uspokojuje řadu našich lidských potřeb, a proto se také stal tak důležitou součástí našich každodenních životů. Do některých životů se bohužel začlenil tak výrazně, že nemožnost jeho používání vyvolává u člověka abstinenční příznaky. V takovém případě hovoříme o netolismu.</p>

        </body>
    )
}

export default Homepage