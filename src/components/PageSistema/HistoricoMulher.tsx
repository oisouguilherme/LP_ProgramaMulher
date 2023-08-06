import Image from "next/image";
import ImagemHistorico from "../../images/PageSistema/historicoMulheres.png";
import ImageLideranca1 from "../../images/PageSistema/lideranca.png";
import ImageLideranca2 from "../../images/PageSistema/lideranca2.png";

export function HistoricoMulher() {
  return (
    <div className="bg-[url('/bgSistema.png')] bg-cover">
      <div className="max-w-4xl mx-auto py-32">
        <div className="text-6xl text-white font-1 pb-12">
          <h2>HISTÓRIOCO DE MULHERES PRESIDENTES DE CREAS</h2>
          <p>(1994 - 2023)</p>
        </div>

        <Image
          src={ImagemHistorico}
          alt="Imagem do HISTÓRIOCO DE MULHERES PRESIDENTES DE CREAS"
          className="px-4"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-32">
        <Image
          src={ImageLideranca1}
          alt="Lideranças feminias no Sistema na atualidade"
        />
        <Image src={ImageLideranca2} alt="Imagem das conselheiras" />
      </div>
    </div>
  );
}
