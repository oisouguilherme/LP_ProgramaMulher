import Logo from "../../images/PageHome/logo.png";
import LogoParceiros from "../../images/PageHome/parceiro.png";
import Genero from "../../images/PageHome/genero.png";
import Desigual from "../../images/PageHome/desigual.png";

import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-[#590d90]">
      <div className="max-w-4xl mx-auto py-32 px-4">
        <div className="flex gap-4 justify-around items-center flex-wrap">
          <Image src={Logo} alt="" />
          <Image src={LogoParceiros} alt="" className="h-12 w-fit" />
          <Image src={Genero} alt="" className="h-12 w-fit" />
          <Image src={Desigual} alt="" className="h-12 w-fit" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8">
          <p className="font-5 text-2xl text-blue-600">SITE MÚTUA</p>
          <p className="font-5 text-2xl text-yellow-500">SITE CONFEA</p>
          <p className="font-5 text-2xl text-white">SITE ONU</p>
        </div>
      </div>
    </div>
  );
}
