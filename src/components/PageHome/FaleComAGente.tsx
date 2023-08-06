import { TitlePrincipal } from "../Utils/TitlePrincipal";

export function FaleComAGente() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <TitlePrincipal title="FALE COM A GENTE!"/>
      <p className=" text-2xl sm:text-4xl font-4 text-[#590d90] py-8">
        Envie-nos uma mensagem e entraremos em contato com você em breve.
      </p>

      <form className="w-full text-lg sm:text-2xl flex flex-col gap-8">
        <label>
          <p className="font-1 text-[#590d90] pb-2">E-Mail:</p>
          <input
            type="email"
            placeholder="exemplo: email@exemplo.com"
            className="bg-[#8c66d8] placeholder-white px-4 sm:px-12 py-2 w-full"
          />
        </label>
        <label>
          <p className="font-1 text-[#590d90] pb-2">Assunto:</p>
          <input
            type="text"
            placeholder="Programa mulher"
            className="bg-[#8c66d8] placeholder-white px-4 sm:px-12 py-2 w-full"
          />
        </label>
        <label>
          <p className="font-1 text-[#590d90] pb-2">Sua Mensagem:</p>
          <textarea
            placeholder="Insira seu texto"
            className="bg-[#8c66d8] placeholder-white px-4 sm:px-12 py-8 w-full h-64"
          />
        </label>
      </form>
    </div>
  );
}
