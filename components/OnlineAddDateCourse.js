import { useMutation } from "@apollo/client"
import { useContext, useState } from "react"
import { ADD_NEW_DATE_ON_COURSE } from "../Helpers/GraphQlAddQueries"
import DatePicker, { registerLocale} from "react-datepicker";
import { DataInSeellerContext } from "../utils/DataInSellerContext";

export default function OnlineAddDateCourse({courseId}){

    const [AddDateToCourse, {data, loading, error}] = useMutation(ADD_NEW_DATE_ON_COURSE)
    const [startDate, setStartDate]= useState(new Date())
    // const {pageSeller, setPageSeller} = useContext(DataInSeellerContext)
    const {pageSeller, setPageSeller} = useContext(DataInSeellerContext)


    const addResa = (event) => {
        event.preventDefault()
        AddDateToCourse({
            variables: {
                resa: {
                    duedate : startDate.toISOString(),
                    course: courseId 
                }
            }
        }).then((result) => {
            setPageSeller(result.data.addResaToAcourse)
        })

    }






    return (
            <div className="flex flex-row h-12 w-full space-x-5">
                <div className="relative text-gray-600 bg-gray-200 w-full">
                        <DatePicker selected={startDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm" onChange={date => setStartDate(date)} className="bg-gray-200 h-10 px-5 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96 font-montserrat" />
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </button>
                </div>
                <button onClick={addResa} className="h-full w-40 bg-black font-montserrat text-sm font-medium text-white disabled:opacity-40 items-center text-center justify-center">
                        {
                            loading ? <div className="w-auto flex items-center justify-center">
                                <svg className="animate-spin  h-5 w-5 text-white flex items-center text-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            </div> : <div>Ajouter</div>
                        }
                        
                    </button>
            </div>
    )
}