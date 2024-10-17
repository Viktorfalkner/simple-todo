import React from "react";

type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`h-[45px] bg-[#2b3847] hover:bg-[#182432] w-full text-white rounded-[5px] cursor-pointer ${
        buttonType == "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
