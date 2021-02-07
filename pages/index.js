import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroHome from '../components/HeroHome'
import Footer from '../components/Footer'
import FeaturesBlocks from '../components/FeatureBloc'
import SafetyBloc from '../components/SafetyBloc'




function HomePage(){
  return (
    <div style={styles}>
      <Head>
         <title>Kookers - Des plats par des chefs amateurs pour des bouches gourmandes</title>
         <meta name="description" content="Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas preparés par des talents près de chez eux."></meta>
         <meta name="keywords" content="chefs à domicile, fait maison"></meta>
         {/* <!-- Open Graph meta pour Facebook --> */}
        <meta property="og:title" content="Kookers - Des plats par des chefs amateurs pour des bouches gourmandes" />
        <meta property="og:url" content="http://www.getkookers.com" />
        <meta property="og:image" content="https://unsplash.com/photos/EzH46XCDQRY/download?force=true&w=640" />
        <meta property="og:description" content="Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas preparés par des talents près de chez eux." />
        <meta property="og:site_name" content="Kookers" />
        {/* <meta property="og:type" content="article" /> */}


        {/* <!-- Card meta pour Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getkookers"/>
        <meta name="twitter:title" content="Kookers - Des plats par des chefs amateurs pour des bouches gourmandes" />
        <meta name="twitter:description" content="Kookers est une application qui met en relation des amoureux de la cuisine avec des bouches gourmandes qui souhaitent déguster des repas preparés par des talents près de chez eux." />
        {/* <!-- Twitter summary card avec image large de 280x150px -->
        <meta name="twitter:image:src" content="https://www.exemple.com/wa_files/image-twitter.png" /> */}
         
      </Head>
      
      <HeroHome></HeroHome>
      <FeaturesBlocks></FeaturesBlocks>
      <SafetyBloc></SafetyBloc>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
