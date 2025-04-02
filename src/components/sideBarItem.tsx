import  { ReactElement } from "react";

export function SidebarItem ({text,icon}: {
    text: String;
    icon: ReactElement
}) {
    return <div className="flex py-2 cursor-pointer hover:bg-gray-400 rounded transition delay-75 duration-100 ease-in-out hover:-translate-1 border-black ">
        <div className="pr-2">
             {icon}</div>
             <div>
        {text}
        </div>
    </div>
}