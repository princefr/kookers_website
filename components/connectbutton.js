import React, { useState } from "react";
import firebase from 'firebase/app'
import 'firebase/auth'
import CountryPicker from '../components/CountryPicker';




function ConnnectButton() {



    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);



    const [timer, setTimer] = useState(60);
    const [codeIsLoading, setCodeIsLoading] = useState(false);
    const [codeIsDisabled, setCodeIsDisabled] = useState(true);

    const [isConnectLoading, setConnectLoading] = useState(false);
    const [isConnectDisabled, setConnectDisabled] = useState(true);

    const [verificationCode, setVerificationCode] = useState(true);


    const countdown = () => {
        var interval = setInterval(() => {
            const time = _timer => {
                if (_timer > 0) {
                    return _timer - 1
                } else {
                    setTimer(60)
                    setCodeIsDisabled(false)
                    setCodeIsLoading(false)
                    clearInterval(interval)
                }
            }
            setTimer(time)
        }, 1000);
    }




    const handlePhoneChange = (e) => {
        if (!e.length) {
            setCodeIsDisabled(true)
        } else {
            setCodeIsDisabled(false)
        }
    }

    const handleCodeChange = (e) => {
        if (!e.length) {
            setConnectDisabled(true)
        } else {
            setConnectDisabled(false)
        }
    }





    const handleSignUpWithPhone = event => {
        event.preventDefault();
        setCodeIsLoading(true)
        setCodeIsDisabled(true)
        countdown()
        const appVerifier = new firebase.auth.RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible"
            }
        );
        appVerifier.render().then((wigetID) => {
            firebase.auth().signInWithPhoneNumber("+33782798614", appVerifier).then((confirmationResult) => {
                window.grecaptcha.reset(wigetID)
                setVerificationCode(confirmationResult);
            }).catch((err) => {
                window.grecaptcha.reset(wigetID)
                console.log("une erreur est survenu", err)
            })
        })

    }


    const onVerifyCodeSubmit = event => {
        event.preventDefault();
        setConnectLoading(true)
        setConnectDisabled(true)
        verificationCode.confirm("123456").then(() => {
            setConnectLoading(false)
            setConnectDisabled(false)
        }).catch((err) => {
            console.error("Error while checking the verification code", err);
        })
    }




    return (
        <div className="relative inline-block text-left">
            <a href="#" onClick={toggleModal} className="text-red-700 text-sm font-montserrat font-bold">Se connecter</a>
            {
                showModal ?
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>


                            <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                            <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                                <div className="flex flex-col relative p-4 space-y-3">
                                    <div className="flex flex-row justify-between items-end">
                                        <div></div>
                                        <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                            <a href="#">
                                                <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-row py-8  mx-auto">
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
                                        <span className="ml-2 font-montserrat text-2xl font-extrabold">KOOKERS</span>
                                    </div>
                                    <div className="flex flex-col items-start space-y-3 px-14">
                                        <div className="text-2xl font-montserrat font-semibold">Connexion</div>
                                        <div className="text-base font-montserrat font-semibold mt-24">Téléphone</div>
                                        <div className="h-10 w-full">
                                            <CountryPicker onChange={handlePhoneChange}></CountryPicker>
                                        </div>
                                        <div className="flex flex-row  w-full space-x-3">
                                            <input onChange={(e) => handleCodeChange(e.target.value)} type="text" placeholder="Saisis le code à 4 chiffres" className="w-3/5 h-10 px-5 pr-10 font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black border-2 border-gray-300"></input>
                                            <button onClick={handleSignUpWithPhone} className="h-10 w-2/5 bg-black disabled:opacity-40 text-white text-sm font-semibold font-montserrat" disabled={codeIsDisabled}>
                                                {codeIsLoading ? timer + " seconde(s)" : "Envoyer le code"}
                                            </button>
                                        </div>

                                        <div className="py-2 w-full text-justify">
                                            <p className="text-xs">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                        </div>

                                        <div id="sign-in-button" />


                                        <div className="py-2 w-full h-10">
                                            <button onClick={onVerifyCodeSubmit} className="flex flex-row items-center justify-center h-10 w-full bg-black text-white text-sm font-semibold font-montserrat disabled:opacity-40" disabled={isConnectDisabled}>
                                                {
                                                    isConnectLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg> : null
                                                }
                                                Connexion
                                            </button>
                                        </div>

                                        <div className="py-2 border-b border-gray-200 w-full"></div>
                                    </div>


                                    <div className="border-t border-gray-400 flex flex-col space-y-3 px-14">
                                        <div className="items-start justify-start flex text-2xl font-montserrat font-semibold">S'inscrire</div>
                                        <div className="py-2 w-full text-justify">
                                            <p className="text-xs">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            </p>
                                        </div>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
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

                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}




export default ConnnectButton