import { Component } from "react";



class Map extends Component {
    state = [{
        name: " Mercedes-AMG GT Coupe Renderings",
        image: "https://cdn.motor1.com/images/mgl/g4AXYP/s1/2023-mercedes-amg-gt-coupe-renderings.jpg", 
        mobile: 9595959595,
        email: "benz@gmail.com"
    }, {
        name: "Mercedes-AMG GT Track Series",
        image: "https://www.motortrend.com/uploads/2022/05/2023-Mercedes-AMG-GT-Track-Series-45.jpg",
        mobile: 9595959595,
        email: "benz@gmail.com"
    }, {
        name: "Mercedes-AMG GT63 and GT63 ",
        image: "https://www.cnet.com/a/img/resize/a71f4d5185c8298c1a9f7d53e40756783a72a7c4/hub/2022/03/15/a536026e-9edc-44bf-ae96-fa7eae5cc9fb/2023-mercedes-amg-gt-63-gt-63-s-01.jpg?auto=webp&width=1200",
        mobile: 9595959595,
        email: "benz@gmail.com"
    }, {
        name: "Mercedes-AMG GT 63 S E",
        image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2023%2F3%2F3206325%2FAmg_GT_63_S_E_Performance_2_4161f2d94d.jpg&w=1920&q=75",
        mobile: 9595959595,
        email: "benz@gmail.com"
    }]
    render() {
        return (
            <>
                {
                    this.state.map((val, ind) => {
                        return (
                            <center>

                            <div key={this.state.ind}>
                                <h1>{val.name}</h1>


                                <img src={val.image} style={{width:"250px"}} ></img>
                                <h3>{val.mobile}</h3>
                                <h2>{val.email}</h2> <br/><br/><br/>

                            </div></center>
                        )
                    })
                }
            </>
        )
    }
}
export default Map