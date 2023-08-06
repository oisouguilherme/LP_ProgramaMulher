import { BaixeCompendio } from "@/components/PageHome/BaixeCompendio";
import { Banner } from "@/components/PageHome/Banner";
import { Calendario } from "@/components/PageHome/Calendario";
import { DataHora } from "@/components/PageHome/DataHora";
import { FaleComAGente } from "@/components/PageHome/FaleComAGente";
import { MulheresRegistradas } from "@/components/PageHome/MulheresRegistradas";
import { Noticias } from "@/components/PageHome/Noticias";


export default function Home() {
  return (
    <>
      <Banner/>
      <MulheresRegistradas/>
      <BaixeCompendio/>
      <Noticias/>
      <Calendario/>
      <br />
      <DataHora/>
      <FaleComAGente/>
    </>
  )
}
