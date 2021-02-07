import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'


export default function HeroHome() {
    return (
        <div style={styles}>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    

                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="/">
                                        <span className="sr-only">Kookers</span>
                                        <img className="h-8 w-auto sm:h-12" src="assets/logo_black.svg"/>
                                    </a>
                                </div>
                            </div>
                            
                        </nav>
                    </div>
                    

                    

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">Des plats authentiques.</span>
                                    <span className="block text-red-400">Fait maison.</span>
                                    <span className="block text-red-400 xl:inline">Avec amour.</span>
                                </h1>

                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas preparés par des talents près de chez eux.
                                </p>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    {/* <div className="">
                                        <a href="#" className="w-full flex items-center justify-center px-2 py-3">
                                            <img className="object-contain h-14" src="assets/google-play-badge.png"></img>
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#" className="w-full flex items-center justify-center px-2 py-5">
                                            <img className="object-contain h-10" src="assets/Group.svg"></img>
                                        </a>
                                    </div> */}

                                    
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="assets/cooking.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}