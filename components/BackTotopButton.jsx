import Link from "next/link";

const BackTotopButton = () => {
  return (
    <Link href="#hero">
      <button className="heroButton hidden md:inline-flex">Subir</button>
      <button className="heroButton md:hidden">icono</button>
    </Link>
  );
};

export default BackTotopButton;
