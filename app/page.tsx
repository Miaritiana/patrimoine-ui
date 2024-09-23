import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'
import { Select } from "@/components/Select";
import { Checkbox } from "@/components/Checkbox";
import { InputDate } from "@/components/InputDate";
import { UserEntrance } from "@/features/ui/UserEntrance";
import { ImpossibleFlux } from "@/features/ImpossibleFlux";
import { DailyFlux } from "@/features/DailyFlux";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <>
      <div className="d-flex">
        <div className="col-5 p-5 bg-secondary" style={{height:"100vh"}}>
          <div className="mb-2">
            <UserEntrance/>
          </div>
          <div className="mb-1">
            <ImpossibleFlux/>
          </div>
          <div>
            <DailyFlux/>
          </div>
        </div>
        <div className="p-3 col-7">
          <Chart/>
        </div>
      </div>
    </>
  );
}
