import styles from '../styles/Home.module.css'
import ConnnectButton from '../components/connectbutton'
import { useState } from 'react'
import { useRouter } from 'next/router'


export default function HeroHome({ user }) {
    const [menu, setMenu] = useState(false)
    const router = useRouter()

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

                                            <svg className="h-8 w-8 text-black" viewBox="0 0 636 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M537.483 550.03C451.529 633.161 331.153 657.796 224.806 624.941L16.3225 622.344L18.741 425.12C-20.9393 310.688 6.06702 178.383 98.5167 88.9697C224.839 -33.2036 425.509 -29.0327 546.726 98.2857C667.944 225.604 663.805 427.857 537.483 550.03ZM181.397 379.562C168.057 365.652 168.431 343.477 182.232 330.032L226.809 286.604C257.923 256.292 302.975 250.557 335.886 270.081L451.804 157.151C460.906 148.284 474.83 147.921 482.904 156.34C490.978 164.759 490.145 178.772 481.043 187.639L365.125 300.569C383.367 334.384 376.151 379.569 345.036 409.882L300.459 453.31C286.658 466.755 264.656 466.378 251.316 452.468L311.504 393.832L288.622 369.972L253.422 404.264C239.622 417.709 217.62 417.332 204.28 403.422L264.468 344.786L241.585 320.926L181.397 379.562Z" fill="#2C2B2B" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d" x="0" y="0" width="636" height="644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="0.5" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <button type="button" onClick={(() => setMenu(true))} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                                <span className="sr-only">Open main menu</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    <a href="#" className="font-bold text-gray-500 hover:text-gray-900 font-montserrat text-sm">fonctionnement</a>

                                    <a href="#" className="font-bold text-gray-500 hover:text-gray-900 font-montserrat text-sm">Sécurité</a>

                                    <a href="#" className="font-bold text-gray-500 hover:text-gray-900 font-montserrat text-sm">Cours de cuisine</a>

                                    {
                                        user.id ? <a href="/dashboard" className="font-bold text-gray-500 hover:text-gray-900 font-montserrat text-sm">dashboard</a> : <ConnnectButton />
                                    }
                                </div>

                            </nav>
                        </div>


                        {
                            menu? <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-4 pt-5 flex items-center justify-between">
                                    <button onClick={(() => router.push("/dashboard"))} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 overflow-hidden focus:outline-none">
                                        <svg className="h-8 w-8" viewBox="0 0 636 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M537.483 550.03C451.529 633.161 331.153 657.796 224.806 624.941L16.3225 622.344L18.741 425.12C-20.9393 310.688 6.06702 178.383 98.5167 88.9697C224.839 -33.2036 425.509 -29.0327 546.726 98.2857C667.944 225.604 663.805 427.857 537.483 550.03ZM181.397 379.562C168.057 365.652 168.431 343.477 182.232 330.032L226.809 286.604C257.923 256.292 302.975 250.557 335.886 270.081L451.804 157.151C460.906 148.284 474.83 147.921 482.904 156.34C490.978 164.759 490.145 178.772 481.043 187.639L365.125 300.569C383.367 334.384 376.151 379.569 345.036 409.882L300.459 453.31C286.658 466.755 264.656 466.378 251.316 452.468L311.504 393.832L288.622 369.972L253.422 404.264C239.622 417.709 217.62 417.332 204.28 403.422L264.468 344.786L241.585 320.926L181.397 379.562Z" fill="#2C2B2B" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d" x="0" y="0" width="636" height="644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="0.5" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div className="-mr-2">
                                        <button type="button" onClick={(() => setMenu(false))} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">fonctionnement</a>

                                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sécurité</a>

                                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Cours de cuisine</a>

                                </div>
                            </div>
                        </div> : null
                        }




                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">Des plats authentiques.</span>
                                    <span className="block text-red-700">Fait maison.</span>
                                    <span className="block text-red-700 xl:inline">Livré.</span>
                                </h1>

                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas préparés par des talents près de chez eux.
                                </p>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
                                    <a href="https://play.google.com/store/apps/details?id=com.getkookers.android">
                                        <button className="bg-gray-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">Télécharger sur</span>
                                                <span className="title-font font-medium">Google Play</span>
                                            </span>
                                        </button>
                                    </a>
                                    <a href="https://apps.apple.com/us/app/kookers-cuisine-authentique/id1529436130">
                                        <button className="bg-gray-300 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">Télécharger</span>
                                                <span className="title-font font-medium">App Store</span>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="assets/cooking.jpg" alt="cooking image" />
                </div>
            </div>
        </div>
    )
}