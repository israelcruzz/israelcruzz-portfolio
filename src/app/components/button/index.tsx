import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50 hover:shadow-button"
      {...rest}
    >
      {children}
    </button>
  );
};
