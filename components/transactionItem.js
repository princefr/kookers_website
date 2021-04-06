


function TransactionItem({transaction}){

    // id
    // object
    // amount
    // available_on
    // created
    // currency
    // description
    // fee
    // net
    // reporting_category
    // type
    // status


    return (
    <div className="flex flex-row h-12 w-full mt-1  justify-between">
        <div className="flex flex-row w-3/5 h-full  items-center">
            <div className="h-10 w-10 bg-blue-700 ml-5"></div>
            <div className="flex flex-col items-center">
                <div className="text-xl font-light font-montserrat ml-5">{transaction.description}</div>
            </div>
        </div>
        <div className="flex flex-row h-full items-center justify-end  w-2/5 space-x-5">
            <button className="flex flex-row items-center font-montserrat text-xs font-semibold bg-gray-300  text-gray-700 p-2 rounded-full focus:outline-none">
                <svg className="w-4 h-4 ml-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
        </div>
</div>
    )
}



export default TransactionItem 