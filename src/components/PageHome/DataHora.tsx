import IconHora from "../../images/PageHome/Icons/relogio.png";
import IconPin from "../../images/PageHome/Icons/pin.png";
import IconDate from "../../images/PageHome/Icons/calendar.png";
import Image from "next/image";

export function DataHora() {
  return (
    <div className="bg-[url('/bgPontos.png')] bg-cover">
      <div className="max-w-4xl mx-auto py-24">
        <div className="flex items-center">
          <div className="flex flex-col items-center px-12">
            <Image src={IconHora} alt="Hora" className="w-8" />
            <p className="text-2xl text-white">18H</p>
          </div>
          <div className="px-12 border-l-4">
            <h2 className="text-7xl font-2 text-white">
              ABERTURA <br /> DA 78º SOEA
            </h2>
            <div className="flex gap-32 pt-4">
              <div className="flex items-center gap-4 text-white text-2xl">
                <Image src={IconPin} alt="Localização" className="w-6" />
                <p>ExpoSoea</p>
              </div>
              <div className="flex items-center gap-4 text-white text-2xl border-l-2 pl-8">
                <Image src={IconDate} alt="Data" className="w-6" />
                <p>8 DE AGOSTO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-24">
          <div className="flex flex-col items-center px-12">
            <Image src={IconHora} alt="Hora" className="w-8" />
            <p className="text-2xl text-white text-center">
              14H <br /> - <br /> 18H
            </p>
          </div>
          <div className="px-12 border-l-4">
            <h2 className="text-7xl font-2 text-white">
              PAINEL <br /> MULHER
            </h2>
            <div className="flex gap-12 pt-4">
              <div className="flex items-center gap-4 text-white text-2xl">
                <Image src={IconPin} alt="Localização" className="w-6" />
                <p>Auditório Tordilho</p>
              </div>
              <div className="flex items-center gap-4 text-white text-2xl border-l-2 pl-8">
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
