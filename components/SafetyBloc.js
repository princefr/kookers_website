import React from 'react';
import styles from '../styles/Home.module.css';



function SafetyBloc() {
    return (
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="py-12 md:py-20">
            <div class="mt-10">
                <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="flex">
                    <img class="h-120 rounded-full object-contain" src="assets/gloves.jpg"></img>
                </div>
                <div class="flex">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 py-20">
                            <h2 class="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-3xl">Sécurité alimentaire</h2>
                            <p className="text-xl text-gray-600 py-5">La sécurité de la communauté kookers est notre priorité,  Tous nos chefs amateurs s'engagent à suivre  nos conseils de sécurité, ils sont tenus de porter des masques, des gants et des filets à cheveux lorsqu'ils préparent vos plats. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
  
  export default SafetyBloc;