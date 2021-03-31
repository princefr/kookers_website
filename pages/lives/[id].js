// import AgoraRTC from "agora-rtc-sdk-ng"
import styles from '../../styles/Home.module.css'
import Head from 'next/head'




function Lives(){
    return (
        <div style={styles}>
            <Head>
                <title>Cours de cuisine</title>
            </Head>
            <main>

            <div className="flex flex-col flex-auto w-screen h-screen">
                    <div className="flex flex-row h-48 bg-black justify-between p-2 grid-rows-5 grid-flow-col gap-6 space-x-10">
                            <div className="bg-red-700 w-80 border rounded">1</div>
                            <div className="bg-red-700 w-80 border rounded">2</div>
                            <div className="bg-red-700 w-80 border rounded">3</div>
                            <div className="bg-red-700 w-80 border rounded">4</div>
                            <div className="bg-red-700 w-80 border rounded">5</div>
                    </div>
                    <div className="flex flex-auto h-auto bg-blue-800">

                    </div>
                </div>

            </main>
        </div>
    )

}



export default Lives