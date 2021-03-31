

import AgoraRTC, {handleError} from 'agora-rtc-sdk'
import { useCallback, useEffect } from 'react';



function AgoraComponent({children}){

    const handler = useCallback((channelId) => {
        join_channel(channelId)
    }, [])
    
    let client = AgoraRTC.createClient({
        mode: "live",
        codec: "vp8",
    });


    const join_channel = (channelId) => {
        client.join("yourToken", "myChannel", null, (uid)=>{
            // Create a local stream
          }, handleError);
    }

    useEffect(() => {
        client.init("85ee37f4595945eb921de2edc4db60ce");
    }, [])

    return ([...children])
}


export default AgoraComponent