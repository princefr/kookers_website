

import React, { useContext, useState } from "react";
import onClickOutside from "react-onclickoutside";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { UserContext } from "../utils/UserContext";
import { attachPaymentToCustomer } from "../Helpers/GraphQLFunctions";





function AddCardButton() {

    // stripe business logic
    const stripe = useStripe();
    const elements = useElements();

    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    AddCardButton.handleClickOutside = () => setshowModal(false)

    const {user, } = useContext(UserContext);
    const [isLoading , setIsLoading]  = useState(false);
    const [isFormFisabled, setIsFormFisabled] = useState(true)


    const handleInputChange = async (e) => {
        if(e == true || !stripe || !elements){
            setIsFormFisabled(true)
        }else{
            setIsFormFisabled(false)
        }
    }


    // handle the payment processing
    const handleCardAdded = async(event) => {
        event.preventDefault();
        setIsLoading(true)
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('[error]', error);
            setIsLoading(false)
          } else {
              console.log('[PaymentMethod]', paymentMethod);
              attachPaymentToCustomer(paymentMethod.id, user.customerId).then((updateduser) => {
                console.log(updateduser)
                // show success
                setIsLoading(false)
              }).catch((err) => {
                  console.log(err)
                setIsLoading(false)
              })
            
          }
    }

    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleModal}
                type="button"
                className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
            >
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="font-montserrat text-sm">Ajouter une carte</span>

            </button>
            {
                showModal ? <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>


                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                        <form className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                            <div className="flex flex-col relative p-4 space-y-3">
                                <div className="flex flex-row justify-between items-end">
                                    <div></div>
                                    <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                        <a href="#">
                                            <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </a>
                                    </div>
                                </div>


                                <div className="flex flex-col items-start space-y-3 px-14">
                                    <div className="text-2xl font-montserrat font-semibold top-0 sticky">Ajouter une carte</div>

                                    <div className="pt-5">
                                        <CardElement onChange={(e) => handleInputChange(e.empty)} className="w-96 text-lg font-montserrat border bg-gray-200 h-10 items-center p-2" style={{base: {fontSize: '18px'}}} onReady={(el) => el.focus()}/>
                                    </div>

                                    <div className="flex flex-row pt-10 justify-end w-full">
                                        <button onClick={handleCardAdded} disabled={isFormFisabled}
                                            type="submit"
                                            className="transition ease-out duration-700 w-full mr-5 flex justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium disabled:opacity-40"
                                        >
                                            {
                                                isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg> : null
                                            }
                                            <span className="font-montserrat text-sm">Enregistrer</span>

                                        </button>
                                    </div>


                                </div>

                            </div>
                        </form>
                    </div>
                </div> : null
            }
        </div>

    )
}



const clickOutsideConfig = {
    handleClickOutside: () => AddCardButton.handleClickOutside
};

export default onClickOutside(AddCardButton, clickOutsideConfig);