import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";


type ButtonsProps =  PropsWithChildren<{
    disabled?: boolean,
    onClick?: () => void,
    to?: string,
    variant?: "primary" | "secondary" | "tertiary" | "small" | "large",
}>
export function Button({ disabled, to, variant="primary", onClick, children}: ButtonsProps) {

    const baseClass= "flex justify-center items-center gap-2 bg-gray-950 rounded transition-all duration-500 "
    const primaryClass=  baseClass + " bg-green-500 hover:bg-green-700 text-gray-100 font-normal py-2 px-4"
    const secondaryClass= baseClass + " border border-1-gray-900 hover:bg-green-700 text-sm py-1 px-2"
    const tertiaryClass= baseClass + " bg-white hover:bg-green-700 text-gray-100 text-stone-900 hover:text-gray-100 font-normal py-2 px-4"

    if(variant === "primary"){
        return (
            <button disabled={disabled} className={primaryClass}>
                {children}
            </button>
        );
    }
    if(variant === "secondary"){
        return (
            <button disabled={disabled} className={secondaryClass}>
                {children}
            </button>
        );
    }
    if(variant === "tertiary"){
        return (
            <button disabled={disabled} className={tertiaryClass}>
                {children}
            </button>
        );
    }


    if(to) {
        return (
            <Link  to={to} className={variant}>
                {children}
            </Link>
        );
    }
    if (onClick){
        return (
            <button onClick={onClick} disabled={disabled} className={variant}>
                {children}
            </button>
        );
    }

    return (
        <button disabled={disabled} className={variant}>
            {children}
        </button>
    );
}
