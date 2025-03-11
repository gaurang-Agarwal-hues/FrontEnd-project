import { ReactElement} from "react";

interface buttonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void; 
}
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",
}
const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";
    

export const Button = (props:buttonProps) => {
   return <button className= {`${variantStyles[props.variant]} ${defaultStyles}  ${props.onClick} `}  >
    {props.startIcon? <div className="flex"></div>:null} {props.text}
   </button>
}