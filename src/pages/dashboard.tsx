
import { Card } from '../components/Card';
import {CreateContentModal}from '../components/createContentModal';
import { ReactElement, useState } from "react";
//import { Button } from './components/button';
//import { AddIcon } from './icons/crossIcon';
//import { ShareIcon } from './icons/share';
import { Sidebar } from '../components/sidebar';
import { Sidebaricon } from '../icons/sidebaricon';
import { Logo } from '../icons/Logo';
import { Sidebar2 } from './signup';
//import { AddIcon } from './icons/crossIcon';
//import { AdditionIcon } from './icons/addicon';
export function Dashboard() {
  //this modal manipulation is the example of the controlled component upar set hota hai state aur child command deta neeche se that the state is changing
  const [modalOpen,setModalOpen] = useState(false);
  const [sidebarOpen,setSidebasOpen] = useState(true);
  
  return (
    <div>
      
      <Sidebar2/>

    <div className='fixed  inline-flex left-0 py-1 px-2 text-transparent bg-clip-text  bg-gradient-to-r from-purple-500  to-gray-200  text-4xl gap-1 items-center translate-x-10 font-bold' onClick={() => {setSidebasOpen(true)}}> BrainLy</div>
    
    
     
     <div className="p-4  bg-gray-800 min-h-screen border-2">  
     
     {/* <CreateContentModal  open={modalOpen} onClose={() => {setModalOpen(false)}} ></CreateContentModal>  */}
     
     <div className='flex  justify-end ml-80 gap-4'>
    
       <button className="bg-purple-600 text-white -translate-y-1 cursor-pointer px-4 py-2  rounded-md font-light flex items-center  transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 "onClick={() => {setModalOpen(true)}}>Add Content</button>
    <button className='px-4 py-2 rounded-md font-light flex items-center -translate-y-1 bg-purple-200 text-purple-600 cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200' onClick={() => {setModalOpen(true)}}>Share Brain</button>
      </div>
      <span className='w-20 h-screen bg-white'></span>
      <div className='flex justify-items-center gap-4 py-2 backface-hidden'>
     <Card
     type="youtube"
     link = {"https://www.youtube.com/watch?v=EFsRw_I37VQ"}
     title ={"First Video"} /> 
     <Card
     type= {"twitter"}
     
     link = {"https://x.com/BhavikaKapoor5/status/1905096726358196584?t=P-zv49lUGv6zhL5Ai-NfnA&s=19"}
     title ={"First Tweet"} />
      <Card
     type= {"youtube"}
     
     link = {"https://www.youtube.com/watch?v=FPu9Uld7W-E&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=4"}
     title ={"DSA course"} />

     <Card
     type= {"youtube"}
     
     link = {"https://www.youtube.com/watch?v=Ti5vfu9arXQ"}
     title ={"Interview Prep"} />
     </div>
     <div className='py-4 flex items-center gap-4  backface-hidden'>
     <Card
     type= {"youtube"}
     
     link = {"https://www.youtube.com/watch?v=Ti5vfu9arXQ"}
     title ={"Interview Prep"} />
     <Card
     type= {"youtube"}
     
     link = {"https://www.youtube.com/watch?v=L5SahFO2v1s"}
     title ={"Learn from it!"} />
      <CreateContentModal  open={modalOpen} onClose={() => {setModalOpen(false)}} ></CreateContentModal> 
     </div>
     </div>
    </div>
  )
}
// function ToggleWidth({small,large} : { small?:any, large?:any}) {
//   return (<>
// {small &&  <div className='flex  ml-72 justify-end gap-4' /> } 
// {large &&  <div className='flex   justify-end gap-4' /> }
//   </>)
// }



