



export default function PlateTypeComponent({plateValue, setPlate}) {
    return (
        <div className="flex flew-row w-full h-8 ">
            <button onClick={(() => setPlate(0))} className={"transition duration-500 ease-in-out flex w-1/2 h-full items-center justify-center text-white font-montserrat focus:outline-none " + " "+ (plateValue == 0 ? "bg-green-500" : "bg-gray-300")}>
                Plat
            </button>
            <button onClick={(() => setPlate(1))} className={"transition duration-500 ease-in-out flex w-1/2 h-full items-center justify-center text-white font-montserrat focus:outline-none" + " "+ (plateValue == 1 ? "bg-green-500" : "bg-gray-300")}>
                Déssert
            </button>
        </div>
    )
}