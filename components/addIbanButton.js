

import React, {useState } from "react";
import onClickOutside from "react-onclickoutside";
import Iban from 'iban';
import { useMutation } from "@apollo/client";
import { ADD_IBAN } from "../graphql/wallet/AddFunction";
import { useNotification } from "./notification/NotificationContext";




function AddIbanButton({firebaseUid}) {
    
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    AddIbanButton.handleClickOutside = () => setshowModal(false)

    const [AddIbanToUSer, {data, loading, error}] = useMutation(ADD_IBAN)

    const [useIban, setIban] = useState("")
    const dispatch = useNotification()

    const handleIbanChange = (e) => {
        setIban(e)
    }

    const uploadIban = async (event) => {
        event.preventDefault();
        if(Iban.isValid(useIban)){
            
                AddIbanToUSer({
                    variables: {
                        firebaseUid: firebaseUid,
                        account_number: useIban
                    }
                }).then(() => {
                    toggleModal()
                    dispatch({
                        payload: {
                            type: "SUCCESS",
                            title: "Vos Ibans",
                            message:"Votre nouvel iban a été ajouté avec succès"
                        }
                    })
                }).catch(() => {
                    dispatch({
                        payload: {
                            type: "ERROR",
                            title: "Vos Ibans",
                            message:"Une erreur s'est produite lors de l'ajout de votre nouvel Iban. Veuillez reessayer." 
                        }
                    })
                })
        }else{
            console.log("renseignner un iban valid")
        }
        

    }

    

    return (
        <div className="relative inline-block text-left">
            
            <button onClick={toggleModal}
                type="button"
                className="transition ease-out duration-700 w-56 mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="font-montserrat text-sm">Ajouter un iban</span>

            </button>
            {
                showModal ? <div className="fixed z-50 inset-0 overflow-y-auto">
                    
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75">
                            </div>
                            
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


                                <div className="flex flex-col items-start space-y-3 px-14">
                                    <div className="text-2xl font-montserrat font-semibold top-0 sticky">Ajouter un iban</div>

                                    <div className="pt-5 h-12 w-full">
                                        <input onChange={(e)=> handleIbanChange(e.target.value) } placeholder="renseigner votre iban" className="w-full h-10 px-5 pr-10 font-montserrat text-sm focus:outline-none focus:ring-2 focus:border-white focus:ring-offset-black focus:ring-black border-2 border-gray-300"></input> 
                                    </div>

                                    <div className="flex flex-row pt-10 justify-end w-full">
                                        <button onClick={uploadIban}  disabled={!useIban.length}
                                            type="button"
                                            className="transition ease-out disabled:opacity-40 duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                                        >
                                            {
                                                loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>: null
                                            }
                                            <span className="font-montserrat text-sm">Ajouter</span>

                                        </button>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div> : null
            }

        </div>

    )
}



const clickOutsideConfig = {
    handleClickOutside: () => AddIbanButton.handleClickOutside
};

export default onClickOutside(AddIbanButton, clickOutsideConfig);