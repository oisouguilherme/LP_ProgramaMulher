import Image from "next/image";
import GrupoMulher from "../../images/PageEngenharia/grupoMulher.png";

export function Engenheira() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <div className="pb-12">
        <h2 className="text-4xl sm:text-7xl text-roxo-400 font-1"> ENGENHEIRAS</h2>
        <div className="sm:w-96 h-1 bg-roxo-400"></div>
      </div>

      <div className="pt-12">
        <Image src={GrupoMulher} alt="3 mulheres representando a Engenharia" />
      </div>

      <p className="sm:text-2xl font-1 text-roxo-600 text-center pt-12">
        Confira nossa homenagem para as grandes mulheres da engenharia,
        agronomia e geociência:
      </p>
    </div>
  );
}
