"use client"
import { useState } from "react";
import {IoIosCloseCircle} from "react-icons/io"
export default function AddTaks({open, setOpen}) {
    const [task, setTask] = useState({
        nameTask: "",
        descriptionTask: "",
        timeTaskIsDone: "",
        time: "",
        typeTask: "",
        progress: 20,
        isDone: false,
        timeTaskNow: new Date().toDateString()
    })
    const [error, setError] =  useState("")
    const [errorTime, setErrotTiem] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask(prev => ({...prev, [name]: value}))
    }


    
    const addTask = (e) => {
        e.preventDefault();
        const dateNow =  new Date().toLocaleDateString();
        const convertTimeTask = task.timeTaskIsDone;

        const currentTimeTask = new Date(convertTimeTask).toLocaleDateString();

        

        if (!task.nameTask || !task.descriptionTask || !task.typeTask || !task.timeTaskIsDone || !task.time){
            setError("You Should Fill Inputs Before Add New Task!")
            return
        }
        setError("")

       

        if (dateNow.trim() > currentTimeTask.trim()){
            setErrotTiem("This time is incorrect!!")
            console.log("task"+task.timeTaskIsDone);
            console.log("now"+dateNow);
            console.log("cur"+currentTimeTask);
            
            
            
            return;
        }
        setErrotTiem("")

        // Svaed Task
        const savedTasks =  JSON.parse(localStorage.getItem("tasksPro")) || [];


        const newId = {...task, id: Date.now()}

        console.log(newId);
        

        const updatedTasks = [...savedTasks, newId];

        // add Task in Local S
        localStorage.setItem("tasksPro", JSON.stringify(updatedTasks))

        console.log(task);

        setTask({
            nameTask: "",
            descriptionTask: "",
            timeTaskIsDone: "",
            time: "",
            typeTask: "",
            progress: 20,
            isDone: false,
            timeTaskNow: new Date().toDateString()
        })




        setOpen(!open)
        
    }
    return(
        <>
        <div className={`${open ? " scale-100 opacity-100": "scale-0 opacity-0"} w-full fixed top-0 left-0 h-full bg-[#33333393] z-50  backdrop-blur-[5px]`}></div>
        <div className={`${open ? " scale-100 opacity-100": "scale-0 opacity-0"} fixed w-10/12 max-[991px]:w-full max-[991px]:h-full top-1/2 left-1/2 rounded-[8px] -translate-1/2 p-5 bg-[#eee] transition-all z-50`}>
            <IoIosCloseCircle onClick={() => setOpen(!open)} className="z-50 text-4xl absolute top-6 right-6 cursor-pointer transition-all hover:opacity-85"/>
            <form onSubmit={addTask} className="pt-20 pb-16 px-2.5 text-center">
                <h4 className="uppercase mb-3.5 font-semibold text-2xl text-[#333]"><span className="text-blue-400">Add</span> New Task</h4>
                <div className="mb-3 relative w-full">
                    <label htmlFor="nameTask" className="block text-left">Name Task</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="text" 
                    id="nameTask" 
                    name="nameTask"
                    placeholder="Name Task"
                    value={task.nameTask}
                    onChange={handleChange}/>
                </div>

                <div className="mb-3 relative w-full">
                    <label htmlFor="descriptionTask" className="block text-left">Description Task</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="text" 
                    id="descriptionTask" 
                    name="descriptionTask"
                    placeholder="Description Task"
                    value={task.descriptionTask}
                    onChange={handleChange}/>
                </div>
                <div className="mb-3 relative w-full">
                    <label htmlFor="typeTask" className="block text-left">Type Task</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="text" 
                    id="typeTask"
                    name="typeTask"
                    placeholder="Type Task"
                    value={task.typeTask}
                    onChange={handleChange}/>
                </div>
                <div className="mb-3 relative w-full">
                    <label htmlFor="typeTask" className="block text-left">Date Task</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="date" 
                    id="typeTask"
                    name="timeTaskIsDone"
                    placeholder="Type Task"
                    value={task.timeTaskIsDone}
                    onChange={handleChange}/>
                </div>
                <div className="mb-3 relative w-full">
                    <label htmlFor="descriptionTask" className="block text-left">Time Task</label>
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="time" 
                    id="time" 
                    name="time"
                    placeholder="Description Task"
                    value={task.time}
                    onChange={handleChange}/>
                </div>
                <button type="submit" className="py-2.5 px-6 cursor-pointer text-center text-white bg-blue-400 rounded-[6px] border-none hover:bg-blue-300 transition-all">Add Task</button>
                {error ? (<p className={`text-red-500 font-semibold p-2 mt-2`}>{error}</p>) : ""}
                {errorTime ? (<p className={`text-red-500 font-semibold p-2 mt-2`}>{errorTime}</p>) : ""}
            </form>
        </div>
        </>
    )
}