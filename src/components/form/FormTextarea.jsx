const FormTextarea = ({ name, value, onChange, rows, placeholder }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className="w-full p-3 border rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  );
};

export default FormTextarea;
