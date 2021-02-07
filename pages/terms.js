import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
  
  function Terms() {
      return (
        <div style= {styles}>
        <Head>
            <title>Conditions d'utilisations</title>
        </Head>
        <main>
          <Navbar></Navbar>
          <div className="lg:flex lg:items-center lg:justify-between md:mx-auto px-4 py-10 md:container">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate">
                  Conditions d'utilisations
                </h2>

                
                <div className="py-5">
                <h2 className="text-lg font-bold py-10 text-gray-600">1. Présentation </h2>
                  <h2 className="text-base font-bold text-gray-500">En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet www.getkookers.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi: </h2>
                  <p className="py-3">Propriétaire : ONDONDA Prince – 303 quai aux fleurs 91000 Evry
                      Responsable publication : ONDONDA Prince – ponndonda@gmail.com
                      Le responsable publication est une personne physique ou une personne morale.
                      Webmaster : ONDONDA Prince – ponndonda@gmail.com
                      Hébergeur : 1and1 – 7 Place de la Gare 57200 Sarreguemines 0970 808 911
                      Délégué à la protection des données : ONDONDA Prince – pondonda@gmail.com</p>

                  <p className="py-3">Kookers met en relation des amateurs culinaires avec des utilisateurs souhaitant acquerir des plats cuisinés par ces derniers. </p>
              </div>
              </div>
          </div>
          <Footer></Footer>
        </main>
        </div>
      );
    }
    
    export default Terms