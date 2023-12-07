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
    }



    ]}


    reactt=()=>{

        this.setState({

            Employees : this.state.Employees.filter((value)=>{

                console.log(value);

                return  value.designation==="react" 

            })

        })
    }

    angular=()=>{

        this.setState({

            Employees:this.state.Employees.filter((ind)=>{

                return ind.designation==="angular"
            })

        })

    }
    js=()=>{

        this.setState({

            Employees:this.state.Employees.filter((ind)=>{

                return ind.designation==="js"
            })

        })

    }
    
    all=()=>{

     this.setState({

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
        }
    
        ]

     })

    }

    




    render() {
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
                this.state.Employees.map((val)=>{

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