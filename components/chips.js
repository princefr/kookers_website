


              

function Chip({chip}){
    return (
        <div
        className="inline-flex items-center rounded-full bg-gray-300 border border-gray-200 mt-2 px-1"
        >
        <span className="px-1 text-xs">Végétarien</span>
        <button
          type="button"
          className="h-6 w-6 p-1 rounded-full  bg-opacity-25 focus:outline-none"
        >
            <svg className="bg-green-400 rounded-full"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </button>


      </div>
    
    )
}

export default Chip
