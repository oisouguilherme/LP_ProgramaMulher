import Image from "next/image";
import Grafico3 from "../../images/PageSistema/grafico3.png";
import { InformativoCard } from "./InformativoCard";

import ImagePresidente1 from "../../images/PageSistema/PresidentesCreas/presidente1.png";
import ImagePresidente2 from "../../images/PageSistema/PresidentesCreas/presidente2.png";
import ImagePresidente3 from "../../images/PageSistema/PresidentesCreas/presidente3.png";
import ImagePresidente4 from "../../images/PageSistema/PresidentesCreas/presidente4.png";
import ImagePresidente5 from "../../images/PageSistema/PresidentesCreas/presidente5.png";
import ImagePresidente6 from "../../images/PageSistema/PresidentesCreas/presidente6.png";
import ImagePresidente7 from "../../images/PageSistema/PresidentesCreas/presidente7.png";

import GraficoTabela from "../../images/PageSistema/gaficoETabala.png";
import Grafico4 from "../../images/PageSistema/grafico4.png";

import BgMulher from "../../images/PageSistema/mulherSistema2.png";

export function Informativo() {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto py-32">
        <Image
          src={Grafico3}
          alt="Grafico de conselherias nos Creas por Regiao"
          className="px-4"
        />

        <div className="pt-12 text-xl text-cinza-600 font-4 space-y-4 max-w-xl text-justify">
          <Image
            src={BgMulher}
            alt="Mulher no background engenheira"
            className="absolute -z-10 right-0 w-96"
          />
          <p className="text-azul-500 font-1">c) Presidente de Creas</p>
          <p>
            Já em 2022 o Sistema Confea/Creas tinha sete mulheres na presidência
            dos Conselhos Regionais, o que representa 27,78% do total de Creas.
          </p>
          <p>
            Em termos de distribuição geográfica. duas presidentes são da Região
            Centro-Oeste: uma do Distrito Federal. a eng. civ. Maria de Fátima
            Ribeiro Có, e uma do Mato Grosso do Sul. a eng. aagrim. Vânia Abreu
            de Mello. A Região Nordeste tem dois estados com Creas presididos
            por mulheres: Alagoas e Rio Grande do Norte, com a gestão da eng.
            civ. Rosa Maria Barros Tenório, e eng. civ. Ana Adalgisa Dias
            Paulino, respectivamente. Na Região Norte, o Crea-AC é presidido
            pela eng. iv. Carmem Bastos Nardino, e o Crea-PA presidido pela eng.
            civ. Adriana Falconeri. Na Região Sul. o Crea-RS é liderado pela
            eng. amb. Nanci Cristiane Josina Walter.
          </p>
          <p>
            Durante muito tempo. a participação da mulher no Sistema Confea/Crea
            e Mútua espelhou o que se observava em termos de registros ativos no
            Sistema. Porém, mos últimos anos se verifica o incremento constante
            no número de mulheres na Engenharia, Agronomia e Geociências. E,
            como um todo, a representatividade das mulheres no Confea deve ser
            incentivada e refletida nas instâncias organizacionais do Sistema.
            Nesse sentido, o Programa Mulher é como um catalisador para a
            participação de mulheres em toda a estrutura do Sistema € para os
            avanços no mercado de trabalho. “A seguir. o quadro das atuais
            presidentes dos Creas:
          </p>
        </div>

        <div className="flex flex-wrap justify-between space-y-8 py-12">
          <InformativoCard
            image={ImagePresidente1}
            estado="AC"
            profissao="Eng. Civ."
            nome="Carmen Bastos Nardino"
            email="gabinete@creaac.org.br"
          />
          <InformativoCard
            image={ImagePresidente5}
            estado="RS"
            profissao="Eng. Amb."
            nome="Nandi Cristiane Josina Walter"
            email="presidente@crea-rs.org.br"
          />
          <InformativoCard
            image={ImagePresidente2}
            estado="AL"
            profissao="Eng. Civ."
            nome="Rosa Maria Barros Tenório"
            email="presidente@crea-al.org.br"
          />
          <InformativoCard
            image={ImagePresidente6}
            estado="RN"
            profissao="Eng. Civ."
            nome="Ana Adalgisa Dias Paulino"
            email="gabinete@crea-m.org.br"
          />
          <InformativoCard
            image={ImagePresidente3}
            estado="PA"
            profissao="Eng. Civ."
            nome="Adriana FAlconeri"
            email="presidencia@creapa.org.br"
          />
          <InformativoCard
            image={ImagePresidente7}
            estado="MS"
            profissao="Eng. Agrim."
            nome="Vânia Abreu de Mello"
            email="creams@creams.org.br"
          />
          <InformativoCard
            image={ImagePresidente4}
            estado="DF"
            profissao="Eng. Civ."
            nome="Maria de Fátima Ribeiro Có"
            email="precidencia@creadf.org.br"
          />
        </div>

        <div className="px-4 py-12 space-y-12">
          <Image
            src={GraficoTabela}
            alt="22.96 dos cordenadores do Creas são ocupadas por mulheres"
          />
          <Image
            src={Grafico4}
            alt="Mulheres em cargo de Coordenação de Câmaras Especializadas por Região."
          />
        </div>
      </div>
    </div>
  );
}
