


export function ConfirmActionPanel(){
    return (
            <div
                  className="flex flex-wrap sm:flex-no-wrap  bg-white w-96 rounded overflow-hidden p-6 space-x-0 space-y-2 justify-center sm:space-x-2"
                >
                <div
                  className="flex flex-1 sm:flex-initial justify-center items-baseline py-4 sm:py-0"
                >
                  <span className="bg-green-300 bg-opacity-50 rounded-full p-1">
                    <svg
                      className="h-10 sm:h-6 w-auto text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className="flex flex-col flex-grow text-center sm:text-center space-y-2"
                >
                  <h1 className="font-medium leading-relaxed sm:leading-normal">
                    Your account has been
                    <strong className="text-green-400"> verified</strong>
                  </h1>
                  <p className="leading-tight text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aliquid assumenda et expedita hic laboriosam
                    maiores mollitia nam optio, reiciendis reprehenderit
                    sint voluptates voluptatum? Ab adipisci deserunt
                    excepturi facere odio quam!
                  </p>
                </div>


                <div className="flex flex-row justify-between space-x-28 p-2 mt-10">
                    <button>Annuler</button>
                    <button className="text-white bg-red-500 p-2 rounded-md font-montserrat overflow-hidden focus:outline-none">Supprimer</button>
                </div>


              </div>
    )
}