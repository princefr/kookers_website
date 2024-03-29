import { useMutation } from "@apollo/client"
import { useState } from "react"
import { DELETE_CARD } from "../../graphql/paymentmethod/AddFunction"
import { useNotification } from "../notification/NotificationContext"



const RemoveCardButton = ({card, refetch}) => {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [RemoveCard, {data, loading, error}] = useMutation(DELETE_CARD)
    const dispatch = useNotification()

    const handleDeleteCard = (event) => {
        event.preventDefault()
        setShowConfirmation(true)
    }


    const handleCloseConfirmation = () => {
        setShowConfirmation(false)
    }


    const handleConfirmDelete = (event) => {
      event.preventDefault()
      RemoveCard({
        variables: {
          method_id: card.id
        }
      }).then(() => {
        handleCloseConfirmation()
        refetch()
        dispatch({
          payload : {
            type: "SUCCESS",
            title: "Cartes de paiements",
            message:"Votre carte a bien été supprimé."
        }
        })
      }).catch((err) => {
        dispatch({
          payload : {
            type: "ERROR",
            title: "Cartes de paiements",
            message: err.message
        }
        })
      })
    }


    return(
        <div className="relative inline-block">
            <button onClick={handleDeleteCard} className="focus:outline-none">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
            {
                showConfirmation ? <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-2 text-center sm:block sm:p-0">
                  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={handleCloseConfirmation} aria-hidden="true"></div>
              
                  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
                  <div class="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          {/* <!-- Heroicon name: outline/exclamation --> */}
                          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Confirmer la suppréssion
                          </h3>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500">
                              Souhaitez vous vraiment effacer cette carte de vos méthodes de paiement ?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button onClick={handleConfirmDelete} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        {
                          loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg> : null
                        }
                        Supprimer
                      </button>
                      <button type="button" onClick={handleCloseConfirmation} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Annuler
                      </button>
                    </div>
                  </div>
                </div>
              </div> :null
            }
        </div>
    )

}



export default RemoveCardButton