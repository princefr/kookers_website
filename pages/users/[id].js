import { useRouter } from 'next/router'


  function User({user}) {
      const router = useRouter()
      const { id } = router.query

      return (
          <div className="flex flex-row h-screen px-96">
            <div className="flex-auto">
              <div className="flex h-14 bg-red-400"></div>
              <div className="flex flex-col py-1">
                  <div className="flex flex-row h-96 justify-center relative">
                    <img className="max-h-80 w-full opacity-80 absolute top-0 object-cover rounded-md"  src="https://unsplash.com/photos/EzH46XCDQRY/download?force=true&w=640" alt="" />
                    <div className="flex justify-center">
                      <img className="h-32 w-32 object-center rounded-full ring-4 ring-white absolute bottom-0 shadow-sm" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                  </div>
                  <div className="justify-center py-6 space-y-0.5 text-center">
                  <p class="text-lg text-black font-semibold">
                    Erin Lindford
                  </p>
                  <p class="text-gray-500 font-medium">
                    Product Engineer
                  </p>
                  
                </div>
              </div>

              <div className="flex flex-row h-96 space-x-1 space-y-1">
                <div className="flex flex-col bg-black h-6 w-6"></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
      )
  }



  
  export default User