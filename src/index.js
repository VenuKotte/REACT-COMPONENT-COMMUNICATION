import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


class Employee extends React.Component {
constructor(props){
  super(props)
  this.state ={
    Salary :  null
  }

}

getUpdatedSalary= (salary)=>{

this.setState({Salary : salary})
}


render(){
  
  return <div>

  <b>Employee Name : {this.props.Name}</b>
  <b>Employee Location : {this.props.Location}</b>

  <b>Employee Department : {this.props.Department}</b>
  
  <b> Updated Salary IS   <b>
             
               {this.state.Salary}
              
               </b>
               </b>
  <Department Salary={this.props.Salary} Exp ={this.props.Exp} BasicSalary={this.props.BasicSalary} HRA ={this.props.HRA} onSalaryChanged = {this.getUpdatedSalary}> </Department>

</div>
}

}
class Department extends React.Component { 

  constructor(props){
    super(props);
    this.state ={
      basic : this.props.BasicSalary,
      hra:this.props.HRA,
      exper : this.props.Exp
    }
  }

  updateSalaryDetails =()=>{

     var basicSalary  = parseInt(this.refs.basic.value);
     var hraSalary = parseInt(this.refs.hra.value);
     var exp = parseInt(this.refs.exp.value);

     this.props.onSalaryChanged( basicSalary + hraSalary + exp);

  }

  render(){
return <div>
            <p> BASIC Salary </p> : <b> <input type="text" ref="basic" defaultValue = {this.state.basic } ></input></b>
            <p> HRA Salary </p> : <b> <input type="text" ref="hra" defaultValue= {this.state.hra}></input></b>
          
            <p> Experience </p> : <b> <input type="text" ref="exp" defaultValue= {this.state.exper}></input></b>

           
            <button onClick={this.updateSalaryDetails}> Update
              </button>
  </div>

  }
}

const elemt = <Employee Name="Venu" Location ="Hyderabad" Department="IT" Salary="10000"
Exp="10"  BasicSalary="10000" HRA="5000"></Employee>

ReactDOM.render(elemt,document.getElementById('root'))


