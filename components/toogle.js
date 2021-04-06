import { useMutation } from "@apollo/client"
import { useContext} from "react"
import { TOOGLE_ONLINE } from "../graphql/profil/AddFunctions"
import { UserContext } from "../utils/UserContext"
import { useNotification } from "./notification/NotificationContext"



function Toogle({ id, uid}) {
    const { user, setUser } = useContext(UserContext)
    const [ToogleOnline] = useMutation(TOOGLE_ONLINE)
    const dispatch = useNotification()



    


    const handleOnChange = () => {
        ToogleOnline({
            variables: {
                firebaseUid: uid,
                isOnline: !user.is_online
            }
        }).then((result) => {
            setUser(result.data.toogleOnline)
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Profil utilisateur",
                    message: err.message
                }
            })

        })
    }

    return (
        <label htmlFor={id}
            className="flex items-center cursor-pointer">
            <div className="relative">
                <input id={id} type="checkbox" className="hidden" checked={user.is_online} onChange={handleOnChange} />
                <div
                    className="toggle__line w-10 h-4 bg-gray-300 rounded-full shadow-inner"
                ></div>
                <div
                    className="toggle__dot absolute w-6 h-6 bg-gray-400 rounded-full shadow inset-y-0 left-0"
                ></div>
            </div>
        </label>
    )
}


export default Toogle