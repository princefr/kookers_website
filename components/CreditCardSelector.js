import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CardLogo from "./CardLogo"




export default function CreditCardSelector({ cards }) {
    const [card, setCard] = useState()
    const [openCardDropDown, setopenCardDropDown] = useState()
    const router = useRouter()

    const navigateToMethodes = () => {
        router.push("/paymentmethod")
    }

    useEffect(() => {
        router.prefetch("/paymentmethod")
    }, [])

    return (
        <div className="mt-4 relative">
            <button type="button" onClick={(() => setopenCardDropDown(!openCardDropDown))} className="relative w-full justify-center items-center bg-white border border-gray-300  shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                <span className="flex items-center">
                    <CardLogo logoName="visa" style={true}></CardLogo>

                    <span className="ml-3 block truncate font-montserrat text-lg text-center">
                        **** **** **** 4579
                    </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    {/* <!-- Heroicon name: solid/selector --> */}
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>

            {
                openCardDropDown ? <ul className="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                    <button onClick={navigateToMethodes} className="w-full overflow-none focus:outline-none">
                        <div className="flex items-center">
                            <CardLogo logoName="base" style={true}></CardLogo>
                            <span className="font-normal ml-3 block truncate text-sm font-montserrat">
                                Ajouter une carte
                            </span>
                        </div>
                    </button>
                    <span className="text-black absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </span>
                </li>
                <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                    <div className="flex items-center">
                        <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />

                        <span className="font-normal ml-3 block truncate">
                            Wade Cooper
                    </span>
                    </div>
                    <span className="text-black absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                </li>

                {/* <!-- More items... --> */}
            </ul> : null
            }


        </div>
    )
}