import styles from '../styles/Home.module.css'
import React from 'react';

function Footer() {
  return (
    <footer style={styles}>
      <div className="mx-auto px-6 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
                <a href="/">
                    <span className="sr-only">Kookers</span>
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
              
            </div>
            <div className="text-sm text-gray-600 py-3">
              <p>
                  Kookers met en relation des chefs amateurs avec des gourmands souhaitant deguster leur plats fait maison.
              </p>
            </div>
            <div className="mt-1 sm:mt-8 sm:flex">
                <div className="">
                    <a href="#" className="w-full flex items-center justify-center px-0 py-0">
                        <img className="object-contain h-14" src="assets/google-play-badge.png" alt="kookers google play badge"></img>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="w-full flex items-center justify-center px-2 py-2">
                        <img className="object-contain h-10" src="assets/Group.svg" alt="kookers app store badge"></img>
                    </a>
                </div>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</a>
              </li>                            
            </ul> */}
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Ressources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutoriels et guides</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Centre de support</a>
              </li>
              <li className="mb-2">
                <a to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nos partenaires</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Informations  pratiques</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Conditions d'utilisations</a>
              </li>
              <li className="mb-2">
                <a href="/guidelines" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Règles de la communauté</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Gestion des cookies</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Politique de confidentialité</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">À propos de nous</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Abonnez-vous</h6>
            <p className="text-sm text-gray-600 mb-4">Recevez chaque mois les dernières nouvelles et les derniers articles dans votre boîte de réception.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Votre email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a to="https://www.facebook.com/getkookers" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Kookers. Tous droits reservés.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;