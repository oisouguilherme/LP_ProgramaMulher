import Image from "next/image";
import ImageBanner from '../../images/PageHome/banner.png'

export function Banner(){
  return(
    <div>
      <Image src={ImageBanner} alt="Lugar de Mulher é na engenharia - Clique para saber mais" className="w-full"/>
    </div>
  )
}