import Image from "next/image";

export function LiderancaFemCard({ image, nome, texto }: any) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-8 font-4 text-white text-center sm:text-start">
      <Image src={image} alt={nome}/>
      <div>
        <p className="text-xl">{nome}</p>
        <p>{texto}</p>
      </div>
    </div>
  );
}
