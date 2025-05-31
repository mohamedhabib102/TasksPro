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
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = async() => {
        try{
            const res = await axios.get("/posts.json");
            setPost(res.data)
        } catch(error){
            console.log(error);
        }
    }


    const SavedPosteFavo = (ele) => {
        const posts = JSON.parse(localStorage.getItem("Posts")) || []

        const exists =  posts.some((post) => post.id === ele.id);

        if (!exists){
            posts.push(ele)
            localStorage.setItem("Posts", JSON.stringify(posts))
        } else{
          setMessage("This is Post is Found in Favo")
        }
        

    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {post.map((ele, index) => (
                <div className="relative p-3.5 rounded-[10px] border-[3px] border-[#fff] bg-[#f2f2f2] outline-[3px] outline-[#eee]" key={ele.id}>
                    {ele.name === "post" ? (
                            <p dir="rtl" className="font-semibold">{ele.post}</p>
                        ) : ele.name === "vioce" ? (
                            <CurrentVioce 
                                src={ele.vioce} 
                                currentAudio={currentAudio} 
                                setCurrentAudio={setCurrentAudio} 
                            />

                        ): null}
                    <div className="flex justify-between items-center pt-2.5">
                    <span className="text-[15px] text-blue-400 font-semibold">{ele.type}</span>
                    <span 
                    className={` cursor-pointer`}
                    onClick={() => {
                        SavedPosteFavo(ele)
                        setAnimate(!animate)
                    }}>
                        {
                            post.map((t, i) => {
                                i === index ?
                                animate ? <MdFavorite size={20}/> : <GrFavorite size={20}/>
                                  :    
                                  "" 
                            })
                        } 

                    </span>

                    </div>
                </div>
            ))}
        </div>
    )
}