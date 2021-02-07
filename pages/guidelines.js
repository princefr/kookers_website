import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Guidelines() {
    return (
        <div style={styles}>
        <Head>
            <title>Règles communautaires</title>
        </Head>

      <main>
        <Navbar></Navbar>
        <div className="md:container md:mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Règles communautaires
         </h2>
        <p className="py-10 text-gray-500">Bienvenue dans la communauté kookers. Si vous êtes honnête, gentil et respectueux des autres, vous serez toujours le bienvenu ici. Si vous choisissez de ne pas l'être, vous ne durerez peut-être pas. Notre objectif est de permettre aux utilisateurs de s'exprimer librement tant que cela n'offense pas les autres. Tout le monde est tenu de respecter les mêmes normes sur kookers. Nous vous demandons d'être prévenant, de réfléchir avant d'agir et de respecter les directives de notre communauté, en ligne et hors ligne. Vous trouverez ci-dessous une liste de nos politiques communautaires. Si vous enfreignez l'une de ces politiques, vous risquez d'être banni de kookers. Nous vous encourageons à signaler tout comportement qui enfreint nos politiques et à lire nos conseils de sécurité.</p>


            <h2 className="text-lg font-bold">Kookers ne tolera pas. </h2>


            <div className="py-5">
                <h2 className="text-base font-bold">Les spam: </h2>
                <p>N'utilisez pas Kookers pour diriger les gens vers des sites web externes via un lien ou autre malveillant</p>
            </div>

            <div className="py-5">
            <h2 className="text-base font-bold">Violation des droits d'auteur et des marques: </h2>
            <p>Si ce n'est pas le vôtre, ne l'affichez pas. Si vos postes comprennent une œuvre protégée par des droits d'auteur ou une marque déposée par d'autres, ne l'affichez pas, sauf si vous y êtes autorisé. Copier les annonces des autres utilisateurs est tout autant proscrit.</p>
            </div>

            <div className="py-5">
                <h2 className="text-base font-bold">Usage illegal de l'application: </h2>
                <p>N'utilisez pas Kookers pour faire quoi que ce soit d'illégal. Ce qui est illégal dans la vraie vie, est illégal sur Kookers.</p>
            </div>

            <div className="py-5">
                <h2 className="text-base font-bold">Une personne , un compte: </h2>
                <p>Les comptes Kookers ne peuvent pas avoir plusieurs propriétaires, alors ne créez pas de compte avec vos amis ou vos proches. En outre, veuillez ne pas avoir de comptes multiples.</p>
            </div>


            <div className="py-10">
                <h2>Kookers se reserve le droit d'enqueter sur votre compte, de le bannir, de rembourser avec vos informations les personnes vous ayant acheté quelque chose,  si celui ci enfreint les regles dictées ci dessous. Kookers se reserve le droit de bannir votre compte  si vos actions et comportements en dehors de l'application avec des membres de la communauté enfreigne les regles ci dessus. La liste des règles communautaires à ne pas enfreindre est suceptible d'évoluer avec le temps, veuillez la consulter souvent.</h2>
            </div>

        </div>
        <Footer></Footer>
      </main>
    </div>
    )
}
  
  export default Guidelines