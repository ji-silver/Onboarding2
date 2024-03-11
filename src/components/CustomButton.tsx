import {MouseEventHandler, ReactNode} from "react";

interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    icon?: ReactNode;
}
const CustomButton = ({containerStyles, title, icon, handleClick}: CustomButtonProps) => {
    return (
        <button
            className={`${containerStyles}`}
            onClick={handleClick}
        >
            {icon && icon}
            <span className={`${textStyles}`}>{title}</span>
        </button>
    );
};

export default CustomButton;