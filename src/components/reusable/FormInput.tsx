import clsx from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import {
  UseControllerProps,
  useController,
} from "react-hook-form";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  disabled?: boolean;
  variant?: "short" | "medium" |"long";
}

interface IMultilineTextField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
  helperText?: string;
}

export const TextField = ({
  label,
  variant="long",
  ...props
}: UseControllerProps & ITextField) => {

  const { field, fieldState } = useController(props);

  return (
    <div className={clsx("",
      {
        "w-[343px] md:w-[486px]":
        variant== "long",
        "w-[282px]":
        variant== "medium",
        "w-[111px] md:w-[172px]":
        variant== "short",
      }
    )}
    >
      <p className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">
        {label}
      </p>

      <input
        // field: { onChange, onBlur, value, name, ref },
        {...field}
        {...props}
        className='inline-flex justify-start items-center gap-2 w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 text-base font-normal leading-normal appearance-none focus:bg-white focus:outline focus:outline-zinc-500 disabled:opacity-75 disabled:hover:cursor-not-allowed'
        />

      <p
        className={clsx("text-sm mt-[6px]", {
          "text-[#DA1E28]": fieldState.invalid,
        })}
      >
        {fieldState.error?.message}
      </p>
    </div>
  );
};

// Text Area
export const MultilineTextField = ({
  label,
  ...props
}: UseControllerProps & IMultilineTextField) => {

  const { field, fieldState } = useController(props);

  return (
    <div className='w-fit mb-3'
    >
      <p className="block text-sm mb-[6px] capitalize">
        {label}
      </p>
      <textarea
        // field: { onChange, onBlur, value, name, ref },
        {...field}
        {...props}
        rows={5}
        className='block w-[280px] md:w-[390px] rounded-[10px] appearance-none focus:bg-white focus:outline focus:outline-[#D9D9D9] bg-[#D9D9D9] mb-6 py-2 px-4'
      >
      </textarea>
      <p
        className={clsx("text-sm mt-[6px]", {
          "text-[#DA1E28]": fieldState.invalid,
        })}
      >
        {fieldState.error?.message}
      </p>
    </div>
  );
};
