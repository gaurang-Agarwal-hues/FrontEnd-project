// we are creating when user clicks on add content a modal pops out
// we are creating a modal which pops above a whole screen as a box in center and blurs background

import { AddIcon } from "../icons/crossIcon";


// export function CreateContentModal({open,onClose}:{
//     open:any,
//     onClose:any
// }) {
//     return <div>
//         {open && <div className = "w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center ">
//             <div className="flex flex-col justify-center"> 
//                 <span className="bg-white  p-4 rounded-xl backface-visible">
                    
//                     <div className="flex justify-end">
//                        <div className="text-black">Add Your Information Here</div> 
//                         <div onClick={onClose} //important
//                         className="cursor-pointer"> <AddIcon/>
//                         </div>
                        
//                         </div>
//                     <div><Input placeholder={"Title"}/></div>
//                     <div><Input placeholder={"Link"}/></div>
//                     <div className="flex justify-center">
//                     <button className="px-4 py-2 rounded-4xl text-white bg-purple-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:bg-purple-900">Add To Brain!</button></div>
//                     </span>
//                  </div>
//              </div>}
//     </div>
// }
// function Input({onChange,placeholder}: {onChange?:()=>void, placeholder:any} ){
//     return <div>
//         <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded-4xl m-2" onChange={onChange} ></input>
//     </div>
// } 
// export function CreateContentModal({open, onClose}: {
//     open: any,
//     onClose: any
// }) {
//     return (
//         <div>
//             {open && (
//                 <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 flex justify-center items-center opacity-80">
//                     <div className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-lg">
//                         <div className="flex justify-between items-center mb-4">
//                             <div className="text-black">Add Your Information Here</div>
//                             <div onClick={onClose} className="cursor-pointer">
//                                 <AddIcon/>
//                             </div>
//                         </div>
//                         <div><Input placeholder={"Title"}/></div>
//                         <div><Input placeholder={"Link"}/></div>
//                         <div className="flex justify-center mt-4">
//                             <button className="px-4 py-2 rounded-4xl text-white bg-purple-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:bg-purple-900">
//                                 Add To Brain!
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// function Input({onChange, placeholder}: {onChange?: () => void, placeholder: any}) {
//     return (
//         <div>
//             <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded-4xl m-2" onChange={onChange}/>
//         </div>
//     );
// }
export function CreateContentModal({open, onClose}: {
    open: any,
    onClose: any
}) {
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-black opacity-60 fixed top-0 left-0 flex justify-center items-center">
                    <div className=" inset top-12  bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-black">Add Your Information Here</div>
                            <div onClick={onClose} className="cursor-pointer">
                                <AddIcon/>
                            </div>
                        </div>
                        <div><Input placeholder={"Title"}/></div>
                        <div><Input placeholder={"Link"}/></div>
                        <div className="flex justify-center mt-4">
                            <button className="px-4 py-2 rounded-4xl text-white bg-purple-600 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:bg-purple-900">
                                Add To Brain!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Input({onChange, placeholder}: {onChange?: () => void, placeholder: any}) {
    return (
        <div>
            <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded-4xl m-2" onChange={onChange}/>
        </div>
    );
}
