"use client"
import { useEffect, useState } from "react";
import CurrentVioce from "./CurrentVioce";
import axios from "axios";
import {GrFavorite} from "react-icons/gr"
import { MdFavorite } from "react-icons/md";

export default function Posts() {
    const [post, setPost] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [message, setMessage]= useState("")
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = async() => {
        try{
            const res = await axios.get("/posts.json");
            const favo = JSON.parse(localStorage.getItem("Favo")) || [];
                const updatedPosts = res.data.map((post) => {
                const isFavo = favo.some((fav) => fav.id === post.id);
                return { ...post, sucss: isFavo };
            });
            setPost(updatedPosts)
            console.log(res)
        } catch(error){
            console.log(error);
        }
    }


    const SavedPosteFavo = (ele) => {
      const posts = JSON.parse(localStorage.getItem("Favo")) || [];
    
      const exists = posts.some((post) => post.id === ele.id);
    
      if (!exists) {
        const newPost = { ...ele, sucss: !ele.sucss };
        const updatedPosts = [...posts, newPost];
        localStorage.setItem("Favo", JSON.stringify(updatedPosts));
    
        const updatedStatePost = post.map((p) =>
          p.id === ele.id ? { ...p, sucss: true } : p
        );
    
        setPost(updatedStatePost);
        setMessage("Added to Favo");
      } else {
        setMessage("This Post is already in Favo");
      }
    };

    
    const handelMessageShow = () => {
        setTimeout(() => {
            setMessage("")
        }, 3000) 
    } 

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <p className={`${message ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-12"} transition duration-200 fixed left-1/2 -translate-x-1/2 z-20
            bg-blue-400 p-3 rounded-2xl text-white lg:text-lg text-sm text-center font-semibold`}>{message ? message : ""}</p>
            {post.map((ele, index) => (
                <div className="relative p-3.5 rounded-[10px] border-[3px] border-[#fff] bg-[#f2f2f2] outline-[3px] outline-[#eee]" key={ele.id}>
                    {ele.name === "post" ? (
                            <p dir="rtl" className="font-semibold min-h-16">{ele.post}</p>
                        ) : ele.name === "vioce" ? (
                            <CurrentVioce 
                                src={ele.vioce} 
                                currentAudio={currentAudio} 
                                setCurrentAudio={setCurrentAudio} 
                            />

                        ): null}
                    <div className="pt-2.5">
                    <div className="flex items-center justify-between">
                        <div className="text-[15px] text-blue-400 font-semibold">{ele.type}</div>
                       <div
                         className="cursor-pointer"
                         onClick={() => {
                           SavedPosteFavo(ele);
                           handelMessageShow();
                         }}
                       >
                         {ele.sucss ? (
                           <MdFavorite
                             size={30}
                             className={`text-red-500`}
                           />
                         ) : (
                           <GrFavorite
                             size={30}
                             className="text-red-500"
                           />
                         )}
                       </div>

                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}