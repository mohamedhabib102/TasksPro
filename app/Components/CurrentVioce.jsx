"use client"
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function CurrentVioce({src, currentAudio, setCurrentAudio}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null)

    const togglePlay = () => {
        if (!audioRef.current) return; 

        if (currentAudio && currentAudio !== audioRef.current){
            currentAudio.pause();
            setIsPlaying(false)
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setCurrentAudio(audioRef.current)
        }

        setIsPlaying(!isPlaying);
    };
    return (
        <div className="flex justify-between min-h-16 items-center gap-3 p-3 bg-white shadow-md rounded-lg mb-3.5">
            <button onClick={togglePlay} className="cursor-pointer hover:opacity-[0.6] transition-all">
                {isPlaying ? <FaPause size={20}/> : <FaPlay size={20}/>}
            </button>
            <span className={`${isPlaying ? "hidden" : "inline-block"}`}>Play Sound</span>
            <span className={`animation-sound ${isPlaying ? "opacity-100" : "opacity-0"}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </span>
            <audio 
            ref={audioRef} 
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)} 
            onPause={() => setIsPlaying(false)}
            >
               <source src={src} type="audio/mpeg" />
            </audio>
        </div>
    )
}