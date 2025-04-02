export function Input({placeholder, ref}: { placeholder:string , ref?:any} ){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded-4xl m-2" ref={ref} ></input>
    </div>
} 