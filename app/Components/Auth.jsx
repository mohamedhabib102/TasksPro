"use client"
import { useState } from "react";
import {IoIosCloseCircle} from "react-icons/io"

export default function Auth({auth, setAuth, setUser}) {
 const [error, setError] = useState("");
  const [formUser, setFormUser] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const createUser = (e) => {
    e.preventDefault();
    if (!formUser.firstName || !formUser.lastName) {
      setError("You Should Fill Inputs Before Add New user!");
      return;
    }

    setError("");
    const newId = { ...formUser, id: Date.now() };

    localStorage.setItem("User", JSON.stringify(newId));


    setUser(newId);

    setFormUser({
      firstName: "",
      lastName: "",
    });

    setAuth(!auth);
  };
    return(
        <>
        <div className={`${auth ? " scale-100 opacity-100": "scale-0 opacity-0"} w-full fixed top-0 left-0 h-full bg-[#33333393] z-50  backdrop-blur-[5px]`}></div>
        <div className={`${auth ? " scale-100 opacity-100": "scale-0 opacity-0"} fixed w-10/12 max-[991px]:w-full rounded-[8px] top-1/2 left-1/2 -translate-1/2 p-5 bg-[#eee] transition-all z-50`}>
            <IoIosCloseCircle onClick={() => setAuth(!auth)} className="z-50 text-4xl absolute top-6 right-6 cursor-pointer transition-all hover:opacity-85"/>
            <form  onSubmit={createUser} className="pt-10 pb-10 px-2.5 text-center">
                <h4 className="uppercase mb-3.5 font-semibold text-2xl text-[#333]"><span className="text-blue-400">Create</span> a UserName</h4>
                <div className="mb-3 relative w-full">
                    <label htmlFor="firstName" className="block text-left">First Name</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    placeholder="First Name"
                    value={formUser.firstName}
                    onChange={handleChange}/>
                </div>
                <div className="mb-3 relative w-full">
                    <label htmlFor="userName" className="block text-left">Last Name</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="text" 
                    id="LastName" 
                    name="lastName"
                    placeholder="Last Name"
                    value={formUser.lastName}
                    onChange={handleChange}/>
                </div>


                <button type="submit" className="py-2.5 px-6 cursor-pointer text-center text-white bg-blue-400 rounded-[6px] border-none hover:bg-blue-300 transition-all">Create</button>
                {error ? (<p className={`text-red-500 font-semibold p-2 mt-2`}>{error}</p>) : ""}
            </form>
        </div>
        </>
    )
}