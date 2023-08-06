import Image from "next/image";

import ImageGenero from "../../images/PageHome/genero.png";
import { LinhaTableObjetivo } from "./LinhaTableObjetivo";

export function Tabela() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div>
        <div className="flex items-center">
          <h2 className="text-5xl sm:text-6xl font-1 text-roxo-400 w-fit">
            OBJETIVOS DO PROGRAMA MULHER
          </h2>
          <Image
            src={ImageGenero}
            alt="Imagem de Igualdade de Genero"
            className="w-32 hidden md:block"
          />
        </div>
        <div className="h-2 sm:w-80 bg-roxo-400 mt-2" />
      </div>

      <table className="my-12 w-full text-roxo-500 font-4 text-xs sm:text-base">
        <tr className="bg-azul-600 text-white">
          <th>OBJETIVOS</th>
          <th>COMO</th>
          <th>PARCEIROS</th>
        </tr>
        <LinhaTableObjetivo
          obj="Aprovar o dia 23 de junho como a data oficial do Sistema Confea/Crea da Mulher na Engenharia."
          como="Por meio do Calendário
          de Datas Comemorativas
          do Confea"
          parceiros="Confea"
        />
        <LinhaTableObjetivo
          obj="Ampliar e fortalecer as ações parlamentares na Bancada Feminina da Câmara dos Deputados e Senado."
          como="Por meio de ações
          parlamentares na Câmara e
          no Senado Federal."
          parceiros="Gerência de Relações
          Institucionais e Assessoria
          Parlamentar do Confea e dos
          Creas."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção de eventos e seminários com foco na mulher enquanto profissional do Sistema Confea/Crea."
          como="Por meio do Encontro
          das Mulheres do Sistema
          Confea/Crea que será
          realizado durante a Soea e o
          Encontro de Líderes."
          parceiros="Confea, Creas e entidades de
          classe."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção de eventos e seminários com foco na mulher enquanto profissional do Sistema Confea/Crea."
          como="Por meio de debates que
          deverão ser promovidos
          durante o Encontro das
          Mulheres do Sistema
          Confea/Crea que será
          realizado durante a Soea e o
          Encontro de Líderes."
          parceiros="Confea, Creas e entidades de
          classe."
        />
        <LinhaTableObjetivo
          obj="Atuar de forma a manter o Selo Equidade de Gênero do Confea, bem como fornecer diretrizes necessárias para que os Creas, que desejarem, possam aderir ao programa Pró-Equidade de Gênero e Raça da Secretaria Nacional de Políticas para Mulheres da Presidência da República."
          como="Por meio do Programa Pró-
          Equidade de Gênero e Raça
          da Secretaria Nacional de
          Políticas para Mulheres da
          Presidência da República."
          parceiros="Comitê Gestor do Programa"
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção anual de Encontros Nacionais das Mulheres do Sistema Confea/ Crea, que poderão ocorrer anualmente, e preferencialmente durante os eventos calendarizados do Confea, a exemplo do Encontro de Líderes do Sistema Confea/Crea e da Semana Oficial da Engenharia e da Agronomia."
          como="Por meio da Comissão
          Organizadora da Soea e do
          Encontro de Líderes."
          parceiros="Comissão Organizadora da
          Soea e do Encontro de Líderes
          e Comitê Gestor do Programa Mulher do Sistema Confea/

          Crea e Mútua."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção de encontro com as mulheres das entidades que compõem o Cden, uma vez que será de vital importância o debate com o intuito de sensibilizar sobre a raiz do problema das entidades que não indicam mulheres para os Conselhos. Esse encontro deverá ocorrer anualmente, e preferencialmente durante os eventos calendarizados do Confea, a exemplo do Encontro de Líderes do Sistema Confea/Crea e da Semana Oficial da Engenharia e da Agronomia."
          como="Por meio da Comissão
          Organizadora da Soea em
          conjunto com as Entidades
          Nacionais que compõem o
          Cden."
          parceiros="Membros da Comissão
          Organizadora da Soea, Comitê
          Gestor do Programa Mulher do
          Sistema Confea/Crea e Mútua,
          
          e Entidades Nacionais que
          compõem o Cden."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção anual do Encontro Nacional das Coordenadoras dos Comitês Mulheres dos Creas, de modo a promover debates e fornecer diretrizes para que todos os Creas, que tenham interesse, possam implantar o Comitê Mulher em seu respectivo regional."
          como="Por meio de convite
          enviado pelo Gabinete do
          Confea, convidando as
          Coordenadoras dos Comitês
          Mulheres existentes nos
          Creas."
          parceiros="Comitê Mulheres dos Creas,
          Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua, e Creas que
          desejarem implantar o Comitê
          Mulher em seu regional."
        />
        <LinhaTableObjetivo
          obj="Promover anualmente a manutenção do projeto Mapeamento da participação feminina dentro do Sistema Confea/Crea, por meio da atualização de dados enviados pelos Conselhos Regionais."
          como="Por meio de dados
          disponibilizados pelos Creas,
          referentes à composição
          do Plenário e das Câmaras
          Especializadas."
          parceiros="Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua, e Creas."
        />
        <LinhaTableObjetivo
          obj="Incentivar palestras sobre Equidade de Gênero na posse de Conselheiros Federais no Confea e na posse dos Conselheiros Regionais nos Creas."
          como="Por meio de palestrantes de
          referência no tema."
          parceiros="Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção de palestras nos Creas e nas entidades de classe sobre a Gestão doTempo da Mulher."
          como="Por meio de palestrantes de
          referência no tema."
          parceiros="Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua, Creas e
          entidades de classe."
        />
        <LinhaTableObjetivo
          obj="Incentivar a promoção de ações de combate ao machismo na política institucional do Confea, como trabalhar, entre as funcionárias e funcionários do Confea, o tema por meio de campanhas, promoção de diálogos e atividades sobre o tema."
          como="Por meio de palestras,
          cartilhas de orientação,
          dentre outros."
          parceiros="Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua, Recursos
          Humanos e Gerência de
          Comunicação e Marketing."
        />
        <LinhaTableObjetivo
          obj="Buscar o aumento de, no mínimo, 10% das taxas de participação das mulheres como Conselheiras nos Creas em relação a 2018."
          como="Por meio de campanha de
          sensibilização em relação ao
          tema Equidade de Gênero
          junto aos Creas e
          às entidades de classe."
          parceiros="Creas e Setor de Comunicação
          do Confea."
        />
        <LinhaTableObjetivo
          obj="Estimular a formulação e a difusão de dados e indicadores da participação da mulher dentro do Sistema Confea/Crea por meio do projeto Mapeamento Feminino dentro do Sistema Confea/Crea "
          como="Por meio da manutenção
          do projeto Mapeamento da
          Participação Feminina dentro
          do Sistema Confea/Crea"
          parceiros="Comitê Gestor do Programa
          Mulher do Sistema Confea/
          Crea e Mútua, e Creas."
        />
      </table>
    </div>
  );
}
