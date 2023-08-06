import IconHora from "../../images/PageHome/Icons/relogio.png";
import IconPin from "../../images/PageHome/Icons/pin.png";
import IconDate from "../../images/PageHome/Icons/calendar.png";
import Image from "next/image";

export function DataHora() {
  return (
    <div className="bg-[url('/bgPontos.png')] bg-cover px-4">
      <div className="max-w-4xl mx-auto py-24">
        <div className="flex items-center">
          <div className="flex flex-col items-center px-4 md:px-12">
            <Image src={IconHora} alt="Hora" className="w-8" />
            <p className="sm:text-2xl text-white">18H</p>
          </div>
          <div className="px-4 md:px-12 border-l-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-2 text-white">
              ABERTURA <br /> DA 78º SOEA
            </h2>
            <div className="flex flex-wrap gap-8 md:gap-32 pt-4">
              <div className="flex items-center gap-4 text-white sm:text-xl md:text-2xl">
                <Image src={IconPin} alt="Localização" className="w-6" />
                <p>ExpoSoea</p>
              </div>
              <div className="flex items-center gap-4 text-white sm:text-xl md:text-2xl sm:border-l-2 sm:pl-8">
                <Image src={IconDate} alt="Data" className="w-6" />
                <p>8 DE AGOSTO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-12 sm:pt-24">
          <div className="flex flex-col items-center px-4 md:px-12">
            <Image src={IconHora} alt="Hora" className="w-8" />
            <p className="sm:text-2xl text-white text-center">
              14H <br /> - <br /> 18H
            </p>
          </div>
          <div className="px-4 md:px-12 border-l-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-2 text-white">
              PAINEL <br /> MULHER
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-32 pt-4">
              <div className="flex items-center gap-4 text-white sm:text-xl md:text-2xl">
                <Image src={IconPin} alt="Localização" className="w-6" />
                <p>Auditório Tordilho</p>
              </div>
              <div className="flex items-center gap-4 text-white sm:text-xl md:text-2xl sm:border-l-2 sm:pl-8">
                <Image src={IconDate} alt="Data" className="w-6" />
                <p>9 DE AGOSTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
