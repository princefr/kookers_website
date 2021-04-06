

function HomeChipFoodPref({foodPref, handleClick}){


    
    return (
        <div onClick={(() => handleClick(foodPref))}
        className="inline-flex items-center p-1 rounded-full bg-gray-200 border border-gray-200 mt-2 space-x-2 px-2"
        >
        <span className="text-xs">{foodPref.name}</span>
        {
            foodPref.isActive ? <button
            type="button"
            className="h-4 w-4 rounded-full  bg-opacity-25 focus:outline-none transition delay-150 duration-300 ease-in-out"
          >
              <svg className="bg-green-100 rounded-full text-green-400"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </button> : null
        }


      </div>
    
    )
}

export default HomeChipFoodPref