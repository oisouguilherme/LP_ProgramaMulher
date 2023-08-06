import Image from "next/image";
import { TitlePrincipal } from "../Utils/TitlePrincipal";
import GraficoProfissionais from "../../images/PageSistema/grafico1.png";
import ImagemBg from "../../images/PageSistema/mulherSistema.png";
export function MulheresSistema() {
  return (
    <div className="relative">

      <Image
        src={ImagemBg}
        alt="Imagem de uma mulher engenheira"
        className="absolute top-52 right-0 w-[450px]"
      />

      <div className="max-w-4xl mx-auto py-32">
        <div>
          <TitlePrincipal title="MULHERES NO SISTEMA" />
          <div className="h-1 w-96 bg-roxo-300 mt-2" />
        </div>

        <div className="pt-12 space-y-8 text-2xl max-w-2xl text-justify text-cinza-600 font-4">
          <p>
            Entre as ações para alcançar os objetivos do Programa Mulher do
            Sistema Confea/Crea e Mútua está a de "Estimular a formulação e
            difusão de dados e indicadores da participação da mulher dentro do
            Sistema Confea/Crea", utilizando-se como ferramenta o projeto
            "Mapeamento Feminino dentro do Sistema Confea/Crea".
          </p>
          <p>
            O mapeamento aqui apresentado refere- se aos anos de 2020-2021-2022.
            Para o desenvolvimento. foram utilizadas as estatísticas do Confea,
            bem como os dados fornecidos pelos Creas sobre a ocupação efetiva de
            cargos dentro do Sistema, corno os de conselheiras, coordenadoras,
            diretoras e presidentes.
          </p>
          <p className="font-1">
            Comparativo entre homens e mulheres inscritos no Sistema:
          </p>
          <p>
            Conforme informado, o presente levantamento considera o número de
            profissionais ativos cadastrados no Sistema de Informações
            Confea/Crea (SIC) em dezembro de 2022. De um total de 1.072.490
            profissionais registrados, o número de mulheres era 210.849 (19,6%)
            e de homnes 861.641(80,2%).
          </p>
        </div>

        <Image
          src={GraficoProfissionais}
          alt="grafico mostrando a porcetagem de mulheres e homens registrados no sistema, sendo 210.849 mulheres e 861.641 homens."
          className="w-96 py-8"
        />
      </div>
    </div>
  );
}
