import { LiderancaFemCard } from "./LiderancaFemCard";
import Conselheira1 from "../../images/PageSistema/Conselheiras/1.png";
import Conselheira2 from "../../images/PageSistema/Conselheiras/2.png";
import Conselheira3 from "../../images/PageSistema/Conselheiras/3.png";
import Conselheira4 from "../../images/PageSistema/Conselheiras/4.png";
import Conselheira5 from "../../images/PageSistema/Conselheiras/5.png";
import Conselheira6 from "../../images/PageSistema/Conselheiras/6.png";
import Conselheira7 from "../../images/PageSistema/Conselheiras/7.png";

export function LiderancaFem() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 sm:gap-12 text-xl font-4 text-justify text-white pb-12">
        <div>
          <h2 className="text-2xl font-1 pb-8">
            Lideranças femininas no Sistema na atualidade
          </h2>
          <p>a) Conselheiras Federais</p>
          <p>
            Em 2022, havia cinco conselheiras federais, sendo 2 titulares e três
            suplentes. O Plenário do Confea é constituído por um presidente e
            porl8conselheiros federais, de acordocoma Resolução nº 348, de
            27/10/1990, sendo sua composição renovada anualmente em um
          </p>
        </div>
        <div>
          <p>
            terço. Em 2022, o Plenário do Confea conta com a representação de
            duas conselheiras federais, a engenharia agrônoma Andréa Brondani da
            Rocha, representante do Rio Grande do Sul, e a engenheira mecânica
            Michele Costa Ramos, da Bahia, além de três conselheiras suplentes:
            a engenheira agrônoma Márcia Helena Laino, do Paraná, a geóloga
            Marjorie Csekô Nolasco, da Bahia, e a engenheira de pesca Alzira
            Miranda Oliveira, do Amazonas.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <LiderancaFemCard
          image={Conselheira1}
          nome="Conselheira Michele Costa Ramos (titular)"
          texto="Engenheira Mecânica e de Segurança do Trabalho. Vice-presidente da Associação Feminina de Engenharia, Agronomia e Geociências (Afeag-BA), foi membro do Conselho Diretor do Clube de Engenharia da Bahia (CEB) por dois mandatos e ex-diretora de Planejamento da Federação Nacional de Engenharia Mecânica e Industrial (Fenemi)."
        />
        <LiderancaFemCard
          image={Conselheira2}
          nome="Conselheira Andréa Brondani da Rocha (titular)"
          texto="Engenheira Agrônoma, especialista em Direito Ambiental Internacional com Mestrado
          em Fitotecnia. Doutorado em Fisiologia Vegetal e Pós-Doutorado em Fitopatologia e
          Bioquímica (Michigan State University, USA). Consultora técnica do Sindicato Nacional
          de Aviação Agrícola (Sindag), professora na Academia Brasileira de Tecnologia de
          Aplicação Aérea do Instituto Brasileiro da Aviação Agrícola (Ibravag).."
        />
        <LiderancaFemCard
          image={Conselheira3}
          nome="Conselheira Carmen Lúcia Petraglia"
          texto="Engenheira Civil, Sanitarista e Ambiental com pós em Planejamento Urbano e
          Regional. Foi diretora da Superintendência Estadual de Rios e Lagoas do Estado do Rio
          de Janeiro (Serla). Foi Presidente da Sociedade de Engenheiros e Arquitetos do Estado
          do Rio de Janeiro e de seu Centro Cultural (SEAERJ/CCSEAERJ) e da Associação
          Brasileira de Engenheiros Civil (Abenc-RJ) e assessora da Agência Reguladora de
          Energia e Saneamento Básico do Estado do Rio de Janeiro (Agenersa)."
        />
        <LiderancaFemCard
          image={Conselheira4}
          nome="Conselheira Alzira Miranda (suplente) (2019 a 2022)"
          texto="Engenheira de Pesca pela Universidade Federal do Amazonas. Mestrado em
          Biologia de Água Doce e Pesca Interior pelo Instituto Nacional de Pesquisas da
          Amazônia e doutorado em Biologia de Água Doce e Pesca Interior pelo Instituto
          Nacional de Pesquisas da Amazônia. Atualmente é avaliadora de cursos de
          graduação - Editora Abril, avaliadora de cursos de graduação do Instituto Nacional
          de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep)."
        />
        <LiderancaFemCard
          image={Conselheira5}
          nome="Conselheira Laline Garcia Gomes"
          texto="Engenheira Sanitarista e Ambiental pela Universidade Federal de Rondônia,
          Engenheira de Segurança do Trabalho e especialista em Engenharia Ambiental e
          Sanitária. Mestranda em Gestão e Regulação de Recursos Hídricos pelo Profágua.
          Vice-presidente do comitê de bacia hidrográfica dos rios alto e médio machado.
          Atua na área de meio ambiente com ênfase em saneamento básico."
        />
        <LiderancaFemCard
          image={Conselheira6}
          nome="Conselheira Márcia Helena Laino"
          texto="Engenheira Agrônoma, especialista em Manejo e Conservação de Solos e Água:
          Mestre em Políticas Públicas, com Formação em Análise Transacional, Formação em
          Coaching Executive e Empresarial, aposentada pelo Instituto de Inovação para o
          Desenvolvimento Rural Sustentável (Emater): Primeira mulher a chefiar a Regional da
          Secretaria Estadual da Agricultura e Abastecimento (Seab): Conselheira no Crea-PR
          onde foi diretora Administrativa e coordenadora do Comitê Mulheres."
        />
        <LiderancaFemCard
          image={Conselheira7}
          nome="Conselheira Marjorie Csekô Nolasco"
          texto="Geóloga, doutora em Geociências (Estratigrafia), e mestre em Geologia (Sedimentologia).
          Professora da Universidade Estadual de Feira de Santana (UEFS) na graduação e pós-
          graduação no Mestrado em Modelagem em Ciências da Terra e do Ambiente. Coordenou
          a Câmara de Geologia e Minas do Crea-BA e integrou a diretoria da Associação de
          Docentes da UEFS, da Sociedade Brasileira de Geologia - núcleo BA/SE e coordenou a
          Associação Brasileira de Defesa do Patrimônio Geológico e Mineiro (AgeoBRh).
          "
        />
      </div>
    </div>
  );
}
