import Link from "next/link";

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-md z-10 relative">
        <ul className="text-roxo-600 uppercase flex flex-col font-4 py-4">
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/noticias"}>Notícias</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/institucional"}>Institucional</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/objetivos"}>Objetivos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/agenda"}>ODS e Agenda</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/sistema"}>Mulheres no Sistema</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/desafios"}>Desafios Vencidos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/engenheiras"}>Engenheiras</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link onClick={onClose} href={"/glosario"}>Glossário</Link>
          </li>
        </ul>
        <button
          className=" text-black absolute top-4 right-6 text-xl"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
