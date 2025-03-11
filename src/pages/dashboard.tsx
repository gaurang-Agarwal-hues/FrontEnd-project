import '../tailwind.css'
import { Card } from '../components/Card';
import {CreateContentModal}from '../components/createContentModal';
import { useState } from "react";
//import { Button } from './components/button';
//import { AddIcon } from './icons/crossIcon';
//import { ShareIcon } from './icons/share';
import { Sidebar } from '../components/sidebar';
//import { AddIcon } from './icons/crossIcon';
//import { AdditionIcon } from './icons/addicon';
export function Dashboard() {
  //this modal manipulation is the example of the controlled component upar set hota hai state aur child command deta neeche se that the state is changing
  const [modalOpen,setModalOpen] = useState(false);

  return (
    <>
    
     <Sidebar/>
     <div className="p-4 ml-72 bg-gray-300 min-h-screen border-2"> 
     
     <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false)}} ></CreateContentModal> 
      <div className='flex justify-end gap-4'>
       <button className="bg-purple-600 text-white cursor-pointer px-4 py-2 rounded-md font-light flex items-center  transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 "onClick={() => {setModalOpen(true)}}>Add Content</button>
    <button className='px-4 py-2 rounded-md font-light flex items-center bg-purple-200 text-purple-600 cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200'>Share Brain</button>
      </div>
     <Card/>
     
     </div>
    </>
  )
}


