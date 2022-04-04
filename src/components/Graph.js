import React from "react";
import {Bar} from 'react-chartjs-2'

function Graph(){
    const data={
        labels:['Pecera 1', 'Pecera 2', 'Pecera 3'],
        datasets:[{
            label:'Temperatura',
            backgroundColor: 'rgba (0, 255, 0 , 1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)',
            hoverBorderColor: '#FF0000',
            data:['22°C', '34°C', '28°C']

        }]
    }
    const options ={
        maintainAspectRatio: false,
        responsive: true
    }
    return(
        <div style={{width:'100%', height: '500px'}}>
            <h1>Grafica</h1>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default Graph