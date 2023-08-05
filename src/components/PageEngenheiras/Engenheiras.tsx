import Group from '../../images/PageEngenharia/group.png'
import Eng from '../../images/PageEngenharia/Eng.png'
import Geo from '../../images/PageEngenharia/Geo.png'
import Agro from '../../images/PageEngenharia/Agro.png'
import Image from 'next/image'

export function Engenheira(){
  return(
    <div className='max-w-3xl mx-auto py-32'>
      <div className='pb-12'>
        <h2 className="text-7xl text-roxo-400 font-1"> ENGENHEIRAS</h2>
        <div className="w-96 h-1 bg-roxo-400"></div>
      </div>

      <div className='relative pt-12'>
        <Image src={Group} alt='Grupo de 3 profissões, agronoma, engenheira e geologa' className='w-full'/>
        <Image src={Agro} alt='Agro' className='absolute bottom-0 w-40'/>
        <Image src={Eng} alt='Eng' className='absolute bottom-0 left-[310px]  w-[145px]'/>
        <Image src={Geo} alt='Geo' className='absolute bottom-0 right-2 w-[145px]' />
      </div>

      <p className="text-2xl font-1 text-roxo-600 text-center pt-12">Confira nossa homenagem para as grandes mulheres da engenharia, agronomia e geociência:</p>
    </div>
  )
}