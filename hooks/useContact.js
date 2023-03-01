import { useState } from "react";
import emailjs from '@emailjs/browser'
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
      
      setIsLoading(true);
      try {
        const res = await emailjs.sendForm(
          "service_5ighawm",
          "template_m3r2xpl",
          e.target,
          "Wh7NDcRMB14lr1_Ox"
        );
    
        setIsLoading(false);
        setSuccess(true);
       
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setSuccess(false);
        
      }finally{
        setTimeout(() => {
          setSuccess(null);
        }, 500);
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
