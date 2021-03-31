import BellComponent from './bell_component'
import UserPicture from './userpicturecomponent'
import { useRouter } from 'next/router'


import {
    useAuthUser
} from 'next-firebase-auth'
import { useEffect } from 'react'
import FirebaseClient from '../Helpers/firebase'

function Nav() {
    FirebaseClient()
    const router = useRouter()
    const firebaseUser = useAuthUser()


    useEffect(async() => {
        router.prefetch("/publish")
        router.prefetch("/dashboard")
    }, [])

    return (
        <div className="flex flex-row h-16  justify-between p-1 bg-white sticky top-0">
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
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
                    <span className="ml-2 font-montserrat font-bold text-xl">KOOKERS</span>
                </button>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <div className="relative text-gray-600 mx-7">
                        <input type="search" name="serch" placeholder="Rechercher...." className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96  font-montserrat" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </nav>
                <div className="inline-flex items-center space-x-2 lg:space-x-3">
                    <button
                        type="button"
                        onClick={() => router.push('/publish')} className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                    >
                        <svg className="h-5 w-auto" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span className="font-montserrat text-sm">Ajouter un cours</span>

                    </button>
                    <BellComponent />
                    <UserPicture firebaseUser={firebaseUser} />
                </div>
            </div>
        </div>
    )
}



export default Nav