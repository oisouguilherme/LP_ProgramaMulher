import { CardGestor } from "./CardGestor";
import Gestor1 from "../../images/PageInstitucional/1.png";
import Gestor2 from "../../images/PageInstitucional/2.png";
import Gestor3 from "../../images/PageInstitucional/3.png";
import Gestor4 from "../../images/PageInstitucional/4.png";
import Gestor5 from "../../images/PageInstitucional/5.png";
import Gestor6 from "../../images/PageInstitucional/6.png";
import Gestor7 from "../../images/PageInstitucional/7.png";
import Gestor8 from "../../images/PageInstitucional/8.png";

export function ProgramaMulher() {
  return (
    <div className="bg-[url('/bgPontos.png')] bg-cover">
      <div className="max-w-4xl mx-auto py-32 px-4">
        <div className="text-white font-1 flex flex-col sm:flex-row justify-center items-center">
          <h2 className=" text-4xl sm:text-5xl md:text-6xl">Comitê Gestor do Programa Mulher</h2>
          <h2 className="text-5xl sm:text-6xl md:text-9xl">2023</h2>
        </div>

        <div className="py-12 space-y-8">
          <CardGestor
            image={Gestor8}
            nome="Presidente do Confea"
            cargo="Eng. Civ. Joel Kruger"
          />
          <CardGestor
            image={Gestor7}
            nome="Conselheira Federal representante do Plenário"
            cargo="Eng. Mec. Michele Costa Ramos"
          />
          <CardGestor
            image={Gestor6}
            nome="Gerente de Relacionamentos Institucionais"
            cargo="Eng. Amb. Renato Muzzolon Júnior"
          />
          <CardGestor
            image={Gestor5}
            nome="Representante do Colégio de Presidentes do Sistema Confea/Crea"
            cargo="Eng. Civ. Carmem Bastos Nardino"
          />
          <CardGestor
            image={Gestor4}
            nome="Representante das Coordenadorias de Câmaras Especializadas"
            cargo="Eng. Quim. Marino José Greco"
          />
          <CardGestor
            image={Gestor3}
            nome="Representante do Colégio de Entidades Nacionais"
            cargo="Eng. Amb. Liane de Moura Fernandes Costa"
          />
          <CardGestor
            image={Gestor2}
            nome="Assessora do Gabinete"
            cargo="Eng. Civ. Mariana Mayara de Souza Costa"
          />
          <CardGestor
            image={Gestor1}
            nome="Representante da Mútua"
            cargo="Eng. Civ. Karen Daniela Melo Miranda"
          />
        </div>
      </div>
    </div>
  );
}
