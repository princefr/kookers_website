

import React, { useContext, useState } from "react";
import onClickOutside from "react-onclickoutside";
import Iban from 'iban';
import { createBankAccount } from "../Helpers/GraphQLFunctions";
import { UserContext } from "../utils/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AddIbanButton() {
    const {user, } = useContext(UserContext)
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    AddIbanButton.handleClickOutside = () => setshowModal(false)

    const [useIban, setIban] = useState("")
    const [isDisabled, setIsDisable] = useState(true)
    const [isLoading, setIsLoading] = useState(false)


    const handleIbanChange = (e) => {
        if(!e.length){
          setIsDisable(true)
          return;  
        }
        setIban(e)
        setIsDisable(false)
    }

    const notify = () => toast.error("Wow so easy!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const uploadIban = async (event) => {
        event.preventDefault();
        setIsDisable(true)
        setIsLoading(true)
        if(Iban.isValid(useIban)){
            return createBankAccount(user.id, user.country,  user.currency, useIban).then((success) => {
                print("success", success)
                setIsDisable(false)
                setIsLoading(false)
            }).catch((err) => {
                setIsDisable(false)
                setIsLoading(false)
                console.log(err)
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
                showModal ? <div className="fixed z-10 inset-0 overflow-y-auto">
                    
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
                                        <button onClick={notify} disabled={isDisabled}
                                            type="button"
                                            className="transition ease-out disabled:opacity-40 duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                                        >
                                            {
                                                isLoading ? <p>is loading</p>: null
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

                <ToastContainer></ToastContainer>
        </div>

    )
}



const clickOutsideConfig = {
    handleClickOutside: () => AddIbanButton.handleClickOutside
};

export default onClickOutside(AddIbanButton, clickOutsideConfig);