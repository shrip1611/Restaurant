import axios from "axios";
import { useState, useEffect, useRef, useReducer } from "react";
import { formReducer, initialState } from "./useFormReducer";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormStatus from "./FormStatus";

const ContactForm = () => {
  const nameRef = useRef(null);

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    service: "", // ✅ MUST be empty string
  });

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      setServices(["Catering", "Event Booking", "Home Delivery"]);
    }, 800);

    // nameRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // ✅ works for select
    });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.service)
      return "All fields are required";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Invalid email address";

    if (!/^\d{10}$/.test(formData.phone))
      return "Phone must be 10 digits";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      dispatch({ type: "SUBMIT_ERROR", payload: errorMsg });
      return;
    }

    try {
      dispatch({ type: "SUBMIT_START" });

      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

      dispatch({ type: "SUBMIT_SUCCESS" });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    } catch {
      dispatch({
        type: "SUBMIT_ERROR",
        payload: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-2">
        Contact / Catering Request
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Fill the form and we will get back to you
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          ref={nameRef}
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <FormInput
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <FormSelect
          name="service"              // ✅ CRITICAL
          value={formData.service}
          onChange={handleChange}
          options={services}
        />

        <FormTextarea
          name="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <FormStatus success={state.success} error={state.error} />

        <button
          type="submit"
          disabled={state.loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            state.loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {state.loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
