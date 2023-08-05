import Image from "next/image";

export function CardNoticia({image, data}:any) {
  return (
    <div className="mt-32 grid grid-cols-2 items-center">
      <div className="relative">
        <div className="absolute -top-7 -left-7 rounded-lg -z-10 w-64 h-64 border-4 border-[#590d90]" />
        <div className="border-4 border-roxo-600 w-96">
          <Image src={image} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="text-3xl font-4 text-[#590d90]">
        <p className="text-gray-700 text-2xl">{data}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          exercitationem.
        </p>
      </div>
    </div>
  );
}
