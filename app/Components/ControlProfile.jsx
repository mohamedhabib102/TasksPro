"use client";

import { MdAdd } from "react-icons/md";
import { GiGoalKeeper } from "react-icons/gi";
import {useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";







export default function ControlProfile(){
    const [name, setName] = useState("")
    const [isDisabled, setIsDisabled] = useState(true);
    const [profileImage, setProfileImage] = useState(null);
    const [messageUser, setMessageUser] = useState("");


    useEffect(() => {
        const storedName = localStorage.getItem("User");
        const storedImage = localStorage.getItem("profileImage");


         console.log(name);
        if (storedImage) {  
            const parsedImage = storedImage;
            if (parsedImage) {
                setProfileImage(parsedImage);
            }
        }

        if (storedName) {
            const parsedName = JSON.parse(storedName);
            setName(parsedName.firstName + " " + parsedName.lastName)
        }
    }, [])



    const handleEditClick = () => {
        setIsDisabled(!isDisabled);
    }


    const handelUpdateName = () => {
        const parts = name.trim().split(" ");

         console.log(parts)
    
        if (parts.length < 2 || parts.length > 4) {
            setMessageUser("Please enter a name with a maximum of 4 words.");
            setIsDisabled(false);
            return;
        }
    
        const user = {
            firstName: parts[0],
            lastName: parts.slice(1).join(" ") 
        };
    
        localStorage.setItem("User", JSON.stringify(user));
        setName(user.firstName + " " + user.lastName);
        setIsDisabled(true);
        setMessageUser("Name updated successfully!");
    };



    const handleImageUpload = (e) => {
        const file = e.target.files[0];    
        console.log(file.name);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                setProfileImage(imageUrl);
                localStorage.setItem("profileImage", imageUrl);
            }
            reader.readAsDataURL(file);
    }
   }


     const handelMessageUser = () => {
        setTimeout(() => {
            setMessageUser("");
        }, 3000)
     }

    return (
        <div className="">
            <p className={`${messageUser ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-12"} transition duration-200 absolute left-1/2 -translate-x-1/2 z-20
            bg-blue-400 p-3 rounded-2xl text-white lg:text-lg text-sm text-center font-semibold`}>{messageUser ? messageUser : ""}</p>
            <div className="flex lg:flex-row flex-col justify-between items-center bg-blue-300 rounded-lg p-3.5">
                <div className="flex lg:items-center text-start flex-row lg:gap-5 gap-3 w-full">
                <div className="relative lg:w-fit">
                   <img 
                    src={profileImage || "/assets/default-image.jpg"} 
                    alt="profile" 
                    title="your profile"
                    className="lg:w-36 w-[90px] rounded-2xl"
                    />
                    <input  
                     className="hidden" 
                     type="file" 
                     id="imageUpload"
                     accept="image/*"
                     onChange={handleImageUpload}
                     />
                    <label htmlFor="imageUpload" className="text-white  transition  text-4xl bg-blue-500 lg:w-[25px] lg:h-[25px] w-[18px] h-[18px] flex justify-center items-center cursor-pointer rounded-sm absolute top-2.5 right-2.5">

                    <MdAdd />
                    </label>
                </div>
                  <div className="w-1/2">
                        <h3 className="lg:text-3xl text-lg text-[#333] font-bold">Welcome</h3>
                        <p className="lg:text-lg text-sm font-semibold text-blue-500 break-words">{name}</p>
                  </div>
                </div>

                <div className="lg:block hidden">
                    <GiGoalKeeper  className="text-blue-500" size={100}/>
                </div>
            </div>

            <form>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Edit Your Name"
                    value={name || ""}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className={`${isDisabled ? "bg-blue-100 opacity-85" : "bg-blue-300 opacity-100"}  w-full p-3 rounded-lg mt-5 text-[#333] outline-none font-semibold`}
                    disabled={isDisabled}
                    maxLength={35}
                  />
                  <MdEdit onClick={() => {
                    handleEditClick();
                    if (!isDisabled) { 
                        if (name.trim() === "") {
                            return;
                        } else {
                            handelUpdateName();
                        }
                    }
                    handelMessageUser();
                  }}  size={25} className="absolute top-1/2 -translate-x-1/2 right-3 cursor-pointer transition hover:text-blue-400"/>
                </div>
            </form>
        </div>
    )
}