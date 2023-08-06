import { Conselheiras } from "@/components/PageSistema/Conselheiras";
import { HistoricoMulher } from "@/components/PageSistema/HistoricoMulher";
import { Informativo } from "@/components/PageSistema/Informativo";
import { MulheresSistema } from "@/components/PageSistema/MulheresSistema";
import { TabelaEGrafico } from "@/components/PageSistema/TabelaEGrafico";

export default function Sistema(){
  return(
    <>
      <MulheresSistema/>
      <TabelaEGrafico/>
      <Conselheiras/>
      <HistoricoMulher/>
      <Informativo/>
    </>
  )
}