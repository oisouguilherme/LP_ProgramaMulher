import Image from "next/image";

export function LiderancaFemCard({ image, nome, texto }: any) {
  return (
    <div className="flex items-center gap-8 font-4 text-white">
      <Image src={image} alt={nome} />
      <div>
        <p className="text-xl">{nome}</p>
        <p>{texto}</p>
      </div>
    </div>
  );
}
