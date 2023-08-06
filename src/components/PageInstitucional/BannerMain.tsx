import Image from "next/image";
import Mulheres from "../../images/PageInstitucional/womans.png";

export function BannerMain() {
  return (
    <div className="bg-[url('/bgInstitucional.png')] bg-cover relative">
      <div className="absolute w-full h-full bg-[url('/bgOpaco.png')] bg-cover opacity-20 z-10" />

      <div className="max-w-4xl mx-auto z-20">
        <Image
          src={Mulheres}
          alt="3 mulheres representando o mercado de trabalho feminino"
          className=""
        />
      </div>
    </div>
  );
}
