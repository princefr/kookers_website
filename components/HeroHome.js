import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'


export default function HeroHome() {
    return (
        <div style={styles}>
            <div class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    

                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div class="flex items-center justify-between w-full md:w-auto">
                                <a href="/">
                                        <span class="sr-only">Kookers</span>
                                        <img class="h-8 w-auto sm:h-12" src="assets/logo_black.svg"/>
                                    </a>
                                </div>
                            </div>
                            
                        </nav>
                    </div>
                    

                    

                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block">Des plats authentiques.</span>
                                    <span class="block text-red-400">Fait maison.</span>
                                    <span class="block text-red-400 xl:inline">Avec amour.</span>
                                </h1>

                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas preparés par des talents près de chez eux.
                                </p>

                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div class="">
                                        <a href="#" class="w-full flex items-center justify-center px-2 py-3">
                                            <img class="object-contain h-14" src="assets/google-play-badge.png"></img>
                                        </a>
                                    </div>
                                    <div class="">
                                        <a href="#" class="w-full flex items-center justify-center px-2 py-5">
                                            <img class="object-contain h-10" src="assets/Group.svg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="assets/cooking.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}