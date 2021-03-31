import { useContext, useEffect } from "react"
import { IngredientsContext } from "../utils/IngredientsContext"



function IngredientItem({ingredient}){
    const {useIngredients, setIngredients} = useContext(IngredientsContext)

    const deleteIngredient = (event) => {
        event.preventDefault();
        setIngredients(useIngredients.filter(ing => ing.name !== ingredient.name))
    }
    
    return(
        <div className="flex flex-row h-10 w-full flex-wrap items-center justify-between pl-5 text-sm font-montserrat bg-gray-200 border-b border-gray-300">
            <div className="flex flex-row h-full space-x-3 items-center">
                <div>
                    {ingredient.quantity}
                </div>
                <div>
                    {ingredient.name}
                </div>
            </div>
            <button onClick={deleteIngredient} className="pr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>
    )
}



export default IngredientItem