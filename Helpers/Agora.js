import AgoraRTC from "agora-rtc-sdk-ng"

var rtc = {
    // For the local client.
    client: null,
    // For the local audio and video tracks.
    localAudioTrack: null,
    localVideoTrack: null,
  };

export default function InitAgora(){
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" })
}