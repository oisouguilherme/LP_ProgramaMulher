import Image from "next/image";
import ImageNoticia from "../../images/PageHome/notice1.png";
import ImageNoticia2 from "../../images/PageHome/notice2.png";
import ImageNoticia3 from "../../images/PageHome/notice3.png";
import ImageNoticia4 from "../../images/PageHome/notice4.png";

import Title from "../../images/PageHome/titleNotice.png";

export function Noticias() {
  return (
    <div className="max-w-4xl mx-auto py-24">
      <div className="w-fit flex flex-col gap-4">
        <Image src={Title} alt="Noticias" className="w-72" />
        <div className="h-1 bg-[url('/bgMain.png')] bg-center" />
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

      <div className="mt-32 grid grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -top-7 -left-7 rounded-lg -z-10 w-64 h-64 border-4 border-[#590d90]" />
          <Image src={ImageNoticia} alt="" className="w-96 object-cover" />
        </div>
        <div className="text-3xl font-4 text-[#590d90]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            exercitationem.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -top-7 -left-7 rounded-lg -z-10 w-64 h-64 border-4 border-[#590d90]" />
          <Image src={ImageNoticia3} alt="" className="w-96 object-cover" />
        </div>
        <div className="text-3xl font-4 text-[#590d90]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            exercitationem.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 items-center">
        <div className="relative">
          <div className="absolute -top-7 -left-7 rounded-lg -z-10 w-64 h-64 border-4 border-[#590d90]" />
          <Image src={ImageNoticia4} alt="" className="w-96 object-cover" />
        </div>
        <div className="text-3xl font-4 text-[#590d90]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
}
