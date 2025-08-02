"use client"
import { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import {FaPlus} from "react-icons/fa"
import {CiSearch} from "react-icons/ci";
import AddTaks from "./Components/AddTask";
import Auth from "./Components/Auth";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({})
useEffect(() => {
  const storedUser = localStorage.getItem("User");
  if (storedUser) {
    const currentUser = JSON.parse(storedUser);
    setUser(currentUser);
  }
}, []);




  const logout = ()=> {
    localStorage.removeItem("User")
    setUser({})
  }
  return (
    <div className="p-3 bg-[#fff] rounded-xs relative">
      {/* Pupop add new task */}
      <AddTaks open={open} setOpen={setOpen}/>
      <Auth auth={auth} setAuth={setAuth} setUser={setUser}/>
        <div className="flex justify-between items-center">
          <div className="flex relative max-[575px]:w-full">
            <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2"/>
            <input className="p-2 pl-6 rounded-[6px] max-[575px]:w-full outline-0 border-[#eee] border-3 transition-all" type="text" placeholder="Search of Posts"/>
          </div>
          <div className="text-[18px] max-[575px]:hidden">
            <span>Welcome <span>{user.firstName ? (`${user.firstName} ${user.lastName}`) : "Guest"}</span> </span>
            <button className="ml-2 p-2 w-32 max-[992px]:w-fit bg-blue-500 text-white transition-all hover:bg-blue-400 rounded-2xl cursor-pointer" 
            onClick={() => {
              if (!user.firstName){
                setAuth(!auth) 
              } else {
                  logout() 
              }
            }}>{user.firstName ? "Logout" : "Login"}</button>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="fixed z-40 text-[17px] flex justify-center items-center bottom-20  right-12  6vx p-2 w-11 h-11 bg-[#333] rounded-full border[#fff] border-2 outline-[#333] outline-2 cursor-pointer text-[#fff] transition-all">
          <FaPlus />
        </div>
        <h1 className="text-4xl m-5 mb-11 relative">
          <span className="absolute h-[3px] w-[120] -bottom-2.5 bg-[#eeee] left-0"></span>
          <span className="absolute h-[3px] w-[40] -bottom-2.5 bg-[#333] left-0"></span>
          Home Page
        </h1>
          <Posts />
    </div>
  );
}
