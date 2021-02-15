import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';

import ChartDataSource from 'chartjs-plugin-datasource';
Chart.plugins.register(ChartDataSource);

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                datasets: [
                    {
                    hoverBorderWidth:5,
                    hoverBorderColor:'black',
                    pointStyle: 'rect',
                    backgroundColor:'green'
                    //backgroundColor:Array.apply(null, Array(4)).map(_ => getRandomColor())
                    },
                    {
                    hoverBorderWidth:5,
                    hoverBorderColor:'black',
                    pointStyle: 'rect',
                    backgroundColor:'red'
                    //backgroundColor:Array.apply(null, Array(4)).map(_ => getRandomColor())
                    }

                ]
            }
        }
    }

    render() {
        const option = {
            title:{
                display:true,
                text: 'Test Chart',
                fontSize:23,
            },
            legend:{
                display:true,
                position:'top',
                labels:{
                    fontColor:'Black',
                    usePointStyle: true
                }
            },
            layout:{
                padding:{
                    left:0,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
            tooltips:{
                enabled:true
            },
            scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                        }
                    }]
            },

            plugins: {
                datasource: {
                url: 'sample.csv',
                //rowMapping: 'index'
                }
            }
        }

        return (
            <div className="Chart">
                <Bar
                    data={this.chartData}
                    options={option}
                    plugins={[ChartDataSource]}
                />
            </div>
        )
    }
}

export default Chart;