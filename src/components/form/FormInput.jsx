import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ type = "text", name, value, onChange, placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    );
  }
);

export default FormInput;
