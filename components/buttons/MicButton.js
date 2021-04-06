import { useState } from "react"



function MicButton({localStream}){
    const [isActive, setIsActive] = useState(true)


    const handleCutMic = () => {
        setIsActive(false)
        localStream.muteAudio()
    }


    const handleActivateMic = () => {
        setIsActive(true)
        localStream.unmuteAudio()
    }

    return (
        <div>
            {
                isActive ? <button onClick={handleCutMic} className="rounded-full bg-gray-600 h-12 w-12 items-center justify-center bg-opacity-50  flex focus:outline-none">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </button> : <button onClick={handleActivateMic} className="rounded-full bg-red-600 h-12 w-12 items-center justify-center bg-opacity-50  flex focus:outline-none relative">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    <div className="h-4/5 w-0.5 bg-white absolute rounded-full origin-center transform rotate-45 animate-growup"></div>
                </button>
            }
        </div>
    )
}



export default MicButton