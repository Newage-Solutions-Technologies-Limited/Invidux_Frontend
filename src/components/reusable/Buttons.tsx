import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import arrow from '../../assets/icons/arrow-right.svg'

import { twMerge } from "tailwind-merge";


interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  width?: string;
  children: React.ReactNode;
  disabled?: boolean
  success?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
  danger?: boolean;
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  variant?: "outlined" | "light";
}
export const Button = (props: IButton) => {
  const { children, fullWidth, disabled, success, danger, variant = "light" } = props;
  return (
    <button
      type='button'
      disabled={disabled}
      {...props}
      className={clsx(
        "flex justify-center items-center gap-2 px-8 py-4 rounded-lg capitalize cursor-pointer transition-all",
        {
          "w-full": fullWidth === true,
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-300":
            variant === "light",
          "bg-primary hover:bg-primary hover:cursor-not-allowed":
            variant === "light" && disabled,
          "bg-tertiary text-black hover:bg-secondary hover:text-white":
            variant === "outlined",
          "bg-tertiary text-black cursor-not-allowed hover:bg-white ":
            variant === "outlined" && disabled,
          "bg-secondary  text-white hover:bg-white hover:text-black ":
            variant === "light" && success,
            "bg-red-500  text-white hover:bg-secondary ":
            variant === "light" && danger,
        }
      )}
    >
      {children} <img src={arrow} alt="right-arrow" />
    </button>
  );
};


export const LoadingButton = ( props: LoadingButtonProps) => {
  const { children, success, outlined, loading = false, fullWidth, width, disabled, danger, textColor, btnColor = "bg-black"} = props;
  return (
    <button
      disabled = {disabled}
      type="submit"
      {...props}
      className={twMerge(
        `py-4 rounded-lg outline-none border-none flex justify-center mx-auto hover:bg-secondary`,
        `${btnColor} ${textColor} ${width} ${loading && "bg-[#ccc]"} ${disabled && "bg-green-300 hover:cursor-not-allowed hover:bg-[#ccc]"} ${success && "bg-secondary hover:bg-white hover:text-black"} 
        ${outlined && "text-black bg-white hover:bg-secondary hover:text-white"} ${fullWidth && "w-full md:w-full"} ${danger && "bg-red-500"}`
      )}
    >
      {loading ? (
        <div className="flex items-center">
        
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};