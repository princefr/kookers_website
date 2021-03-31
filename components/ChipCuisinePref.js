import { useContext } from "react"
import { CuisinePreferencesContext } from "../utils/CuisinPreferencesContext"



function ChipCuisinePref({cuisinePref}){
    const {usecuisinePreferences, setcuisinePreferences} = useContext(CuisinePreferencesContext)

    const handleClick = () => {
        setcuisinePreferences(prevState => prevState.map((pref) => pref.name == cuisinePref.name ? {name: pref.name, isActive: !pref.isActive} : {name: pref.name, isActive: false}))
    }
    
    return (
        <div onClick={handleClick}
        className="inline-flex items-center p-1 rounded-full bg-gray-300 border border-gray-200 mt-2 space-x-2"
        >
        <span className="text-xs">{cuisinePref.name}</span>
        {
            cuisinePref.isActive ? <button
            type="button"
            className="h-4 w-4 rounded-full  bg-opacity-25 focus:outline-none transition delay-150 duration-300 ease-in-out"
          >
              <svg className="bg-green-300 rounded-full text-green-600"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </button> : null
        }


      </div>
    
    )
}

export default ChipCuisinePref