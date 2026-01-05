import { Check, X } from "lucide-react";

const FormStatus = ({ success, error }) => {
  if (success) {
    return (
      <p className="text-green-600 flex justify-center items-center gap-2 font-medium">
        <Check size={18} /> Form submitted successfully!
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 flex justify-center items-center gap-2 font-medium">
        <X size={18} /> {error}
      </p>
    );
  }

  return null;
};

export default FormStatus;
