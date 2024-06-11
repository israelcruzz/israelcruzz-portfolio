import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg"
    />
  );
};
