import Image from "next/image";
import Link from "next/link";
import ImageGuerreira from "../../images/PageHome/bgWoman.png";
export function BaixeCompendio() {
  return (
    <div className="bg-[url('/bgPontos.png')] flex items-center bg-cover py-44 relative overflow-hidden">
      <div className="text-9xl text-white text-center flex flex-col items-center gap-4 w-1/2 pl-24">
        <h2 className="font-5">
          BAIXE O <span className="text-8xl">COMPENDIO</span>
        </h2>
        <Link
          href={""}
          className="text-5xl font-black text-[#590d90] bg-white px-12 py-1 font-2"
        >
          BAIXAR
        </Link>
      </div>
      <Image
        src={ImageGuerreira}
        alt="Imagem de uma mulher com roupa de guerreira"
        className="w-[440px] absolute top-0 right-0"
      />
    </div>
  );
}
