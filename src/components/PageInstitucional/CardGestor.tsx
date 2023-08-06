import Image from "next/image";

export function CardGestor({ image, cargo, nome }: any) {
  return (
    <div className="flex items-center gap-2 sm:gap-8 sm:text-xl text-white font-4 max-w-xl">
      <Image src={image} alt={nome} className="w-24"/>
      <div>
        <p>{nome}</p>
        <p>{cargo}</p>
      </div>
    </div>
  );
}
