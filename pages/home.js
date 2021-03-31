import styles from '../styles/Home.module.css'
import Chip from '../components/chips'




function Home() {
    
    return (
        <div style={styles}>
            <main>
                <div className="flex flex-row h-screen w-screen">
                <div className="flex flex-col justify-between items-start w-80  p-6">
                    <div className="flex flex-col space-y-16">
                        <div className="flex flex-col">
                            <h1>Fourchete de prix</h1>
                            <div className="space-y-2 space-x-1">
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1>Préférences alimentaires</h1>
                            <div className="space-y-2 space-x-1">
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            <Chip></Chip>
                            </div>
                        </div>

                        <div className="justify-between space-y-6">
                            <h1>Distance</h1>
                            <input type="range" min="0" max="45" step="1" className="bg-gray-400 rounded-lg overflow-hidden appearance-none h-2"></input>
                            <p className="text-xs">Distance de recherche vous searant des potentiels chefs amateurs.
                                plus la distance est rapproché de votre domicile moins il vous faudra attendre pour déguster vos plats ou desserts
                            </p>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center space-x-1 px-5 py-2  overflow-hidden focus:outline-none focus:shadow-outline transition ease-out duration-200 bg-black hover:bg-teal-500 text-white text-sm lg:text-base"
                        >
                            <span>Sauvegarder</span>
                        </button>
                
                    </div>
                </div>
                <div className="flex flex-auto bg-blue-800">
                    ssqk
                </div>
                </div>
            </main>

        </div>
    )
}



export default Home