"use client"
import { useEffect, useState } from "react";
import CurrentVioce from "./CurrentVioce";
import axios from "axios";
import {GrFavorite} from "react-icons/gr"
import { MdFavorite } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function Posts() {
    const [post, setPost] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [message, setMessage]= useState("")
    const [animate, setAnimate] = useState(true)
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = async() => {
        try{
            const res = await axios.get("/posts.json");
            setPost(res.data)
            console.log(res)
        } catch(error){
            console.log(error);
        }
    }


const SavedPosteFavo = (ele) => {
    const posts = JSON.parse(localStorage.getItem("Posts")) || [];

    const exists = posts.some((post) => post.id === ele.id);

    if (!exists) {
        const newPost = { ...ele, sucss: !ele.sucss};
        const updatedPosts = [...posts, newPost];

        localStorage.setItem("Posts", JSON.stringify(updatedPosts));
        setPost(...post, updatedPosts); 

    } else {
        setMessage("This Post is already in Favo");
    }

    console.log(posts, ele);
};

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
                        <div className="cursor-pointer"
                        onClick={() => {
                            setAnimate(!animate);
                            // SavedPosteFavo(ele)
                        }}
                        >{animate ? <GrFavorite  size={25} /> : <MdFavorite size={25} /> }</div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}