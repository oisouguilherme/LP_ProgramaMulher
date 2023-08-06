import { BannerMain } from "@/components/PageInstitucional/BannerMain";
import { CordenadoraText } from "@/components/PageInstitucional/CordenadoraText";
import { InstitucionalMain } from "@/components/PageInstitucional/InstitucionalMain";
import { ProgramaMulher } from "@/components/PageInstitucional/ProgramaMulher";
import { Tabela } from "@/components/PageInstitucional/Tabela";


export default function Institucional(){
  return(
    <>
    <BannerMain/>
    <InstitucionalMain/>
    <ProgramaMulher/>
    <CordenadoraText/>
    <Tabela/>
    </>
  )
}