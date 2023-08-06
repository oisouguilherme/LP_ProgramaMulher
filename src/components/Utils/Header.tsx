import { BiSearch } from "react-icons/bi";
import Logo from "../../images/PageHome/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./BotaoMenu/Button";

export function Header() {
  return (
    <>
      <div className="bg-[url('/bgMain.png')] bg-center">
        <div className="max-w-6xl mx-auto px-2 sm:px-8 text-white">
          <div className="flex justify-between items-center py-8">
            <Button/>

            <Image src={Logo} alt="Logo Programa Mulher" />

            <div className="md:flex items-center gap-4 font-bold border-2 py-2 px-3 rounded-xl hidden ">
              <p>BUSCA</p>
              <BiSearch size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white hidden lg:block">
        <ul className="text-[#450081] uppercase flex max-w-6xl mx-auto justify-between font-bold py-4">
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/noticias"}>Notícias</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/institucional"}>Institucional</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/objetivos"}>Objetivos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/agenda"}>ODS e Agenda</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/sistema"}>Mulheres no Sistema</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/desafios"}>Desafios Vencidos</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/engenheiras"}>Engenheiras</Link>
          </li>
          <li className="hover:text-[#ff00ff] cursor-pointer border-b border-white border-2 hover:border-b-[#ff00ff] hover:border-2 duration-200">
            <Link href={"/glosario"}>Glossário</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
