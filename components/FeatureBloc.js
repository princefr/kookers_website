import React from 'react';
import styles from '../styles/Home.module.css';

function FeaturesBlocks() {
    return (
        <section style={styles} className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-4xl">Comment ça fonctionne</h2>
                        <p className="text-xl text-gray-600 py-5">Kookers vous met en relation avec des talents de la cuisine habitant non loin de vous.</p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                    {/* https://heroicons.com/ */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Commandez.
            </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Commandez des plats maison en fonction de vos préférences alimentaires, commandez à l'avance pour que les chefs puissent acheter des ingrédients frais.
            </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Retirez ou faites vous livrer.
            </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                    Retirez votre commande chez le chef kookers à proximité de  vous ou si elle est proposée, bénéficiez d'une livraison à domicile.
            </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Dégustez et recommencez
            </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                    Dégustez votre plat ou votre dessert en toute quiétude, satisfait ? recommencez !
            </dd>
                                </div>
                            </div>
                        </dl>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;