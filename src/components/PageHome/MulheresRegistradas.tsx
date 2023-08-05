import Image from "next/image";
import ImageNumResgisto from "../../images/PageHome/mais200.png";

export function MulheresRegistradas() {
  return (
    <div className="flex justify-center items-center py-32 max-w-4xl mx-auto">
      <Image
        src={ImageNumResgisto}
        alt="Mais de 200.000 mulheres profissionais registradas"
        className="px-8"
      />
    </div>
  );
}
