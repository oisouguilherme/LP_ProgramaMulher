import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import BannerSerie from "../../images/PageEngenharia/banner.png";
import Video1 from "../../images/PageEngenharia/video1.png";
import Video2 from "../../images/PageEngenharia/video2.png";
import Video3 from "../../images/PageEngenharia/video3.png";

import Play from "../../images/PageEngenharia/play.png";

export function Webserie() {
  return (
    <div className="bg-[url('/bgSecond.png')] bg-cover">
      <div className="max-w-3xl mx-auto py-32">
        <div className="flex justify-between items-center text-white">
          <h2 className="text-7xl font-1">WEBSÉRIE</h2>
          <AiOutlineShareAlt size={24} />
        </div>

        <Image
          src={BannerSerie}
          alt="CLique aqui para reproduzir o video"
          className="py-32"
        />

        <div>
          <div className="flex gap-8">
            <div className="relative">
              <Image
                src={Video1}
                alt="Assistir proximo video"
                className="w-full"
              />
              <div className="bg-roxo-600 w-16 h-16 flex items-center justify-center pl-2 rounded-full border absolute top-12 left-20">
                <Image src={Play} alt="Play de Video" />
              </div>
              <p className="text-white font-4 text-lg text-center pt-2">
                Próximo <span className="font-1">Episódio</span>
              </p>
            </div>

            <div className="relative">
              <Image
                src={Video1}
                alt="Assistir proximo video"
                className="w-full"
              />
              <div className="bg-roxo-600 w-16 h-16 flex items-center justify-center pl-2 rounded-full border absolute top-12 left-20">
                <Image src={Play} alt="Play de Video" />
              </div>
              <p className="text-white font-4 text-lg text-center pt-2">
                Próximo <span className="font-1">Episódio</span>
              </p>
            </div>

            <div className="relative">
              <Image
                src={Video1}
                alt="Assistir proximo video"
                className="w-full"
              />
              <div className="bg-roxo-600 w-16 h-16 flex items-center justify-center pl-2 rounded-full border absolute top-12 left-20">
                <Image src={Play} alt="Play de Video" />
              </div>
              <p className="text-white font-4 text-lg text-center pt-2">
                Próximo <span className="font-1">Episódio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
