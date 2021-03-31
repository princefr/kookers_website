



function OrderItem({order}){

    return (

        <div className="flex flex-row h-36  mt-10 justify-between">
        <div className="flex flex-row space-x-4">
            <img className="w-56 bg-red-800" src={order.course.photoUrl}></img>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col space-y-0.5">
                    <div className="flex flex-row space-x-16">
                        <div className="text-lg font-montserrat">
                            Poulet à la mandarine
                        </div>
                        <div className="bg-green-400 px-3 m-auto  items-center text-white font-montserrat text-sm">
                            Terminée
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <div className="text-xs font-montserrat">17/06/2021 à 15h</div>
                    </div>
                </div>
                <div className="flex flex-row -space-x-4 mb-2">
                    <div className="h-8 w-8 bg-black rounded-full ring-2 ring-offset-red-600 ring-red-300"></div>
                    <div className="h-8 w-8 bg-black rounded-full ring-2 ring-offset-red-600 ring-red-300"></div>
                    <div className="h-8 w-8 bg-black rounded-full ring-2 ring-offset-red-600 ring-red-300"></div>
                    <div className="h-8 w-8 bg-black rounded-full ring-2 ring-offset-red-600 ring-red-300"></div>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-between items-end">
            <div className="p-2 font-bold text-xl">
                54 €
            </div>
            <div className="flex flex-row space-x-4 items-center">
                <div className="h-8 w-8 bg-black rounded-full ring-2 ring-offset-red-600 ring-red-300"></div>
                <div className="font-montserrat text-base">Prince ondonda</div>
            </div>


        </div>
    </div>
    )
}

export default OrderItem