"use client";

import { MdAdd } from "react-icons/md";
import { GiGoalKeeper } from "react-icons/gi";
import {useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Auth from "./Auth";







export default function ControlProfile(){
    const [name, setName] = useState("")
    const [isDisabled, setIsDisabled] = useState(true);
    const [profileImage, setProfileImage] = useState(null);
    const [messageUser, setMessageUser] = useState("");
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({})


      useEffect(() => {
        const storedUser = localStorage.getItem("User");
        const storedImage = localStorage.getItem("profileImage");
      
      
        if (storedImage) {
          setProfileImage(storedImage);
        }
      
      
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          setUser(parsed);
          setName(`${parsed.firstName} ${parsed.lastName}`);
        } else {
          setUser({});
          setName("");
        }
      }, [auth, user.firstName]);





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
        setUser(user);
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

       const logout = ()=> {
        localStorage.removeItem("User")
        setUser({})
        setName("")
        setProfileImage(null);
        localStorage.removeItem("profileImage");
        setMessageUser("You have logged out successfully!");
        handelMessageUser();
      }

    return (
        <>
        <Auth auth={auth} setAuth={setAuth} setUser={setUser}/>
        <div className="">
            <p className={`${messageUser ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-12"} transition duration-200 absolute left-1/2 -translate-x-1/2 z-20
            bg-blue-400 p-3 rounded-2xl text-white lg:text-lg text-sm text-center font-semibold`}>{messageUser ? messageUser : ""}</p>
            <div className="flex lg:flex-row flex-col justify-between items-center bg-blue-300 rounded-lg p-3.5">
                <div className="flex lg:items-center text-start flex-row lg:gap-5 gap-3 w-full">
                <div className="relative lg:w-fit">
                   <img 
                    src={profileImage ? profileImage : "/assets/default-image.jpg"} 
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
                        <p className="lg:text-lg text-sm font-semibold text-blue-500 break-words">{user ? `${name}` : "Guest"}</p>
                  </div>
                </div>

                <div className="lg:block hidden">
                    <GiGoalKeeper  className="text-blue-500" size={100}/>
                </div>
            </div>

              { user.firstName ? (
                            <form>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Edit Your Name"
                    value={name ? name : "Guest"}
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
              ) : ""}
            <button className="mt-4 p-2 w-32 max-[992px]:w-fit bg-blue-500 text-white transition-all hover:bg-blue-400 rounded-2xl cursor-pointer" 
            onClick={() => {
              if (!user.firstName){
                setAuth(!auth) 
              } else {
                  logout() 
              }
            }}>{user.firstName ? "Logout" : "Login"}</button>
        </div>
        </>
    )
}