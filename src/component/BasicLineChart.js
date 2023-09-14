import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';
import { selectAugust, selectSeptember } from '../store/Food';



export const   BasicLineChart = () =>{


    const septemberOrder = useSelector(selectSeptember);
  
    const augustOrder = useSelector(selectAugust);

    const uData = [ 0, augustOrder.length, septemberOrder.length];

    const xLabels = [


      'July',
      'August',
      'September',
    
      
    ];


  return (
    <LineChart
      width={300}
      height={300}
      series={[
    
        { data: uData, label: 'Number of orders' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}