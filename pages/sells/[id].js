import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../../components/nav"
import { useContext} from 'react'
import fr from 'date-fns/locale/fr';
import "react-datepicker/dist/react-datepicker.css";
import { DataInSeellerContext } from '../../utils/DataInSellerContext';
import OnlineAddIngredientsComponents from '../../components/OnlineIngredientsComponents';
import OnlineIngredient from '../../components/OnlineIngredientsItem'
import OnlineAddDateCourse from '../../components/OnlineAddDateCourse';
import SellerResaDateComponent from '../../components/SellerResaDateComponent';

// import Chip from '../../components/chips'


function Sell() {
    const {pageSeller, setPageSeller} = useContext(DataInSeellerContext)
    

    return (
        <div style={styles}>
            <Head>
                <title>Mes ventes</title>
            </Head>

            <main>
                <div className="flex flex-col w-screen">
                    <Nav></Nav>
                    <div>
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-1 py-20 mx-auto">
                                <div className="lg:w-5/5 mx-auto flex flex-wrap">
                                    <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                    <div className="lg:w-1/3 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Poulet au cumin</h1>
                                        <div className="bg-red-500 w-24  text-center text-white text-sm font-montserrat">Difficile</div>
                                        <div className="flex mb-4">
                                            <span className="flex items-center space-x-0.5">
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <span className="text-gray-600 ml-3">4 Reviews</span>
                                            </span>
                                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="title-font font-medium text-2xl text-gray-900">$158.00</span>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/3 w-full lg:pl-10 lg:py-1 mt-2 lg:mt-0">
                                        <div className="flex flex-col sm:flex-row mt-2">
                                            <div className="text-center sm:pr-2 sm:py-2 items-center">
                                                <div className="text-lg font-montserrat py-4">INGRÉDIENTS:</div>
                                                <div className="flex flex-col space-y-2">
                                                    <OnlineAddIngredientsComponents courseId={pageSeller._id}></OnlineAddIngredientsComponents>
                                                    {
                                                        pageSeller.ingredients.map((ingredient, key) => {
                                                            return <OnlineIngredient courseId={pageSeller._id} ingredient={ingredient} key={key}></OnlineIngredient>
                                                        })
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="container px-1 py-2 mx-auto">
                                <div className="text-lg font-montserrat pb-5">
                                    Ajouter une date de cours
                                </div>

                                <OnlineAddDateCourse courseId={pageSeller._id}></OnlineAddDateCourse>
                            </div>

                            <SellerResaDateComponent courseId={pageSeller._id}></SellerResaDateComponent>
                        </section>
                    </div>
                </div>
            </main>


        </div>
    )
}



export default Sell