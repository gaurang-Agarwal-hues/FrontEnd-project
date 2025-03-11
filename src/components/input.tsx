export function Input({onChange,placeholder}: {onChange?:()=>void, placeholder:any} ){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded-4xl m-2" onChange={onChange} ></input>
    </div>
} 