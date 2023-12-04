import axios, { Axios } from "axios";
import { Component } from "react";
import Imagesapi from "./images";










class Apiprofile extends Component {


    state = {

        products: []

    }

    handleClick = () => {

        axios.get("https://fakestoreapi.com/products").then((items) => {

            return this.setState({

                products: items.data

            })

        })

    }

    render() {

        return (
            
            <> 
            
            <button onClick={this.handleClick}>Click here</button>

            <div style={{display:"grid", gridTemplateColumns:"30% 30% 30%" , gridGap:"50px" , marginLeft:"120px"}} >

                {
                    this.state.products.map((vall) => {

                        return (

                    
                            <div key={vall.id } > <br/><br/>
                                <div className="card" style={{ width: "23.5rem",border:"2px solid pink" , boxShadow:" 0  0  15px 2px black"}}>

<br/>
                                <center><h4 st>{` Product Id ${vall.id}`}</h4><br/>  <Imagesapi  Imageurl={vall.image}/></center><br/>
                                    <div className="card-body">
                                        <h5 className="card-title">{vall.category}</h5><br/>
                                        {/* <p className="card-text" style={{overflow:"scroll" , height:"100px"}}>
                                            {` description : ${vall.description}`}
                                        </p> */}

                                          <p >
                                            {`Rating : ${vall.rating.rate} ⭐`} <br/>
                                            {`Count :  ${vall.rating.count} 🔢`}
                                        </p>
                                        <h2>{` 🏷️ Price: ${vall.price} $`}</h2> <br/>
                                        <a href="#" className="btn btn-primary">
                                            see more
                                        </a>
                                    </div>
                                </div>

                            </div>
                          
                        )

                    })
                }


            </div>
            </>
        )
        
    }



}


export default Apiprofile