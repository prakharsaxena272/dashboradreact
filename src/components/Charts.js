// import React, { useState, useEffect } from "react";
import {  Bar , Pie , Doughnut} from "react-chartjs-2";
import axios from "axios";
import React, { Component } from 'react';
// import DropDown from './dropdown';
class  Charts extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    } 
   
  }

 
//   let optionItems = props.array.map((salesman, index) =>
//  <li key={index}>{salesman.firstName}</li>
// );

 
  // for (const obj of props.array)
  // {
  //   // console.log("in child" +obj);
  // }


    componentDidMount()
    {
      let empSal = [];
      let empName = [];
   
    let count =0;
    // console.log("print"+ n);
  //   for (const obj of props.data)
  // {
  // console.log("in child" + obj.firstName);
  // }
    axios.get("http://localhost:8090/api/employees",
      {
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        proxy: {
        host: '127.0.0.1',
        port: 8090
        }
        }
      )
      
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.salary));
          empName.push((dataObj.firstName));
          count=count+1;
        }
        let rgb = [];
          
         
         
         for(var j = 0; j < count; j++){
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
          }
           rgb.push(color);

         }
        //  console.log(rgb); 
        if(this.props.names)
        this.setState({
          chartData: {
          labels: empName,
          datasets: [
            {
              label: "Landmark Bois ",
              data: empSal,
              backgroundColor: rgb,
              borderWidth: 4
            }
          ]
        }
        });
        
      })
      .catch(err => {
        console.log(err);
      });
    //console.log(empSal, empAge);
  }
  componentDidUpdate(prevProps){
    let rgb = [];
          
         if(prevProps.names!==this.props.names)
         {
          for(var j = 0; j <this.props.number.length; j++){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
             rgb.push(color);
       
           }
          //  console.log(rgb); 
         
           this.setState({
             chartData: {
             labels: this.props.names,
             datasets: [
               {
                 label: this.props.name,
                 data: this.props.number,
                 backgroundColor: rgb,
                 borderWidth: 4
               }
             ]
           }
           });
         }
         
   
  }

 render(){
  return (
    <div className="App" >
      <h1>Employee Data </h1>
      <div >
        {}
      </div>
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            title: { text: "Sale Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      <div>
        <Doughnut
          data={this.state.chartData}
          options={{
            responsive: true,
            title: { text: "Sales Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      <div>
        <Pie
          data={this.state.chartData}
          options={{
            responsive: true,
            title: { text: "Sales Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
   
    </div>
  );
}
}

export default Charts;