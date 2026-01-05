const FormSelect = ({ name, value, onChange, options }) => {
  return (
    <select
      name={name}
      value={value || ""}
      onChange={onChange}
      className="w-full p-3 border rounded-lg bg-white
                 focus:outline-none focus:ring-2 focus:ring-pink-500"
    >
      <option value="">Select Required Service</option>

      {options.map((service, index) => (
        <option key={index} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
