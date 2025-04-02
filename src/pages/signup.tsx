// import { useRef } from "react";
// import { Input } from "../components/input";

// export function SignUp() {
//     const usernameRef = useRef<HTMLInputElement>();  //it gives type to the value in signup function it is a ts syntax
//     const passwordRef = useRef<HTMLInputElement>();

//     function signup() {
//         const username= usernameRef.current?.value;  // ? is added for ts
//         const password= passwordRef.current?.value;
//     }
    
//     return <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
//         <div className="bg-white rounded-2xl border min-w-48 p-8">
//             <Input ref={usernameRef} placeholder="Username"></Input>
//             <Input ref={passwordRef} placeholder="Password"></Input>
//             <div className="flex justify-center pt-4 pb-1">
//             <button className="bg-purple-500  w-full justify-center text-white cursor-pointer px-4 py-2 rounded-md font-light flex items-center  transition delay-75 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110" onClick={signup}>SignUp</button>
//             </div>
//             </div>
//     </div>
// }
// //add loading to button here 
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AddIcon } from "../icons/crossIcon";
import { Logo } from "../icons/Logo";

export  function Sidebar2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Toggle Button */}
            <button 
                className="fixed top-1 left-1 shadow-2xl hover:shadow-white z-50 p-2 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-100 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 text- translate-x-20 font-semibold text-4xl flex "><Logo></Logo> BrainLy</div>
                <div className="border-b"></div>
                <ul className="p-4 space-y-4">
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">Profile</li>
                    <li className="cursor-pointer hover:text-blue-500">Settings</li>
                    <li className="cursor-pointer hover:text-blue-500">Logout</li>
                </ul>
                
                {/* User Details at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-100 border-t flex items-center">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-gray-600">johndoe@example.com</div>
                    </div>
                </div>
            </div>
            
            {/* Transparent Background Overlay */}
            {isOpen && (
                <div 
                    className=" fixed inset-y-0 right-0 w-7xl bg-black opacity-50  transform transition-transform duration-200 ease-in-out z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
}
