import Image from "next/image";
import Link from "next/link";
import ImageGuerreira from "../../images/PageHome/bgWoman.png";
export function BaixeCompendio() {
  return (
    <div className="bg-[url('/bgPontos.png')] flex items-center bg-cover py-32 relative overflow-hidden">
      <div className="text-4xl sm:text-6xl xl:text-9xl text-white text-center flex flex-col items-center gap-4 md:w-1/2 md:pl-24">
        <h2 className="font-5">
          BAIXE O <span className="text-4xl sm:text-6xl xl:text-8xl">COMPENDIO</span>
        </h2>
        <Link
          href={""}
          className="text-3xl sm:text-5xl font-black text-[#590d90] bg-white px-12 py-1 font-2"
        >
          BAIXAR
        </Link>
      </div>
      <Image
        src={ImageGuerreira}
        alt="Imagem de uma mulher com roupa de guerreira"
        className="w-[360px] absolute top-0 right-0 hidden md:block"
      />
    </div>
  );
}
