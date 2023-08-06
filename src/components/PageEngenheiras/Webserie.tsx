import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import BannerSerie from "../../images/PageEngenharia/banner.png";
import Video1 from "../../images/PageEngenharia/video1.png";
import Video2 from "../../images/PageEngenharia/video2.png";
import Video3 from "../../images/PageEngenharia/video3.png";

export function Webserie() {
  return (
    <div className="bg-[url('/bgSecond.png')] bg-cover">
      <div className="max-w-3xl mx-auto py-32 px-4">
        <div className="flex justify-between items-center text-white">
          <h2 className="text-4xl sm:text-7xl font-1">WEBSÉRIE</h2>
          <AiOutlineShareAlt size={24} />
        </div>

        <Image
          src={BannerSerie}
          alt="CLique aqui para reproduzir o video"
          className="py-12 sm:py-32 hover:scale-105 cursor-pointer duration-300"
        />

        <div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="relative">
              <Image
                src={Video1}
                alt="Assistir proximo video"
                className="w-full hover:scale-105 cursor-pointer duration-300"
              />
              <p className="text-white font-4 text-lg text-center pt-2">
                Próximo <span className="font-1">Episódio</span>
              </p>
            </div>

            <div className="relative">
              <Image
                src={Video2}
                alt="Assistir proximo video"
                className="w-full hover:scale-105 cursor-pointer duration-300"
              />
              <p className="text-white font-4 text-lg text-center pt-2">
                Próximo <span className="font-1">Episódio</span>
              </p>
            </div>

            <div className="relative">

              <Image
                src={Video3}
                alt="Assistir proximo video"
                className="w-full hover:scale-105 cursor-pointer duration-300"
              />
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
