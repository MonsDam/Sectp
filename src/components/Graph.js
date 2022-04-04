import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function Graph(){
    const data={
        labels:['Pecera 1', 'Pecera 2', 'Pecera 3'],
        datasets:[{
            label:'Temperatura',
            backgroundColor: 'rgba(0, 255, 0 , 0.5)',
            //backgroundColor: 'rgba(255, 99, 132, 0.5)',

            //borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)',
            hoverBorderColor: '#FF0000',
            data:[22, 34, 28]

        }]
    }
    const options ={
        maintainAspectRatio: true,
        responsive: true
    }
    return(
        <div 
        style={{width:'100%', height: '500px'}}>
        
            <h1>Grafica</h1>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default Graph