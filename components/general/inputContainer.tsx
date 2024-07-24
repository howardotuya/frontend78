import React from "react";

const InputContainer = ({ label, children }: InputContainer) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[#3E301C] text-[14px] font-medium leading-5">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputContainer;
