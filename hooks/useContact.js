import { useState } from "react";
import axios from "axios";

function useContact(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = () => {
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0) {
      const url = "https://formsubmit.co/luiscarlosrangel619@gmail.com";
  
      setIsLoading(true);
      try {
        const response = await axios.post(url, JSON.stringify(form), {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        setIsLoading(false);
        setSuccess(true);
  
        setTimeout(() => {
          setSuccess(null);
        }, 400);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setSuccess(false);
        setTimeout(() => {
          setSuccess(null);
        }, 400);
      }
    }
  };

  return {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    isLoading,
    success,
    errors,
  };
}

export default useContact;
