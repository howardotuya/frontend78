import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  handleOnChange,
}: InputFieldProps) => {
  return (
    <input
      className="border border-[#D6D6D6] rounded-[6px] h-11 px-3 flex items-center w-full"
      type={type}
      placeholder={placeholder}
      value={value}
      required
      onChange={handleOnChange}
    />
  );
};

export default InputField;
