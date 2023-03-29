import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import useContact from "@/hooks/useContact";
import Loader from "./Loader/Loader";
import { Link } from "@chakra-ui/react";
// La propiedad CSS "width: fit-content" se utiliza para establecer el ancho de un elemento de bloque de manera que se ajuste al tamaño de su contenido. se ajustará automáticamente para que sea lo suficientemente grande como para contener todo su contenido, sin importar cuánto sea este contenido.

const INITIAL_CONTACT = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const REGEX_TEXT = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateForm = (formContact) => {
  const errors = {};

  // name
  if (!formContact.name.trim()) {
    errors.name = "Debes ingresar tu nombre";
  } else if (!REGEX_TEXT.test(formContact.name.trim())) {
    errors.name =
      "Tu nombre debe ser un texto sin numeros ni caracteres especiales";
  } else if (formContact.name.trim().length > 30) {
    errors.name = "Tu nombre debe contar con menos de 30 caracteres";
  }

  // email
  if (!formContact.email.trim()) {
    errors.email = "Debes ingresar tu correo";
  } else if (!REGEX_EMAIL.test(formContact.email.trim())) {
    errors.email = "Debes ingresar un correo valido";
  } else if (formContact.email.trim().length > 40) {
    errors.email = "Tu correo debe contar con menos de 40 caracteres";
  }

  // subject:
  if (!formContact.subject.trim()) {
    errors.subject = "Debes ingresar un asunto";
  } else if (formContact.subject.trim().length > 50) {
    errors.subject = "El asunto debe contar con menos de 50 caracteres";
  }

  // message
  if (!formContact.message.trim()) {
    errors.message = "Debes ingresar un mensaje";
  } else if (formContact.message.trim().length > 500) {
    errors.message = "El mensaje debe contar con menos de 500 caracteres";
  }

  return errors;
};

export default function ContactMe() {
  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    isLoading,
    success,
    errors,
  } = useContact(INITIAL_CONTACT, validateForm);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[17px] text-gray-500 text-[15px] xs:text-2xl md:tracking-[20px]">
        Contactame
      </h3>

      <div className="flex flex-col space-y-10 max-h-[60%]">
       
        <h4 className="text-[20px] font-semibold text-center mx-24  w-[80%] self-center xs:w-[80%] md:text-[30px]">
          Tengo justo lo que necesitas.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Hablemos.</span>
        </h4>

        {/* className="space-y-10 w-96 self-center " */}
        <div className="space-y-4 w-auto self-center  md:space-y-8">
          <Link
            href="https://wa.me/525582482375"
            target="_blank"
            className="flex items-center space-x-5 justify-center"
          >
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
         
            <p className="text-1xl md:text-2xl">+52 5582482375</p>
          </Link>

          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrgzTsqpCggQwllGbGTQJcMRRRpQKQNMWppJPCtbdlJVgvpGJWvCpMPnFPcgrfQLWGBB"
            target="_blank"
            className="flex items-center space-x-5 justify-center "
          >
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
        
            <p className="text-[15px]  md:pr-0 md:text-[20px]">
              luiscarlosrangel619@gmail.com
            </p>
          </Link>
        </div>
        {/* width: fit-content" establece el ancho de un elemento en función de su contenido. */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto  "
        >
          <div className="flex space-x-2 w-[100%]">
            <input
              placeholder="Nombre"
              className="contactInput w-[6rem] flex-1 xs:w-[10rem] md:w-[15rem] lg:w-[18rem]"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              placeholder="Correo"
              className="contactInput w-[6rem] flex-1 xs:w-[10rem] md:w-[15rem] lg:w-[18rem]"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <input
            placeholder="Asunto"
            className="contactInput flex-1"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <textarea
            placeholder="Mensaje"
            className="contactInput flex-1"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            disabled={isLoading}
            className={
              isLoading
                ? "opacity-50 cursor-not-allowed bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
                : "bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg flex-1"
            }
          >
            Enviar
          </button>
        </form>
        <div className="flex flex-col text-center items-center relative">
          <Loader
            isLoading={isLoading ? "loading" : undefined}
            success={success}
          />
        </div>
      </div>
    </div>
  );
}
