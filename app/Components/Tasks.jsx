"use client"
import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa";
import {MdDelete} from "react-icons/md"
export default function Tasks (){
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasksPro");
       try{
            const parsedTasks = JSON.parse(savedTasks);
            if (parsedTasks){
                setTasks(parsedTasks)
            } else{
                setTasks([])
            }
        } catch(error){
            console.log("tasks is not found", error)
        }
    }, []);





    // delete task
    const deleteTask = (indexEle) => {
        const taskDelete = tasks.filter((_ , i) => i !== indexEle)

        setTasks(taskDelete)
        

        localStorage.setItem("tasksPro", JSON.stringify(taskDelete))
    }

const handleDone = (indexEle) => {
        const currentDateNow = new Date().toISOString();
        
        const isDoneTasks = localStorage.getItem("isDone");
        const parsedIsDone = JSON.parse(isDoneTasks) || [];
        localStorage.setItem(
          "isDone",
          JSON.stringify([
            ...parsedIsDone,
            { ...tasks[indexEle], dateTaskNow: currentDateNow }
          ])
        );
        

        const updatedTasks = tasks.map((task, i) => {
          if (!task) return task;
          return i === indexEle ? { ...task, isDone: true } : task;
        });
        
   
        setTasks(updatedTasks);
        

        localStorage.setItem("tasksPro", JSON.stringify(updatedTasks));
};

    
    return (
        <div className={`p-2.5 flex flex-col gap-5`}>
            {tasks.length === 0 ? (<p className="text-center text-[20px] text-[#333] font-semibold uppercase">Tasks Is not found</p>) : tasks.map((ele, index) => (
                <div key={index} className={` ${ele.isDone ? "bg-[#33333352] border-[#3333331a] outline-[#33333300] opacity-50 pointer-events-none select-none cursor-default"  : ""}  relative py-3 px-4 rounded-[10px] border-[3px] border-[#fff] bg-[#f2f2f2] outline-[3px] outline-[#eee]`}>
                    <div className={`flex justify-end cursor-pointer transition-all colorMain hover:opacity-65 text-[21px] absolute top-3.5 right-3.5 ${ele.isDone ? "pointer-events-auto" : ""}`}
                    onClick={() => deleteTask(index)}><MdDelete /></div>
                    <span className="uppercase text-[14px] text-[#333] font-extrabold">{ele.typeTask}</span>
                    <h4 className="colorMain font-semibold text-[18px] mt-2">{ele.nameTask}</h4>
                    <p className="text-[16px] mb-1.5 text-[#333]">{ele.descriptionTask}</p>
                    <span className="block w-full h-[8px] overflow-hidden rounded-[2px] mb-2 bg-[#fff] relative">
                <span 
                    className="bgMain absolute transition-all top-0 left-0 h-full"
                    style={{ width: `${ele.progress}%` }} 
                ></span>
            </span>
                    <span className="text-[18px]">
                        <span className="font-semibold mr-2.5 colorMain">Time:</span>
                    <span className="mr-1">{ele.timeTask || "No Time"}</span> 
                    { ele.time || "No Time"}
                    </span>
                    <div className="flex items-center justify-between flex-wrap max-[991px]:items-start gap-2 mt-4">
                        <div className="flex items-center gap-2">
                        <span title="Done" className={` ${ele.isDone ? "text-[#333] cursor-default" : "cursor-pointer hover:opacity-75  colorMain  hover:shadow"} flex gap-2 items-center justify-center py-2 px-2.5 text-[#333] bg-white transition-all rounded-[6px] w-24 font-semibold`}
                        onClick={() => {
                            const editTask = tasks.map((t, i) => 
                            i === index ? {...t, isDone: t.isDone = true} : t
                        )
                        setTasks(editTask);
                        localStorage.setItem("tasksPro", JSON.stringify(editTask));
                        handleDone(index)   
                        }}>{<FaCheck />} Done</span>
                        </div>
                        <span className="bg-main font-semibold text-[15px]">{ele.progress}%</span>
                    </div>
                </div>
            ))}
        </div>
    )
}