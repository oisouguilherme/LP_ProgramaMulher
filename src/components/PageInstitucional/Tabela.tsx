import { LinhaTable } from "./LinhaTable";

export function Tabela() {
  return (
    <div className="bg-[url('/bgPontos.png')] bg-cover py-32">
      <div className="max-w-4xl mx-auto">
        <table className="w-full text-start text-lg font-4 text-white">
          <tr className="bg-azul-300">
            <th>Regiao</th>
            <th className="border-x-2 px-12">Crea</th>
            <th>Nome</th>
          </tr>

          <tr className="border-b">
            <td rowSpan={4}>Centro-Oeste</td>
            <td>CREA-DF</td>
            <td>Engenheira Civil Maria de Fátima Ribeiro Có</td>
          </tr>
          <LinhaTable
            crea="CREA-GO"
            nome="Engenheira Civil Camilla Ferreira dos Santos"
          />
          <LinhaTable
            crea="CREA-MS"
            nome="Engenheira Florestal Mariana do Amaral Amaral"
          />
          <LinhaTable
            crea="CREA-MT"
            nome="Engenheira Mecânica Priscila Bernardi Rockenbach"
          />

          <tr className="border-b">
            <td rowSpan={9}>NORDESTE</td>
            <td>CREA-AL</td>
            <td>Engenheira Civil Renilda Correia de Oliveira</td>
          </tr>
          <LinhaTable
            crea="CREA-BA"
            nome="Engenheira Civil Rute Carvalhal Borges"
          />
          <LinhaTable
            crea="CREA-CE"
            nome="Engenheira Agrônoma Maria Helena Araújo"
          />
          <LinhaTable
            crea="CREA-MA"
            nome="Engenheira Civil Luciana Soares Santos Jacinto"
          />
          <LinhaTable
            crea="CREA-PB"
            nome="Engenheira Civil Virginia Odete Cruz Barroca"
          />
          <LinhaTable
            crea="CREA-PE"
            nome="Engenheira Civil Eloisa Basto Amorim de Moraes"
          />
          <LinhaTable
            crea="CREA-PI"
            nome="Engenheira Agrônoma Teresinha de Jesus Alves Aguiar"
          />
          <LinhaTable
            crea="CREA-RN"
            nome="Engenheira Agrônoma Ermelinda Maria Mota Oliveira"
          />
          <LinhaTable
            crea="CREA-SE"
            nome="Engenheira Civil Isabella de Lima Veiga"
          />

          <tr className="border-b">
            <td rowSpan={7}>NORTE</td>
            <td>CREA-AC</td>
            <td>Engenheira Agrônoma Lya Januária Vasconcelos Beiruth Costa</td>
          </tr>
          <LinhaTable
            crea="CREA-AM"
            nome=" Engenheira de Pesca Alzira Miranda de Oliveira"
          />
          <LinhaTable
            crea="CREA-AP"
            nome="Engenheira Ambiental Pâmela Nunes Sá"
          />
          <LinhaTable
            crea="CREA-PA"
            nome="Engenheira Civil Adriana Falconeri R. Boy"
          />
          <LinhaTable
            crea="CREA-RO"
            nome="Engenheira Ambiental Andreá Sá de Menezes"
          />
          <LinhaTable
            crea="CREA-RR"
            nome="Engenheira Civil Ívina Etelvina da Silva Sanches"
          />
          <LinhaTable
            crea="CREA-TO"
            nome="Engenheiro Civil Daniel Iglesias de Carvalho"
          />

          <tr className="border-b">
            <td rowSpan={4}>SUDESTE</td>
            <td>CREA-ES</td>
            <td>Engenheira Civil Ariana Alves Vieira</td>
          </tr>
          <LinhaTable
            crea="CREA-MG"
            nome="Engenheira Civil Flávia Roxin Bretas"
          />
          <LinhaTable
            crea="CREA-RJ"
            nome="Engenheira Civil Carmen Lúcia Petraglia"
          />
          <LinhaTable
            crea="CREA-SP"
            nome="Engenheira Civil Poliana Aparecida de Siqueira"
          />

          <tr className="border-b">
            <td rowSpan={3}>SUL</td>
            <td>CREA-PR</td>
            <td>Engenheira Civil Karlize Posanske da Silva</td>
          </tr>
          <LinhaTable
            crea="CREA-RS"
            nome="Engenheira Agrônoma Elisabete Gabrielli"
          />
          <LinhaTable
            crea="CREA-SC"
            nome="Engenheira Civil Kamila Rodrigues da Silva"
          />
        </table>
      </div>
    </div>
  );
}
