// import { AdditionIcon } from "../icons/addicon";

import { AdditionIcon } from "../icons/addicon";
import { AddIcon } from "../icons/crossIcon";
import { ShareIcon } from "../icons/share";
import { YoutubeIcon } from "../icons/Youtubeicon";


// //@ts-ignore
// export const Card = () => {
//     return <div className='bg-white  max-w-86 p-8 rounded-lg border-1 border-slate-300'>
//         <div className="flex justify-between">
            
//             <div className="flex items-center">
//            <div className="pl-1 text-gray-500">     
//         <AdditionIcon />
//         </div>
//         <div className="pl-1">
        
//         </div>
//             </div>
//             <div className="flex pl-2 text-gray-500 items-center">
//                 <div className="">
// <AdditionIcon/>
// </div>
// <div className="">
// <AdditionIcon/>
// </div>
//             </div>
//         </div>
//     </div>;

// };


interface CardProps {
    title: string; // Title of the card, e.g., video or tweet title
    link: string; // Link to the content (YouTube or Twitter)
    type: "twitter" | "youtube"; // Type of the content
}

// The Card component represents a styled card that can display either a YouTube video or a Twitter embed based on the type prop.
export function Card({ title, link, type }: CardProps) {
    return (
        <div>
            {/* Card Container */}
            <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
                {/* Header Section */}
                <div className="flex justify-between">
                    {/* Left Section: Title with Icon */}
                    <div className="flex items-center text-xl font-bold">
                        <div className="text-gray-500 pr-2">
                            {/* Share Icon preceding the title */}
                            <YoutubeIcon />
                        </div>
                        {title}
                    </div>
                    {/* Right Section: Links with Icons */}
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            {/* Clickable Share Icon that opens the link */}
                            <a href={link} target="_blank">
                                <AdditionIcon/>
                            </a>
                        </div>
                        <div className="text-gray-500">
                            {/* Placeholder for another Share Icon */}
                            <ShareIcon />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pt-4">
                    {/* Render YouTube embed if type is "youtube" */}
                    {type === "youtube" && (
                        <iframe
                            className="w-full rounded-md"
                            src={link
                                .replace("watch", "embed")
                                .replace("?v=", "/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}

                    {/* Render Twitter embed if type is "twitter" */}
                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
                </div>
            </div>
        </div>
    );
}
