import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import Logo from "../../images/PageHome/logo.png";
import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <>
      <div className="bg-[url('/bgMain.png')] bg-center">
        <div className="max-w-6xl mx-auto px-8 text-white">
          <div className="flex justify-between items-center py-8">
            <button className="flex items-center gap-4 font-bold border-2 py-2 px-3 rounded-xl">
              <GiHamburgerMenu size={32} /> MENU
            </button>

            <Image src={Logo} alt="Logo Programa Mulher" />

            <div className="flex items-center gap-4 font-bold border-2 py-2 px-3 rounded-xl">
              <p>BUSCA</p>
              <BiSearch size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <ul className="text-[#450081] uppercase flex max-w-6xl mx-auto justify-between font-bold py-4">
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/noticias"}>Notícias</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Institucional</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Objetivos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/agenda"}>ODS e Agenda</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Mulheres no Sistema</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/desafios"}>Desafios Vencidos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Engenheiras</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/glosario"}>Glossário</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
