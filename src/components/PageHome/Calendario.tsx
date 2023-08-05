import Image from 'next/image'
import ImageCalendario from '../../images/PageHome/calendar.png'

export function Calendario(){
  return(
    <div className="bg-[url('/bgPontos.png')] bg-cover">
      <div className='max-w-4xl mx-auto flex justify-center py-16'>
        <Image src={ImageCalendario} alt='Calendario'/>
      </div>
    </div>
  )
}