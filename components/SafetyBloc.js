import React from 'react';



function SafetyBloc() {
    return (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-10">
            <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                    <img className="h-80 rounded-full object-cover" src="assets/Person_with_medical_mask-pana.png" alt="safety images"></img>
                </div>
                <div className="flex">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 py-20">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-3xl">Sécurité alimentaire</h2>
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