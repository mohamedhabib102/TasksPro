import ControlProfile from "../Components/ControlProfile";



export const metadata = {
    title: "Tasks Pro || Edits",
    description: "Tasks Pro is a task management app that helps users create tasks, track their progress weekly or monthly, and stay organized.",
};


export default function EditsPage (){
    return (
        <section className="p-3 bg-[#fff] rounded-xs relative">
        <h1 className="text-4xl m-5 mb-11 relative">
          <span className="absolute h-[3px] w-[120] -bottom-2.5 bg-[#eeee] left-0"></span>
          <span className="absolute h-[3px] w-[40] -bottom-2.5 bg-[#333] left-0"></span>
          Settings Page
        </h1>
        <ControlProfile />
        </section>
    )
}