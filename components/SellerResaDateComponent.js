import { useQuery } from "@apollo/client";
import { GET_RESADATE } from "../Helpers/GraphQlGetQueries";
import SellerResaDateItem from "./SellerResaDateItem";



export default function SellerResaDateComponent({ courseId }) {
    const { loading, error, data } = useQuery(GET_RESADATE, {
        variables: {
            courseId: courseId
        }
    })

    if (loading) return <div>loading</div>
    if (error) return <div>error</div>

    return (

        <div className="container flex flex-col px-1 py-2 mx-auto">
                                {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                                <div className="text-lg font-montserrat pb-1">
                                    Cours
                                </div>
                                <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Heure
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Durée
                                                            </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Participants
                                                            </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                                            </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Gains
                                                            </th>
                                    <th scope="col" className="relative px-4 py-3">
                                        <span className="sr-only">Commencer</span>
                                    </th>
                                    <th scope="col" className="relative px-4 py-3">
                                        <span className="sr-only">Modifier</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data ? data.loadResaForAcourse.map((resa) => {
                                        return <SellerResaDateItem resa={resa} key={resa._id}></SellerResaDateItem>
                                    }) : null

                                }

                                {/* <!-- More items... --> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

                            </div>

    )
}