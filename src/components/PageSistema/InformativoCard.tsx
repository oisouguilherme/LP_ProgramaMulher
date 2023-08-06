import Image from "next/image";

export function InformativoCard({estado, profissao, nome, email, image}:any) {
  return (
    <div className="flex gap-4 items-center sm:w-96">
      <Image src={image} alt={nome} className="w-24"/>
      <div className="text-4">
        <p className="text-azul-500 font-1">Crea-{estado}</p>
        <p>{profissao}</p>
        <p>{nome}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
