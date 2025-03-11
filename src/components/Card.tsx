import { AdditionIcon } from "../icons/addicon";


//@ts-ignore
export const Card = () => {
    return <div className='bg-white  max-w-86 p-8 rounded-lg border-1 border-slate-300'>
        <div className="flex justify-between">
            
            <div className="flex items-center">
           <div className="pl-1 text-gray-500">     
        <AdditionIcon />
        </div>
        <div className="pl-1">
        
        </div>
            </div>
            <div className="flex pl-2 text-gray-500 items-center">
                <div className="">
<AdditionIcon/>
</div>
<div className="">
<AdditionIcon/>
</div>
            </div>
        </div>
    </div>;

};
