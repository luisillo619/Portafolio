export default function ContactMe() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:top-24">
        Contacto
      </h3>

      <div className="flex flex-col space-y-10">
        <h4>
          <span className="underline decoration-[#F7AB0A]/50">
            Tengo justo lo que necesitas.{" "}
          </span>{" "}
          Hablemos.
        </h4>
        <div></div>
      </div>
    </div>
  );
}
