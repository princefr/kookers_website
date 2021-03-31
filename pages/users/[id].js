
import client from '../../Helpers/GraphQLClient';
import { gql } from '@apollo/client';


  function User({user}) {

      return (
          <div className="flex flex-row h-screen px-96">
            <div className="flex-auto">
              <div className="flex h-14 bg-red-400"></div>
              <div className="flex flex-col py-1">
                  <div className="flex flex-row h-96 justify-center relative">
                    <img className="max-h-80 w-full opacity-80 absolute top-0 object-cover rounded-md"  src="https://unsplash.com/photos/EzH46XCDQRY/download?force=true&w=640" alt="" />
                    <div className="flex justify-center">
                      <img className="h-32 w-32 object-center rounded-full ring-4 ring-white absolute bottom-0 shadow-sm" src={user.photoUrl} alt="user image"/>
                    </div>
                  </div>
                  <div className="justify-center py-6 space-y-0.5 text-center">
                  <p className="text-lg text-black font-semibold">
                    {user.first_name +  " " +  user.last_name}
                  </p>
                  <p className="text-gray-500 font-medium">
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



  export async function getServerSideProps({params}){
    const userID = params.id;
    const { data } = await client.query({
      query: gql`
        query GetUserPublic($userId: String!){
          getuserpublic(userId: $userId){
            first_name
            last_name
            createdAt
            photoUrl
          }
        }
      `,
      variables : {
        userId: userID
      }
      
    }).catch((reason) => {
      console.log(reason)
    })

    return {
      props: {
        user: data.getuserpublic
      }
    }
  }



