import { CardGestor } from "./CardGestor";
import Gestor1 from "../../images/PageInstitucional/1.png";
export function ProgramaMulher() {
  return (
    <div className="bg-[url('/bgPontos.png')] bg-cover">
      <div className="max-w-4xl mx-auto py-32">
        <div className="text-white font-1 flex justify-center items-center">
          <h2 className="text-6xl">Comitê Gestor do Programa Mulher</h2>
          <h2 className="text-9xl">2023</h2>
        </div>

        <div className="py-12 space-y-4">
          <CardGestor
            image={Gestor1}
            nome="Presidente do Confea"
            cargo="Eng. Civ. Joel Kruger"
          />
          <CardGestor
            image={Gestor1}
            nome="Conselheira Federal representante do Plenário"
            cargo="Eng. Mec. Michele Costa Ramos"
          />
          <CardGestor
            image={Gestor1}
            nome="Gerente de Relacionamentos Institucionais"
            cargo="Eng. Amb. Renato Muzzolon Júnior"
          />
          <CardGestor
            image={Gestor1}
            nome="Representante do Colégio de Presidentes do Sistema Confea/Crea"
            cargo="Eng. Civ. Carmem Bastos Nardino"
          />
          <CardGestor
            image={Gestor1}
            nome="Representante das Coordenadorias de Câmaras Especializadas"
            cargo="Eng. Quim. Marino José Greco"
          />
          <CardGestor
            image={Gestor1}
            nome="Representante do Colégio de Entidades Nacionais"
            cargo="Eng. Amb. Liane de Moura Fernandes Costa"
          />
          <CardGestor
            image={Gestor1}
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
