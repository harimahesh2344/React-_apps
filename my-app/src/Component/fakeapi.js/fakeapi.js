import axios, { Axios } from "axios";
import { Component } from "react";
import Imagesapi from "./images";
import { hover } from "@testing-library/user-event/dist/hover";
import "./api.css";


class Apiprofile extends Component {


    state = {

        products: [],
        totalPrice: 0,

    }

    componentDidMount = () => {

        axios.get("https://fakestoreapi.com/products").then((items) => {

            return this.setState({

                products: items.data,

             totalPrice: items.data.reduce((total, valuee) => {

                    return total + valuee.price

                },0)


            })

        }).catch((itemss)=> alert("something went wrong"))
    }






    handleclick = (id) => {

        
        const remove = this.state.products.filter((product) =>{

            return product.id !== id

        });
       
        this.setState({
            products: remove,
            totalPrice: remove.reduce((total, value) => {
            
            return total + value.price}, 0)
        });

    }

    render() {



        return (

            <> <br />

                <center><h3>Total price = {(this.state.totalPrice.toFixed(3) )}
                </h3></center><button onClick={() => this.setState({ products: [] })}>Remove All</button>

                <div style={{ display: "grid", gridTemplateColumns: "30% 30% 30%", gridGap: "50px", marginLeft: "120px" }} >

                    {
                        this.state.products.length>0 ?
                     this.state.products.map((vall) => {

                            return (

                                <div key={vall.id} > <br /><br />
                                    <div className="card" style={{ width: "23.5rem", border: "2px solid pink", boxShadow: " 0  0  15px 2px black" }}>

                                        <br />
                                        <center><h4 st>{` Product Id ${vall.id}`}</h4><br />  <Imagesapi Imageurl={vall.image} /></center><br />
                                        <div className="card-body">
                                            <h5 className="card-title">{vall.category}</h5><br />
                                           
                                            <p>
                                                {`Rating : ${vall.rating.rate} ⭐`} <br />
                                                {`Count :  ${vall.rating.count} 🔢`}
                                            </p>
                                            <h2>{` 🏷️ Price: ${vall.price} $`}</h2> <br />
                                            <button onClick={()=>{this.handleclick(vall.id)}} id="styles"> Remove </button>
                                        </div>
                                    </div>

                                </div>

                            )

                        }) 
                        : <div className="d-flex justify-content-center" id="spinner" >
                        <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span> 
                        
                        </div> &nbsp;&nbsp;&nbsp;
                        <span>Loading....</span>
                      </div>
                      
                    }


                </div>
            </>
        )

    }



}


export default Apiprofile