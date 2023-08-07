import Image from "next/image";
import IconGenero from "../../images/PageAgenda/icon.png";

export function CardMeta({ text }: any) {
  return (
    <div>
      <div className="flex gap-2 justify-center">
        <Image
          src={IconGenero}
          alt="Icone de Igualdade de Genero"
          className="w-12 sm:w-32 h-fit"
        />
        <p className="px-4 sm:px-8 py-4 sm:py-8 bg-gray-200 text-gray-800">
          {text}
        </p>
      </div>
    </div>
  );
}
