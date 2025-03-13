import { Input } from "../components/input";

export function SignUp() {
    return <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
        <div className="bg-white rounded-2xl border min-w-48 p-8">
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
            <div className="flex justify-center pt-4 pb-1">
            <button className="bg-purple-500 w-full justify-center text-white cursor-pointer px-4 py-2 rounded-md font-light flex items-center  transition delay-75 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110">SignUp</button>
            </div>
            </div>
    </div>
}