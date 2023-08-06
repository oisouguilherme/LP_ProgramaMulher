import Image from "next/image";

export function CardNoticia({ image, data, text }: any) {
  return (
    <div className="mt-32 grid md:grid-cols-2 gap-2 sm:gap-8 items-center">
      <div className="relative">
        <div className="absolute -top-7 -left-7 rounded-lg -z-10 sm:w-64 sm:h-64 border-4 border-[#590d90]" />
        <div className="border-4 border-roxo-600 sm:w-96">
          <Image src={image} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="text-lg sm:text-3xl font-4 text-[#590d90]">
        <p className="text-gray-700 text-lg sm:text-2xl">{data}</p>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
