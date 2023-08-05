import Image from "next/image";
import IconObj from "../../images/PageAgenda/objetivo.png";
import IconGenero from "../../images/PageAgenda/icon.png";
export function TextMain() {
  return (
    <div className="max-w-3xl mx-auto py-32">
      <div className="flex flex-col gap-2">
        <h2 className="text-7xl font-1 text-roxo-400">ODS E AGENDA</h2>
        <div className="h-1 w-80 bg-roxo-400"></div>
      </div>

      <p className="text-2xl text-azul-400 font-4 py-8 text-justify">
        Desde 2012, a Organização das Nações Unidas faz um esforço global para
        implementar nos governos, empresas e sociedade os 17 objetivos de
        Desenvolvimento Sustentável (ODS). instituídos pelo Organismo com a
        finalidade de acabar com a pobreza, proteger o meio ambiente e o clima,
        e garantir que as pessoas, em todos os lugares, possam desfrutar de paz
        e de prosperidade. Trata-se de uma iniciativa gigantesca e que pressupõe
        desafios em diversas áreas por parte dos países que assumem compromissos
        com a Agenda 2030 da ONU.
      </p>

      <Image src={IconObj} alt="Objetivos sustentaveis" />
      <p className="py-8 text-2xl text-roxo-600 text-justify">
        De acordo com o site da ONU Mulheres, a Agenda 2030 é um Plano de Ação
        que busca fortalecer a paz universal com mais liberdade e reconhece que
        a erradicação da pobreza em todas as suas formas e dimensões, incluindo
        a pobreza extrema, é o maior desafio global e um requisito indispensável
        para o desenvolvimento sustentável. São 17 ODS e 169 metas para
        erradicar a pobreza e promover vida digna para todos, dentro dos limites
        do planeta. Portanto. os ODS são o núcleo da Agenda e deverão ser
        alcançados até o ano 2030. Os Objetivos são integrados, indivisíveis e
        mesclam, de forma equilibrada, as três dimensões do desenvolvimento
        sustentável: a econômica, a social e a ambiental. São desafios e
        compromissos a serem superados e cumpridos pelos governos, sociedade
        civil, setor privado e por todos os cidadãos na jornada coletiva para um
        2030 sustentável.
      </p>

      <p className="text-2xl text-gray-600">
        Objetivo 5 - Igualdade ed Gênero: Alcançar a igualdade de gênero e
        empoderar todas as mulheres e meninas
      </p>

      <p className="text-xl pt-8">Metas do ODS N° 5</p>

      <div className="text-xl flex flex-col gap-8 py-4">
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <p className="px-8 py-4 bg-gray-200 text-gray-800">
            5.1- Acabar com todas as formas de discriminação contra todas as
            mulheres e meninas em todas as partes.
          </p>
        </div>
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <p className="px-8 py-4 bg-gray-200 text-gray-800">
            5.2- Eliminar todas as formas de violência contra todas as mulheres
            e meninas nasesferas públicas e privadas, incluindo otráfico e
            exploração sexual e de outros tipos.
          </p>
        </div>
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <p className="px-8 py-4 bg-gray-200 text-gray-800">
            5.3- Eliminar todas as práticas nocivas, como os casamentos
            prematuros, forçados e de crianças, e mutilações genitais femininas.
          </p>
        </div>
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <p className="px-8 py-4 bg-gray-200 text-gray-800">
            5.4- Reconhecer e valorizar o trabalho de assistência e doméstico
            não remunerado, por meio da disponibilização de serviços públicos,
            infraestrutura e políticas de proteção social, bem como a promoção
            da responsabilidade compartilhada dentro do lar e da família,
            conforme os contextos nacionais.
          </p>
        </div>
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <p className="px-8 py-4 bg-gray-200 text-gray-800">
            5.5-Garantir a participação plena e efetiva das mulheres e a
            igualdade de oportunidades para a liderança em todos os níveis de
            tomada de decisão navida política, econômica e pública.
          </p>
        </div>
        <div className="flex">
          <Image
            src={IconGenero}
            alt="Icone de Igualdade de Genero"
            className="w-32 h-fit"
          />
          <div className="flex flex-col gap-4">
            <p className="px-8 py-4 bg-gray-200 text-gray-800 ">
              5.6-Assegurar o acesso universal à saúde sexual e reprodutiva e os
              direitos reprodutivos, como acordado em conformidade com o
              Programa de Ação da Conferência Internacional sobre População e
              Desenvolvimento e com a Plataforma de Ação de Pequim e os
              documentos resultantes de Suas conferências de revisão.
            </p>
            <p className="px-8 py-4 bg-gray-200 text-gray-800 ">
              5.6 a- Empreender reformas para dar às mulheres direitos iguais
              aos recursos econômicos, bem como o acesso a propriedade e
              controle sobre a terra e outras formas de propriedade, serviços
              financeiros, herança e os Tecursos naturais, de acordo com as leis
              nacionais;
            </p>
            <p className="px-8 py-4 bg-gray-200 text-gray-800 ">
              5.6 b- Aumentar o uso de tecnologias de base, em particular as
              tecnologias de informação e comunicação, para promover o
              empoderamento das mulheres:
            </p>
            <p className="px-8 py-4 bg-gray-200 text-gray-800 ">
              5.6 c-Adotar e fortalecer políticas sólidas e legislação aplicável
              para a promoção da igualdade de gênero e o empoderamento de todas
              as mulheres e meninas, em todos os níveis.
            </p>
          </div>
        </div>
      </div>

      <p className="text-2xl text-gray-700 pt-8 text-justify">
        O Sistema Confea/Crea, ao se aliar aos compromissos de igualdade de
        gênero da Agenda 2030, busca ser um agente para se alcançar o objetivo
        de uma sociedade em que as mulheres tenham as mesmas oportunidades e
        direitos, incentivando o empoderamento das mulherespara garantir
        direitos e equidade até 2030.
      </p>
    </div>
  );
}
