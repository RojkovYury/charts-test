import Box from '@mui/material/Box';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

interface ChartNDayRetentionProps {
}

export default function ChartNDayRetention({ }: ChartNDayRetentionProps) {

  const options: Highcharts.Options = {
    chart: {
      // type: 'spline',
    },
    title: {
      text: '',
    }, 
    series: [
      {
        type: 'line',
        color: '#FF9900',
        lineWidth: 2,
        marker: {
          enabled: false
        },
        data: [94, 87, 72, 75, 70, 54, 68, 71, 75, 82, 84, 87],
      },
    ],

    // действие при наведении на точку
    tooltip: {
      enabled: false,
      formatter: function() {
        return `
          <span class="custom-tooltip-line"></span>
          <div>Value: ${this.y}!</div>
          <span class="custom-tooltip-line"></span>
          <div>Value: ${this.y}!</div>
        `;
      }
    },

    // ось Y
    yAxis: {
      title: {
          text: null
      },
      crosshair: true, // вертикальная линия при наведении на значение
      min: 0,
      max: 100,
      labels: {
        format: '{value}%'
      },
      tickInterval: 25, 
      tickWidth: 0,
      gridLineWidth: 1,
    },

    // ось Х
    xAxis: {
      gridLineWidth: 1,
      gridLineColor: '#D3DCE8',
      crosshair: true, // не видно!!!
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
    },
    
    // отображение легенды графиков
    legend: {
      enabled: false,
      // align: 'left',
      // verticalAlign: 'top',
      // borderWidth: 0,
    },

    //
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          fillOpacity: 0,
          lineWidth: 1,
          lineColor: '#2C405B',
          radius: 0,
          // fillColor: '#2C405B',
          // height: 8,
        }
      }
    },


  };
  


  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </>
  );
}