import { Button } from "./BotaoMenu/Button";
import { HeaderLink } from "./HeaderLink";
import { BiSearch } from "react-icons/bi";

import Image from "next/image";
import Logo from "../../images/PageHome/logo.png";

export function Header() {
  return (
    <>
      <div className="bg-[url('/bgMain.png')] bg-center">
        <div className="max-w-6xl mx-auto px-2 sm:px-8 text-white">
          <div className="flex justify-between items-center py-8">
            <Button />

            <Image src={Logo} alt="Logo Programa Mulher" />

            <div className="md:flex items-center gap-4 font-bold border-2 py-2 px-3 rounded-xl hidden ">
              <p>BUSCA</p>
              <BiSearch size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white hidden lg:block">
        <ul className="text-roxo-600 uppercase flex max-w-6xl mx-auto justify-between font-bold py-4">
          <HeaderLink link="/" page="Home" />
          <HeaderLink link="/noticias" page="Notícias" />
          <HeaderLink link="/institucional" page="Institucional" />
          <HeaderLink link="/objetivos" page="Objetivos" />
          <HeaderLink link="/agenda" page="ODS e Agenda" />
          <HeaderLink link="/sistema" page="Mulheres no Sistema" />
          <HeaderLink link="/desafios" page="Desafios Vencidos" />
          <HeaderLink link="/engenheiras" page="Engenheiras" />
          <HeaderLink link="/glosario" page="Glossário" />
        </ul>
      </div>
    </>
  );
}
