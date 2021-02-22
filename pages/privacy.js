
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'


function PrivacyPolicy(){

    return (
        <div style={styles}>
            <Head>
                <title>Politique de confidentialité</title>
            </Head>

            <main>
            <Navbar></Navbar>
            <div className="lg:flex lg:items-center lg:justify-between md:mx-auto px-4 py-10 md:container">
                <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate">
                                Mentions légales et politique de confidentialité
                        </h2>

                        <div className="py-5">
                        <p className="py-3">L'entreprise individuelle Kookers representé par ONDONDA PRINCE , soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
                            Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : https://www.cnil.fr/</p>

                        <p className="py-3">La poursuite de la navigation sur ce site ou l'application mobile vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent.
La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site ou de l'application et jusqu'à ce qu'une nouvelle version la remplace.</p>
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 1 - Mentions légales </h2>

                        <div className="py-5">
                                <h2 className="text-base font-bold">1.1 Site (ci-après « le site, L'application ») : </h2>
                                <p>Kookers</p>
                        </div>


                        <div className="py-5">
                                <h2 className="text-base font-bold">1.2 Éditeur (ci-après « l'éditeur ») : </h2>
                                <p>L'entreprise indivuduelle Priince ONDONDA située : 303 quai aux fleurs , 91000
                                    immatriculée au RCS de Aulnay 803 917 608 n° de téléphone : +33782798614
                                    adresse mail : ondonda.prince@getkookers.com</p>
                        </div>

                        <div className="py-5">
                                <h2 className="text-base font-bold">1.3 Hébergeur (ci-après « l'hébergeur ») : </h2>
                                <p>Kookers est hébergé par Heroku - AWS Frankfurt , dont le siège social est situé .</p>
                        </div>


                        <div className="py-5">
                                <h2 className="text-base font-bold">1.4 Délégué à la protection des données (DPO) : </h2>
                                <p>Un délégué à la protection des données : Prince ONDONDA , ondonda.prince@getkookers.com , est à votre disposition pour toute question relative à la protection de vos données personnelles.</p>
                        </div>
                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 2 - Accès au site/application </h2>
                        <p>L'accès au site ou à l'application kookers est gratuite, enn s'enregistrant sur kookers l'utilisateur s'engage à ne posseder qu'un seul compte.</p>

                  
                    </div>


                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 3 - Gestion du site </h2>
                        <p>Pour la bonne gestion du site/application, l'éditeur pourra à tout moment :
                            - suspendre, interrompre ou limiter l'accès à tout ou partie du site/application, réserver l'accès au site, ou à certaines parties du site/application, à une catégorie déterminée d'internautes ;
                            - supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;
                            - suspendre le site afin de procéder à des mises à jour.</p>

                  
                    </div>
                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 4 - Collecte et protection des données </h2>
                        <p>Vos données sont collectées par l'entreprise individuelle Priince ONDONDA .
                            Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.
                            Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.
                            Les données personnelles collectées sont les suivantes :
                            - nom et prénom
                            - adresse
                            - adresse mail
                            - numéro de téléphone
                            - date de naissance
                            - Donnés d'identifications
                            - données financières : dans le cadre du paiement des produits et prestations proposés sur la Plateforme, celle-ci enregistre des données financières relatives à la carte de crédit de l'utilisateur.
                            Un délégué à la protection des données : Prince ONDONDA , ondonda.prince@getkookers.com , est à votre disposition pour toute question relative à la protection de vos données personnelles.</p>

                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 5 - Droit d’accès, de rectification et de déréférencement de vos données </h2>
                        <p>En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :
                        le droit d’accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;
                        le droit de rectification : si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;
                        le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;
                        le droit à la limitation du traitement : les utilisateurs peuvent de demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;
                        le droit de s’opposer au traitement des données : les utilisateurs peuvent s’opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD ;
                        le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu'ils ont fournies pour les transmettre à une nouvelle Plateforme.
                        Vous pouvez exercer ce droit en nous contactant, à l’adresse suivante :
                        303 quai aux fleurs 91000 .
                        Ou par email, à l’adresse :
                                        ondonda.prince@getkookers.com
                        Vous pouvez aussi vous adresser à notre délégué à la protection des données :
                        Prince ONDONDA , ondonda.prince@getkookers.com , qui est à votre disposition pour toute question relative à la protection de vos données
                        personnelles.

                        Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité signé et faire mention de l’adresse à laquelle l'éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent.
                        De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la
                        CNIL : https://www.cnil.fr/.
                        Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL : https://www.cnil.fr.
                        Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème.
                        </p>

                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 6 - Utilisation des données </h2>
                        <p>
                            Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est l’exécution du contrat entre l’utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :
                            - accès et utilisation de la Plateforme par l'utilisateur ;
                            - gestion du fonctionnement et optimisation de la Plateforme ;
                            - mise en œuvre d'une assistance utilisateurs ;
                            - vérification, identification et authentification des données transmises par l'utilisateur ;
                            - personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences ;
                            - prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;
                            - gestion des éventuels litiges avec les utilisateurs ;
                            - envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur ;
                            - organisation des conditions d'utilisation des Services de paiement.</p>

                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article7 - Politique de conservation des données </h2>
                        <p>
                        La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance.
Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n'ayons plus besoin pour vous fournir nos services.</p>

                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 8- Partage des données personnelles avec des tiers </h2>
                        <p>
                        Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants :
- quand l'utilisateur utilise les services de paiement, pour la mise en œuvre de ces services, la Plateforme est en relation avec des sociétés bancaires et financières tierces avec lesquelles elle a passé des contrats ;
- lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public ;
- quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;
- quand la Plateforme recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont l'obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel ;
- si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.</p>

                  
                    </div>

                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 9 - Photographies et représentation des produits </h2>
                        <p>
                        Les photographies de plats, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur.</p>

                  
                    </div>


                    <div className="py-5">
                        <h2 className="text-lg font-bold py-6 text-gray-600">Article 10 - Loi applicable </h2>
                        <p>
                        Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.</p>

                  
                    </div>
                </div>
            </div>

            <Footer></Footer>

            </main>
        </div>
    )

}



export default PrivacyPolicy