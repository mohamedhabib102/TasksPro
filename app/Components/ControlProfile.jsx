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
        const user = {
            firstName: name.split(" ")[0],
            lastName: name.split(" ")[1] || ""              
        };
        console.log(name.split(" "), name, user);

        
        
        localStorage.setItem("User", JSON.stringify(user));
        setName(user.firstName + " " + user.lastName);
        setIsDisabled(true);
        if (name.split(" ").length !== 2) {
            setMessageUser("Please enter a valid name.");
            setIsDisabled(false);
            return;
        } else if (name.split(" ").length === 2) {
            setMessageUser("Name updated successfully!");
        }
} 



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
        }, 2000)
     }

    return (
        <div className="">
            <p className={`${messageUser ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-12"} transition duration-200 absolute left-1/2 -translate-x-1/2 z-20
            bg-blue-400 p-3 rounded-2xl text-white lg:text-lg text-sm text-center font-semibold`}>{messageUser ? messageUser : ""}</p>
            <div className="flex justify-between items-center bg-blue-300 rounded-lg p-3.5">
                <div className="flex items-center gap-5">
                <div className="group relative  w-fit">
                   <img 
                    src={profileImage || "/assets/default-image.jpg"} 
                    alt="profile" 
                    title="your profile"
                    className="w-36 rounded-2xl"
                    />
                    <input  
                     className="hidden" 
                     type="file" 
                     id="imageUpload"
                     accept="image/*"
                     onChange={handleImageUpload}
                     />
                    <label htmlFor="imageUpload" className="text-white opacity-0 transition group-hover:opacity-100 text-4xl bg-blue-500 w-[25px] h-[25px] flex justify-center items-center cursor-pointer rounded-sm absolute top-2.5 right-2.5">

                    <MdAdd />
                    </label>
                </div>
                  <div>
                        <h3 className="text-3xl text-[#333] font-bold">Welcome</h3>
                        <p className="text-[17px] font-semibold text-blue-500">{name}</p>
                  </div>
                </div>

                <div>
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