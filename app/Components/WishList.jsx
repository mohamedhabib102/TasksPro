"use client"

import CurrentVioce from "./CurrentVioce";
import { MdDelete } from "react-icons/md";

const { useState, useEffect } = require("react")





 export default function WhishList () {
    const [posts, setPosts] =  useState([])
    const [currentAudio, setCurrentAudio] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const favo = JSON.parse(localStorage.getItem("Favo")) || [];
        if (favo){
            setPosts(favo);
        }
    }, [])


    const deletePost  = (ele) => {
        const updatedPosts = posts.filter((post) => post.id !== ele.id)
        localStorage.setItem("Favo", JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
        setMessage("Post deleted successfully");
        if (currentAudio && currentAudio.src === ele.vioce) {
            currentAudio.pause();
            setCurrentAudio(null);
        }
    }

    const handelMessageShow = () => {
        setTimeout(() => {
            setMessage("")
        }, 3000) 
    }
    return (
        <section className="">
            <p className={`${message ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-12"} z-50 transition duration-200 fixed left-1/2 -translate-x-1/2
            bg-blue-400 p-3 rounded-2xl text-white lg:text-lg text-sm text-center font-semibold`}>{message ? message : ""}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {posts.map((ele) => (
                    <div key={ele.id} className="relative p-3.5 rounded-[10px] border-[3px] overflow-hidden z-30 border-[#fff] bg-[#f2f2f2] outline-[3px] outline-[#eee]">
                        <span className={`absolute w-16 h-14 bg-red-400 rounded-b-4xl rounded-l-4xl right-0 top-0  ${ele.name === "vioce" ? "" : "-z-20"}`}></span>
                        {ele.name === "post" ? (
                            <h3 dir="rtl" className="font-semibold min-h-16">{ele.post}</h3>
                        ) : ele.name === "vioce" ? (
                           <CurrentVioce
                            src={ele.vioce} 
                            currentAudio={currentAudio}
                            setCurrentAudio={setCurrentAudio}
                            />
                        ): null}
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-[15px] text-blue-400 font-semibold">{ele.type}</span>
                            <MdDelete 
                            onClick={() => {
                                deletePost(ele);
                                handelMessageShow();
                            }}
                            size={25} 
                            className=" transition cursor-pointer hover:text-red-500"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
 }