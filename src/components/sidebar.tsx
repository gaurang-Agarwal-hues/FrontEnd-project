import { Logo } from "../icons/Logo";

import { TwitterIcon } from "../icons/twittericon";
import { YoutubeIcon } from "../icons/Youtubeicon";
import { SidebarItem } from "./sideBarItem";

export function Sidebar () {
    return (
        <div className="h-screen bg-white border-r fixed top-0 left-0 w-72 pl-6">
            <div className="flex text-2xl pt-4">
                <Logo></Logo> 
                Brainly
            </div>
            <div className="pt-4 ">
                <SidebarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}></SidebarItem>
                <SidebarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}></SidebarItem>
            </div>
        </div>
    )
}