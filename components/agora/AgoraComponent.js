import AgoraRTC from 'agora-rtc-sdk'
import { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import CameraButton from '../buttons/CameraButton';
import MicButton from '../buttons/MicButton';

const client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8",
});

const AgoraPanel = () => {
    useEffect(() => {
        client.init("85ee37f4595945eb921de2edc4db60ce", () => {
            console.log("client initialised with success")
        }, (err) => {
            console.log("the client have some errors", err)
        });
    }, [])


    const [stream, setStream] = useState()
    const [initialised, setInitialised] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [streamId, setStreamId] = useState()

    const handleError = (err) => {
        console.log(err)
    }

    const handleStream = () => {
        if(initialised == false){
            setPlaying(true)
            return handleLocalStreamCreation()
        }

        if(stream != null && playing == true){
            setPlaying(false)
            return stream.stop()
        }

        if(stream != null && playing == false){
            setPlaying(true)
            return stream.play("me")
        }

    }


    const handleStopStream =async(event) => {
        event.preventDefault()
        setPlaying(false)
        setStream(null)
        setInitialised(false)
        stream.stop()
        stream.close()
        client.off()
        client.leave()
    }


    const handleLocalStreamCreation = () => {
        client.join("00685ee37f4595945eb921de2edc4db60ceIABztKbXQh/9lnO+W1ZcL4b0nw2l892I5FtvPzK+4pQro0OQEggAAAAAEAAeXT+c6UpoYAEAAQDpSmhg", "myChannel", null, (uid) => {
            let localStream = AgoraRTC.createStream({
                audio: true,
                video: true,
            });
            // Initialize the local stream
            localStream.init(()=>{
                // Play the local stream
                localStream.play("me");
                
                // Publish the local stream
                client.publish(localStream, handleError);
                // localStream.
                
                setStream(localStream)
                setInitialised(true)
                
            }, handleError);
        }, handleError)
    }


    const HandleRemoteStream = (id) => {
        setStreamId(id)
    }


    // Subscribe to the remote stream when it is published
    client.on("stream-added", function(evt){
        client.subscribe(evt.stream, handleError);
    });

    // Play the remote stream when it is subsribed
    client.on("stream-subscribed", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        addVideoStream(streamId);
        stream.play(streamId);
    });




    return (

        <div className="flex flex-col pt-24 pb-5 container mx-auto h-full">
        <div className=" flex flex-row border-b border-1 border-gray-100 justify-between b-3 pb-2">
            <div className="text-3xl font-montserrat font-semibold">
                Ma chaine
            </div>
            <div className="flex flex-row justify-end space-x-5">
                <button className="focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </button>
                {
                    stream == null ? <button
                    type="button" onClick={handleStream}
                    className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                >
                    <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <span className="font-montserrat text-sm">Commencer la diffusion</span>

                    </button> : <button
                    type="button" onClick={handleStopStream}
                    className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-red-500 bg-red-700 text-white text-xs items-center font-medium"
                >
                    <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <span className="font-montserrat text-sm">Arreter la diffusion</span>

                </button>
                }
                
            </div>
        </div>

        <div className="flex flex-row h-full w-full mt-5">
            <div className="relative flex w-4/5 h-full bg-green-700">
                <div className="absolute h-full w-full" id="me"></div>
                {
                    stream ? <div className="absolute flex flex-row  w-full p-2 space-x-10 items-center justify-center bottom-0 animate-slideup">
                    <MicButton localStream={stream}></MicButton>

                    {/* <button className="rounded-full bg-gray-600 h-12 w-12 items-center justify-center bg-opacity-50  flex focus:outline-none">
                    <svg className="w-6 h-6 text-red-700" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </button> */}

                    <CameraButton localStream={stream}></CameraButton>
                </div> : null
                }
            </div>
            <div className="flex flex-col w-1/5 h-full">
                <div className="h-1/5 w-full bg-yellow-400" id={streamId}>

                </div>
                <div className="h-1/5 w-full bg-green-400">

                </div>
                <div className="h-1/5 w-full bg-black-400">

                </div>
                <div className="h-1/5 w-full bg-blue-400">

                </div>
                <div className="h-1/5 w-full bg-gray-700">

                </div>

            </div>
            <div className="flex flex-col w-1/5 h-full">
                <div className="flex flex-row h-12 items-center justify-between p-2 top-0">
                    <div className="text-lg font-montserrat">
                        Ingrédients
                                    </div>
                    <div>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </div>
                </div>

            </div>
        </div>
    </div>
        
    )
}



export default AgoraPanel