import { useContext, useState } from "react"
import { IngredientsContext } from "../utils/IngredientsContext"
import IngredientItem from "./IngredientItem";




function AddIngredientsComponents(){
    const {useIngredients, setIngredients} = useContext(IngredientsContext)
    const [quantity, setQuantity] = useState("");
    const [oneIngredient, setoneIngredient] = useState("");


    const onQuantityInputChange = (e) => {
        setQuantity(e)
    }
    const onIngredientInputChange = (e) => {
        setoneIngredient(e)
    }


    const addIngredients = (event) => {
        event.preventDefault();
        console.log(quantity, oneIngredient)
        setIngredients([...useIngredients, {quantity: quantity, name: oneIngredient }])
        setQuantity("")
        setoneIngredient("")
    }

    return(
        <div className="flex flex-col w-full mt-5">
                                        <div className="font-montserrat text-m">Ingrédients {!useIngredients.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                        <div className="flex flex-row w-full h-10 items-center ">
                                            <div className="flex w-2/5 h-full bg-red-600">
                                                <input value={quantity} onChange={((e) => onQuantityInputChange(e.target.value))} placeholder="Quantité" className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>

                                            </div>
                                            <div className="flex w-3/5 h-full px-4">
                                                <input value={oneIngredient} onChange={((e) => onIngredientInputChange(e.target.value))} placeholder="Ingrédient" className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>
                                            </div>
                                            <div className="flex w-1/5 h-full">
                                                <button onClick={addIngredients} className="h-full w-full bg-black font-montserrat text-sm font-medium text-white disabled:opacity-40" disabled={!quantity.length || !oneIngredient.length}>
                                                    Ajouter
                                                </button>
                                            </div>

                                        </div>
                                        <div className="flex flex-col w-full py-3">
                                            {
                                                useIngredients.map((ingredient) => {
                                                    return <IngredientItem ingredient={ingredient}></IngredientItem>
                                                }) 
                                            }

                                        </div>
                                    </div>
    )
}


export default AddIngredientsComponents