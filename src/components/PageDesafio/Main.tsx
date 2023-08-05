import Title from "../../images/PageDesafios/title.png";
import Number1 from "../../images/PageDesafios/1.png";
import Number2 from "../../images/PageDesafios/2.png";
import Number3 from "../../images/PageDesafios/3.png";
import Number4 from "../../images/PageDesafios/4.png";
import Number5 from "../../images/PageDesafios/5.png";
import Number6 from "../../images/PageDesafios/6.png";
import Number7 from "../../images/PageDesafios/7.png";
import Number8 from "../../images/PageDesafios/8.png";
import Number9 from "../../images/PageDesafios/9.png";
import Image from "next/image";

export function Main() {
  return (
    <div className="max-w-3xl mx-auto py-32">
      <div className="flex flex-col gap-2 pb-12 uppercase text-7xl text-roxo-300 font-1">
        <h2>Desafios Vencidos</h2>
        <div className="h-1 w-96 bg-roxo-300"></div>
      </div>

      <div className="text-2xl font-4 text-roxo-400 space-y-12">
        <div className="flex gap-8 items-center">
          <Image src={Number1} alt="Numero 1" className="w-24 h-fit" />
          <p>
            Realização de campanhas institucionais voltadas para as mulheres no
            Sistema Confea/Crea e Mútua, como a campanha do Dia Internacional da
            Mulher;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number2} alt="Numero 2" className="w-24 h-fit" />
          <p>
            Estabelecimento de diretrizes para criação do Programa Mulher nos
            Regionais e implantação do Programa Mulher nos 27 Creas;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number3} alt="Numero 3" className="w-24 h-fit" />
          <p>
            Aprovação do Dia da Mulher na Engenharia (23/6) como data oficial do
            Sistema Confea/Crea;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number4} alt="Numero 4" className="w-24 h-fit" />
          <p>
            Recebimento do Selo do Programa Pró-Equidade de Gênero e Raça,
            concedido pelo Ministério da Mulher, Família e Direitos Humanos, ONU
            Mulheres e Organização Internacional do Trabalho (OIT);
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number5} alt="Numero 5" className="w-24 h-fit" />
          <p>
            O Programa Mulher marcou presença na Soea Connect com o painel:
            “Desafios e Oportunidades da Mulher Engenheira no Pós-Pandemia”;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number6} alt="Numero 6" className="w-24 h-fit" />
          <p>
            Incentivo à promoção do “Encontro com as mulheres das entidades que
            compõem o Cden”, realizado em 2021, no dia 23/06, Dia da Mulher na
            Engenharia;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number7} alt="Numero 7" className="w-24 h-fit" />
          <p>
            Organização e promoção do “Encontro Nacional das Coordenadorias
            Regionais do Programa Mulher do Sistema Confea/Crea”, durante o
            “Encontro de Líderes do Sistema Confea/Crea e Mútua”, em fevereiro
            de 2022;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number8} alt="Numero 8" className="w-24 h-fit" />
          <p>
            Promoção anual do projeto “Mapeamento da participação feminina
            dentro do Sistema Confea/Crea”, por meio da atualização de dados
            enviados pelos Conselhos Regionais;
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Image src={Number9} alt="Numero 9" className="w-24 h-fit" />
          <p>
            O Comitê Gestor tem incentivado os Creas a buscar o aumento das
            taxas de participação das mulheres como conselheiras, coordenadoras
            e diretoras nos Conselhos Regionais a cada ano
          </p>
        </div>
      </div>
    </div>
  );
}
