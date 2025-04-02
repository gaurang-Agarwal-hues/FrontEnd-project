import { AddIcon } from "../icons/crossIcon";
import { Logo } from "../icons/Logo";

import { TwitterIcon } from "../icons/twittericon";
import { YoutubeIcon } from "../icons/Youtubeicon";
import { SidebarItem } from "./sideBarItem";

export function Sidebar ({show, close}:{show:any, close:any}) {
    return <> <div>
       { show &&  <div className=" h-screen w-screen bg-slate-500 fixed top-0 left-0 transition-all delay-1000 duration-1000 ease-linear backdrop-blur-2xl opacity-60 ">  <div className=""> <span className="h-screen  bg-white border-r  fixed top-0 left-0 w-72 pl-6  rounded-md backdrop-blur-2xl ">
        <>   <div className="flex justify-baseline text-2xl pt-4 "onClick={close}>
                <Logo></Logo> 
                Brainly
             <div className="cursor-pointer" onClick={close}><AddIcon/></div> 
             </div>
            <div className="pt-4 ">
                <SidebarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}></SidebarItem>
                <SidebarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}></SidebarItem>
            </div>
            </> 
        </span>
        </div>
        </div>}
        </div>
        </>
}