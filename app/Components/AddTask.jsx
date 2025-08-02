"use client"
import { useState } from "react";
import {IoIosCloseCircle} from "react-icons/io"
export default function AddTaks({open, setOpen}) {
    const [task, setTask] = useState({
        nameTask: "",
        descriptionTask: "",
        timeTask: "",
        time:  "",
        typeTask: "",
        progress: 20,
        isDone: false,
    })
    const [error, setError] =  useState("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask(prev => ({...prev, [name]: value}))
    }

    const addTask = (e) => {
        e.preventDefault();

        if (!task.nameTask || !task.descriptionTask || !task.timeTask || !task.typeTask || !task.time){
            setError("You Should Fill Inputs Before Add New Task!")
            return
        }
        setError("")

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
            timeTask: "",
            time: "",
            typeTask: "",
            progress: 20,
            isDone: false,
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
                    <label htmlFor="timeTask" className="block text-left">Time Task</label>
                    <div className="flex justify-between items-center gap-1.5 max-[991px]:flex-col">
                    <input 
                    className="bg-white p-2.5 w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]" 
                    type="time" 
                    id="timeTask" 
                    name="timeTask"
                    placeholder="Time Task"
                    value={task.timeTask}
                    onChange={handleChange}
                    />
                    <input 
                    type="text"
                    name="time"
                    className="bg-white p-2.5 w-[47%] max-[991px]:w-full transition-all rounded-[6px] outline-none border-blue-300 focus:border-blue-400 border-[3px]"
                    placeholder="PM or AM" 
                    value={task.time}
                    onChange={handleChange}
                    />
                    </div>
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
                <button type="submit" className="py-2.5 px-6 cursor-pointer text-center text-white bg-blue-400 rounded-[6px] border-none hover:bg-blue-300 transition-all">Add Task</button>
                {error ? (<p className={`text-red-500 font-semibold p-2 mt-2`}>{error}</p>) : ""}
            </form>
        </div>
        </>
    )
}