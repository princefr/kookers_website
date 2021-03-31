



export default function DifficultyComponent({difficultyValue, setDifficulty}) {
    return (
        <div className="flex flew-row w-full h-8 ">
            <button onClick={(() => setDifficulty(0))} className={"transition duration-500 ease-in-out flex w-1/3 h-full items-center justify-center text-white font-montserrat focus:outline-none " + " "+ (difficultyValue == 0 ? "bg-green-500" : "bg-gray-300")}>
                Facile
            </button>
            <button onClick={(() => setDifficulty(1))} className={"transition duration-500 ease-in-out flex w-1/3 h-full items-center justify-center text-white font-montserrat focus:outline-none" + " "+ (difficultyValue == 1 ? "bg-yellow-600" : "bg-gray-300")}>
                Intermediaire
            </button>
            <button onClick={(() => setDifficulty(2))} className={"transition duration-500 ease-in-out flex w-1/3 h-full items-center justify-center text-white font-montserrat focus:outline-none" + " "+ (difficultyValue == 2 ? "bg-red-600" : "bg-gray-300")}>
                Difficile
            </button>
        </div>
    )
}