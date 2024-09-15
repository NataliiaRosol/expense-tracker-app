import Chart from 'react-apexcharts'

const options = {
  labels: ['Income', 'Expense'],
  colors: ['#0b48a4', '#e21515'],
  chart:{
    width : '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      }
    }
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expendOnClick: false,
      donut:{
        labels: {
          show: false
        }
      }
    }
  },  
  fill: {
    colors: ['#0b48a4', '#e21515'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000'
    }
  }
}
 

export default function TransactionChart({expense = 100, income = 200}){

  return <Chart 
    options={options}
    series={[income, expense]}
    type='pie'
    width={'100%'}
    height={'100%'}
  />
}