import Image from "next/image";
import ImageNoticia from "../../images/PageHome/notice1.png";
import ImageNoticia2 from "../../images/PageHome/notice2.png";
import ImageNoticia3 from "../../images/PageHome/notice3.png";
import ImageNoticia4 from "../../images/PageHome/notice4.png";

import { BiSearch } from "react-icons/bi";

import Title from "../../images/PageHome/titleNotice.png";
import { CardNoticia } from "../Utils/CardNoticia";

export function NoticiasMain() {
  return (
    <div className="max-w-4xl mx-auto py-24">
      <div className="flex justify-between">
        <div className="w-fit flex flex-col gap-4">
          <Image src={Title} alt="Noticias" className="w-72" />
          <div className="h-1 bg-[url('/bgMain.png')] bg-center" />
        </div>
        <div className="flex items-center gap-4 font-1 text-roxo-400 py-2 px-3 rounded-xl text-xl">
          <p>BUSCA</p>
          <BiSearch size={32} />
        </div>
      </div>

      <div className="mt-32 relative">
        <div className="w-[80%] h-full border-4 border-[#590d90] rounded-lg absolute -top-10 -left-10 -z-10 " />
        <div className=" bg-[#590d90]">
          <Image
            src={ImageNoticia4}
            alt="Imagem da noticia logo abaixo"
            className="w-full"
          />
          <p className="text=white px-12 py-8 text-white font-4 text-4xl">
            <span className="font-1">Programa Mulher</span> será apresentado nos
            Congressos Estaduais de Profissionais
          </p>
        </div>
      </div>

      <CardNoticia image={ImageNoticia} data="30 de março - 13h"/>
      <CardNoticia image={ImageNoticia2} data="30 de março - 13h"/>
      <CardNoticia image={ImageNoticia3} data="30 de março - 13h"/>
      <CardNoticia image={ImageNoticia4} data="30 de março - 13h"/>
      <CardNoticia image={ImageNoticia2} data="30 de março - 13h"/>
    </div>
  );
}
