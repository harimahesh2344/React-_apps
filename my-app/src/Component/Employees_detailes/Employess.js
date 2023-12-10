import { Component } from "react";

import "./emplo.css"


class Employees extends Component {


    state = {
      Employees: [{
        id: 1,
        name: "karthik",
        salary: 35000,
        designation: "react"
    }, {
        id: 2,
        name: "lavan",
        salary: 36000,
        designation: "react"
    }, {
        id: 3,
        name: "saitez",
        salary: 34000,
        designation: "react"
    }, {
        id: 4,
        name: "deepthi",
        salary: 33000,
        designation: "angular"
    }, {
        id: 5,
        name: "akhil",
        salary: 37000,
        designation: "angular"
    }, {
        id: 6,
        name: "venu",
        salary: 32000,
        designation: "react"
    }, {
        id: 7,
        name: "mark",
        salary: 31000,
        designation: "angular"
    }, {
        id: 8,
        name: "harsha",
        salary: 30000,
        designation: "js"
    }, {
        id: 9,
        name: "ayesh",
        salary: 31500,
        designation: "js"
    }, {
        id: 10,
        name: "sai",
        salary: 32500,
        designation: "js"
    },




    ]   , data:[]}




    reactt=()=>{

    const    data = this.state.Employees.filter((value)=>{

            console.log(value);

            return  value.designation==="react" 

        })

        this.setState({

            data

        })
    }

    angular=()=>{

       const data=this.state.Employees.filter((ind)=>{

            return ind.designation==="angular"
        })


        this.setState({

            data
            
        })

    }
    js=()=>{

        
        const data=this.state.Employees.filter((ind)=>{

            return ind.designation==="js"
        })

        this.setState({
data

        })

    }
    
    all=()=>{

        const data=this.state.Employees.filter((ind)=>{

            return ind.designation
        })

     this.setState({

       data,
     })

    }

    

    render() {

        const b = this.state.data.length ? 

        this.state.data : this.state.Employees


        return (
          <>

            <table id="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>salary</th>
                    </tr>
                </thead>
        
        <tbody>
            {
                b.map((val)=>{

                  return      <tr  key={val.id}>
                            <td>{val.id}</td> 
                            <td>{val.name}</td> 
                            <td>{val.designation}</td> 
                            <td>{val.salary}</td> 
                            </tr>
                
                })
            }
            </tbody>
              </table> <br/>

              <button onClick={this.reactt}>React</button> &nbsp;&nbsp;
          <button onClick={this.angular}> angular </button>&nbsp;&nbsp;
          <button onClick={this.js} > js </button>&nbsp;&nbsp;
          <button onClick={this.all}> all </button> 
          </>
        )
      }
    }


export default Employees