import Image from "next/image";
import GraficoRepresentacao from "../../images/PageSistema/tabela1.png";
import GraficoRegional from "../../images/PageSistema/grafico2.png";
export function TabelaEGrafico() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-xl text-xl font-4 text-justify">
        <p className="text-azul-500 font-1">
          a) Representação: total de Inscritas por Estado
        </p>
        <p>
          Quanto à distribuição das profissionais por Jestado. identificou-se
          que São Paulo é o estado com mais mulheres inscritas no Sistema
          (46.855). Seguido de Minas Gerais (29.584) e do Rio de Maneiro
          (20.554).
        </p>
      </div>
      <Image
        src={GraficoRepresentacao}
        alt="Tabela mostrando a represetação de publico nos estados do Brasil"
        className="py-4"
      />

      <p className="max-w-xl text-xl py-8">
        b) Representação percentual de mulheres profissionais com registo ativo
        por Região:
      </p>
      <Image
        src={GraficoRegional}
        alt="28% Norte 22%, Centro Oeste, 22% Nordeste, 18% Sudeste e 20% Sul"
        className="py-4 px-4"
      />

      <div className="text-xl font-4 text-cinza-600 max-w-xl text-justify py-12">
        <p className="font-1 text-2xl pb-4">
          Histórico da atuação feminina no Sistema
        </p>
        <p className="text-azul-500 font-1">a) Conselheiras</p>
        <p>
          O pioneirismo feminino no Sistema está diretamente atrelado à
          eng,cv.Carmem Eleoniôra Amorim Soares que, em 1992, foi a primeira
          engenheira a tomar posse como conselheira federal no Confea aos 33
          anos. Desde então, outras mulheres se inspiraram na trajetória de
          Eleonôra e compuseram o plenário do Federal Confiram quem são:
        </p>
      </div>
    </div>
  );
}
