"use client"
import { useEffect, useState } from "react"



   export default function Goal () {
    const [tasksDoned, setTasksDone] = useState([])
    useEffect(() => {
        const isDoneTasks = localStorage.getItem("isDone");
        try {
            const parsedIsDone = JSON.parse(isDoneTasks);
            if (parsedIsDone) {
                setTasksDone(parsedIsDone);
            } else {
                setTasksDone([]);
            }
        } catch (error) {
            console.log("isDone tasks is not found", error);
        }
    }, [])
     return (
       <section className="py-14 px-2.5">
           <h3 className="text-3xl mb-6">Comple<span className="text-[#2b7fff]">ted Ta</span>sks!</h3>
           <div className="">
                 {tasksDoned.length === 0 ? (
                    <p className="text-center text-[20px] text-[#333] font-semibold uppercase">No Completed Tasks Found</p>
                 ) : (
                    tasksDoned.map((ele) => 
                        <div className="bg-[#EEE] rounded-b-[20px] rounded-l-[20px] relative overflow-hidden z-20 p-4 mb-5 last:mb-0" key={ele.id}>
                            <h2 className="text-[#333] text-2xl font-semibold mb-1.5">{ele.nameTask}</h2>
                            <span className="block text-[#333] uppercase font-semibold mb-2.5">{ele.typeTask}</span>
                            <span className="text-[#333]">{new Date(ele.dateTaskNow).toLocaleDateString()}</span>
                            <span className="w-28 h-28 absolute bg-[#317ced] rounded-full -top-6 -left-6 -z-10"></span>
                            <div className="flex lg:items-center justify-between lg:flex-row flex-col items-start">
                                <p className=" italic font-semibold">Completed</p>
                                <span className="font-semibold"><span className="text-[#2b7fff]">Gr</span>eat Job!</span>
                            </div>
                        </div>
                    )
                 )}
           </div>
       </section>  
    )
   }