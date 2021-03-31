import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { DELETE_INGREDIENT } from "../Helpers/GraphQlAddQueries";
import { DataInSeellerContext } from "../utils/DataInSellerContext";

export default function OnlineIngredient({ingredient, courseId}){
    const [DeleteInngredient, {data, loading, error}] =useMutation(DELETE_INGREDIENT)
    const {pageSeller, setPageSeller} = useContext(DataInSeellerContext)


    const deleteIngredient = (event) => {
        event.preventDefault()
        DeleteInngredient({
            variables: {
                courseId: courseId,
                ingredient: {
                    name: ingredient.name,
                    quantity: ingredient.quantity
                }
            }
        }).then((result) => {
            setPageSeller(result.data.deleteIngredients)
        })
    }



    return (
        <div className="flex flex-row h-10 w-full flex-wrap items-center justify-between pl-5 text-sm font-montserrat bg-gray-200">
        <div className="flex flex-row h-full space-x-3 items-center">
            <div>
                {ingredient.quantity}
            </div>
            <div>
                {ingredient.name}
            </div>
        </div>
        <button onClick={deleteIngredient} className="pr-4">
            {
                loading ? <svg className="animate-spin h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> :  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>

            }
        </button>
    </div>
    )

}