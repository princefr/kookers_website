import { useMutation } from "@apollo/client"
import { useContext, useState } from "react"
import { ADD_INGREDIENTS } from "../Helpers/GraphQlAddQueries"
import { DataInSeellerContext } from "../utils/DataInSellerContext"
import { useNotification } from "./notification/NotificationContext"

export default function OnlineAddIngredientsComponents({courseId}){
    const [UpdateIngredients, {data, loading, error}] = useMutation(ADD_INGREDIENTS)
    const [quantity, setQuantity] = useState("")
    const [ingredient, setIngredient] = useState("")
    const {pageSeller, setPageSeller} = useContext(DataInSeellerContext)
    const dispatch = useNotification()


    const handleAddIngredients = (event) => {
        event.preventDefault()
        UpdateIngredients({
            variables : {
                courseId: courseId,
                ingredient: {
                    quantity: quantity,
                    name: ingredient

                }

            }
        }).then((result) => {
            setPageSeller(result.data.addIngredientToAcourse)
            setQuantity("")
            setIngredient("")
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Ingrédients",
                    message:"L'ingredient a été ajouté."
                }
            })
        })

    }

    const onQuantityInputChange = (text) => {
        setQuantity(text)
    }


    const onIngredientInputChange = (text) => {
        setIngredient(text)
    }

    return (
        <div className="flex flex-row w-full h-10 items-center ">
                <div className="flex w-2/5 h-full bg-red-600">
                    <input value={quantity} onChange={((e) => onQuantityInputChange(e.target.value))} placeholder="Quantité" className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>

                </div>
                <div className="flex w-3/5 h-full px-4">
                    <input value={ingredient} onChange={((e) => onIngredientInputChange(e.target.value))} placeholder="Ingrédient" className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>
                </div>
                <div className="flex w-1/5 h-full">
                    <button onClick={handleAddIngredients} className="h-full w-full bg-black font-montserrat text-sm font-medium text-white disabled:opacity-40 items-center text-center justify-center" disabled={!quantity.length || !ingredient.length}>
                        {
                            loading ? <div className="w-auto flex items-center justify-center">
                                <svg className="animate-spin  h-5 w-5 text-white flex items-center text-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            </div> : <div>Ajouter</div>
                        }
                        
                    </button>
                </div>

                </div>
    )
}