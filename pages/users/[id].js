import { useRouter } from 'next/router'


  function User({user}) {
      const router = useRouter()
      const { id } = router.query
      return <div>this is the users {id}</div>
  }



  
  export default User