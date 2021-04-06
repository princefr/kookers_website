import { useState } from "react"




function CameraButton ({localStream}) {
    const [isActive, setIsActive]  = useState(true)


    const handleCutCamera = () => {
        setIsActive(false)
        localStream.muteVideo()
    }


    const handleResumeCamera = () => {
        setIsActive(true)
        localStream.unmuteVideo()
    }


    return (
        <div>
            {
                isActive ? <button onClick={handleCutCamera} className="rounded-full bg-gray-600 h-12 w-12 items-center justify-center bg-opacity-50  flex focus:outline-none">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </button>: <button onClick={handleResumeCamera} className="rounded-full bg-red-600 h-12 w-12 items-center justify-center bg-opacity-50  flex focus:outline-none relative">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        <div className="h-4/5 w-0.5 bg-white absolute rounded-full origin-center transform rotate-45 animate-growup"></div>
                    </button>
            }
        </div>
    )
}


export default CameraButton