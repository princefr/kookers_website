import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { buyAcours } from "../Helpers/GraphQLFunctions"
import CreditCardSelector from "./CreditCardSelector"



function PaymentAskConfirmation({ toggleAskConfirmPanel, courseId, resa_id, sellerId}) {
  const [useCheckbox, setCheckbox] = useState(false)
  const [useQuantity, setQuantity] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()


  useEffect(() => {
    router.prefetch("/paymentmethod")
  }, [])


  const handleQuantityChange = async (e) => {
    setQuantity(e)
  }


  const handlePayment = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    console.log("handle payment started")
    return buyAcours(courseId, resa_id, 2, "6048d740e0619076d2245d94", sellerId).then((sucess) => {
      console.log("this is a success", sucess)
      setIsLoading(false)
    }).catch((err) => {
      console.log("yes boy its an error", err)
      setIsLoading(false)
    })
    
  }


  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={toggleAskConfirmPanel}></div>
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-sm overflow-y-scroll transition duration-300 ease-in-out">
              <div className="flex flex-col px-4 sm:px-6">
                <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900 font-montserrat">
                  Acheter ma place
                    </h2>


                <div className="flex flex-col w-full justify-between mt-10">
                  <div className="font-montserrat text-lg">Récapitulatif</div>
                  <div className="flex flex-row justify-between items-center  mt-3">
                    <div className="flex flex-row space-x-3">
                      <div className="text-sm font-montserrat">x2</div>
                      <div className="text-sm font-montserrat">-</div>
                      <div className="text-sm font-montserrat">Poulet aux amendes</div>
                    </div>
                    <div className="text-sm font-montserrat font-medium">
                      30 €
                        </div>
                  </div>



                </div>


                <div className="flex flex-col w-full mt-10">
                  <div className="font-montserrat text-lg">Méthodes de paiement</div>
                  <CreditCardSelector></CreditCardSelector>
                </div>

                <div className="flex flex-row w-full mt-10 justify-between items-center">
                  <div className="flex flex-row space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="font-montserrat text-sm">Frais d'application</p>
                  </div>

                  <div className="items-center font-montserrat text-sm font-semibold">
                    1.99 €
                      </div>

                </div>

                <div className="font-montserrat text-xs mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>

                <div className="flex flex-row space-x-4 items-center mt-10">
                  <label className="relative items-center px-6 cursor-pointer">
                    <input type="checkbox" onChange={((e) => setCheckbox(e.target.checked))} checked={useCheckbox} className="absolute form-checkbox h-6 w-6 bg-gray-400  overflow-hidden focus:outline-none  appearance-none checked:bg-green-500 " />
                    {
                      useCheckbox ? <svg className="w-6 h-6 absolute text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : null
                    }
                  </label>
                  <div className="font-montserrat text-sm mt-3">
                    Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                      </div>
                </div>

                <div className=" mt-12">
                  <button onClick={handlePayment}
                    type="button" disabled={!useCheckbox}
                    className="transition ease-out duration-700 w-full mr-5 flex disabled:opacity-40  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                  >
                    <span className="font-montserrat text-lg">Payer (30 €)</span>

                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>

  )
}


export default PaymentAskConfirmation