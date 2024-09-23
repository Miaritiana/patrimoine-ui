'use client'
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';

export function Chart() {
  const data: any[] = [
    { month: '07-10', A2: 10000 }, { month: '07-16', A2: -15000 },
    { month: '07-11', A2: 60000 }, { month: '07-17', A2: 20000 },
    { month: '07-12', A2: 40000 }, { month: '07-18', A2: 20000 },
    { month: '07-13', A2: 35000 }, { month: '07-19', A2: 90000 },
    { month: '07-14', A2: 30000 }, { month: '07-20', A2: 0 },
    { month: '07-15', A2: -20000 }, { month: '07-21', A2: 32 }
  ];
  const immobilisations: any[] = [
    { month: '07-10', A2: 10000 }, { month: '07-16', A2: -15000 },
    { month: '07-11', A2: 20000 }, { month: '07-17', A2: 47000 },
    { month: '07-12', A2: 40000 }, { month: '07-18', A2: 20000 },
    { month: '07-13', A2: 35000 }, { month: '07-19', A2: 80000 },
    { month: '07-14', A2: 50000 }, { month: '07-20', A2: 0 },
    { month: '07-15', A2: -10000 }, { month: '07-21', A2: 0 }
  ];
  const tooltip: TooltipSettingsModel = { enable: true, shared: false }
  const primarxyAxis: AxisModel = { valueType: 'Category' }
  const legendSettings: LegendSeriesModel = { visible: true }
  const marker = { dataLabel: { visible: true } };

  return (
    <>
      <ChartComponent id="charts" primaryXAxis={primarxyAxis} legendSettings={legendSettings}
        tooltip={tooltip}>
        <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='A2' name='A2' marker={marker} />
          <SeriesDirective dataSource={immobilisations} xName='month' yName='immobilisations' name='immobilisations' marker={marker} />
          <SeriesDirective dataSource={immobilisations} xName='month' yName='immobilisations' name='Tresorerie' marker={marker} />
          <SeriesDirective dataSource={immobilisations} xName='month' yName='immobilisations' name='Obligations' marker={marker} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  )
}