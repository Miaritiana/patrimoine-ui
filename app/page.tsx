import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'
import { Select } from "@/components/Select";
import { Checkbox } from "@/components/Checkbox";
import { InputDate } from "@/components/InputDate";
import { UserEntrance } from "@/features/ui/UserEntrance";
import { ImpossibleFlux } from "@/features/ImpossibleFlux";
import { DailyFlux } from "@/features/DailyFlux";

export default function Home() {
  return (
    <>
      <UserEntrance/>
      <ImpossibleFlux/>
      <DailyFlux/>
    </>
  );
}
