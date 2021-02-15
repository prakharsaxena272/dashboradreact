import React, { Component } from 'react';
import axios from "axios";
// import { useState, useEffect } from "react";
// import { Line , Bar , Pie , Doughnut} from "react-chartjs-2";
import Charts from './Charts';
// import ReactDOM from 'react-dom';
// import {Route, withRouter} from 'react-router-dom';
class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            sales: [],
            filters:{},
            filtered:[],
            name:[],
            salary:[],
            years:[2019,2020],
            year1:'',
            year2:'',
            currentEmployee:''
           
        };
        let abc=[];
    }
componentDidMount()
 {
    let salesman = [];
    let c={};
    let year=[];
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
        // console.log(res);
        for (const dataObj of res.data) {
            //salesman.push(parseInt(dataObj.salary));
            salesman.push((dataObj));
            c[dataObj.firstName]=false;
      
            //   if(year.indexOf(dataObj.year) === -1) {
            //     year.push(dataObj.year);
            //     console.log(year);
            // }
          }
          console.log("years"+ this.state.years);
        console.log(c);
        this.setState({
            sales: salesman,
            filters:c,
        });
    })
   
    .catch(err => {
        console.log(err);
      });
}



handleYearFilter= (e) => {
  
  // e.preventDefault();
  

  const {name, value, checked} = e.target;
  console.log("got click"+ value);

  let newData=[];
  let names=[];
  let sal=[]; 

  axios.get('http://localhost:8090/api/sales/year?start='+ value + '&end=' +value ,
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
    // console.log(res);
    for (const dataObj of res.data) {
        //salesman.push(parseInt(dataObj.salary));
        newData.push((dataObj));    
      }
      for (const dataObj of newData) {
        sal.push(parseInt(dataObj.amount));
        names.push((dataObj.salesman));
     
      }
    // console.log(newData);
    this.setState({
        filtered: newData,
        name:names,
        salary:sal,
        year1:value,
        year2:value

    });
    console.log(this.state.name);
})
.catch(err => {
    console.log(err);
  });
    }


getMonth= (num) =>{
  if(num==1)
  {
    return "January"
  }
  if(num==2)
  {
    return "Febuary"
  }
  if(num==3)
  {
    return "March"
  }
  if(num==4)
  {
    return "April"
  }
  if(num==5)
  {
    return "May"
  }
  if(num==6)
  {
    return "June"
  }
  if(num==7)
  {
    return "July"
  }
  if(num==8)
  {
    return "Aug"
  }
  if(num==9)
  {
    return "Sept"
  }
  if(num==10)
  {
    return "Oct"
  }
  if(num==11)
  {
    return "Nov"
  }
  if(num==12)
  {
    return "Dec"
  }
}
    
changeYear1 = (e)=>{
  this.setState(
    {year1:e.target.value}
  )
}
changeYear2 = (e)=>{
  this.setState(
    {year2:e.target.value}
  )
}

handleYearRange = (e)=>{
  e.preventDefault();
  let y1 = this.state.year1;
  let y2 =this.state.year2;

  let newData=[];
  let names=[];
  let sal=[]; 

  axios.get('http://localhost:8090/api/sales/year?start='+ y1 + '&end=' + y2 ,
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
    // console.log(res);
    for (const dataObj of res.data) {
        //salesman.push(parseInt(dataObj.salary));
        newData.push((dataObj));    
      }
      for (const dataObj of newData) {
        sal.push(parseInt(dataObj.amount));
        names.push((dataObj.salesman));
     
      }
    // console.log(newData);
    this.setState({
        filtered: newData,
        name:names,
        salary:sal

    });
    console.log(this.state.name);
})
.catch(err => {
    console.log(err);
  });

}
   

handleCheckbox = (e) => {
  
  e.preventDefault();
  

  const {name, value, checked} = e.target;
  console.log("got click"+ value);

  let newData=[];
  let names=[];
  let sal=[]; 
  let employee;

  axios.get('http://localhost:8090/api/sales/'+ value,
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
    // console.log(res);
    for (const dataObj of res.data) {
        //salesman.push(parseInt(dataObj.salary));
        newData.push((dataObj));    
        employee= dataObj.salesman ;
      }
      for (const dataObj of newData) {
        sal.push(parseInt(dataObj.amount));
        names.push(this.getMonth(parseInt(dataObj.month)));
     
      }
    // console.log(newData);
    this.setState({
        filtered: newData,
        name:names,
        salary:sal,
        currentEmployee:employee

    });
    console.log(this.state.currentEmployee);
})
.catch(err => {
    console.log(err);
  });
    }

    
render()
{
      let optionItems = this.state.sales.map((salesman) =>
    <input
    type="radio"
    id="filter" 
    onClick={this.handleCheckbox}
    name="filter"
    value={salesman.id}></input> 
    
);
let optionYears = this.state.years.map((year) =>
    // <table>
    //   <tr>
    // <td>
    <input
    
    type="radio"
    id="filter"
    onClick={this.handleYearFilter}
    name="filter"
    value={year}></input>
    // </td>
    /* <td>{year}</td>
      </tr>
    </table> */
);

//   let optionItems = this.state.sales.forEach( customer => {
   
//     return  <input type="checkbox"  onClick={this.display(customer)} />
// })
  // this.display();
  
  return (
  <div><div>Names
     {optionItems}</div>
     
       <div> Years
          
 {optionYears}
         
       </div>
       <div>

       </div>
       
       <div>
      <form onSubmit={this.handleYearRange}>
      <label>
          Start Year:
          <input type="number" name="year1" value={this.state.year1} onChange={this.changeYear1}></input>
          End Year:
          <input type="number" name="year2" value={this.state.year2} onChange={this.changeYear2}></input>
        </label>
        <input type="submit" value="Submit" onClick={this.handleYearRange}/>
      </form>     
       </div>
       <Charts number={this.state.salary} names={this.state.name} name={this.state.currentEmployee}></Charts>
       {/* <div> <Charts chrtData={this.state.filtered}/></div> */}
      </div>
      
  
  )
}
  

}









// // after component is finished
export default DropDown;
// ReactDOM.render(<DropDown/>, document.getElementById('react-search'));