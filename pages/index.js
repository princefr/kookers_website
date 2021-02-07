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
      </Head>
      
      <HeroHome></HeroHome>
      <FeaturesBlocks></FeaturesBlocks>
      <SafetyBloc></SafetyBloc>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
