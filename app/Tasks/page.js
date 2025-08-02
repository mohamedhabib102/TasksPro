import Goal from "../Components/Goal";
import Tasks from "../Components/Tasks";

export default function TasksPage() {
    return(
        <div className="p-3 bg-[#fff] rounded-xs relative">
        <h1 className="text-4xl m-5 mb-11 relative">
          <span className="absolute h-[3px] w-[120] -bottom-2.5 bg-[#eeee] left-0"></span>
          <span className="absolute h-[3px] w-[40] -bottom-2.5 bg-[#333] left-0"></span>
          Tasks Page
        </h1>
        <Tasks />
        <Goal />
        </div>
    )
}