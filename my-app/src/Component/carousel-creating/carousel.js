import { Component } from "react";

import "./carousel.css"



class Carousel extends Component{
    state={ 

        image: <img src="https://w0.peakpx.com/wallpaper/37/455/HD-wallpaper-led-drls-car-cars-hyundai-motor-nextgen-theme-tuning-verna.jpg" width={500} style={{marginLeft:0}} />,
        imagea:<img src="https://wallpapercave.com/wp/wp8294808.jpg" width={500} style={{marginLeft:300}} />,
        imageaa:<img src="https://www.drivespark.com/images/2020-03/hyundai-verna-exterior-6.jpg" width={500} style={{marginLeft:300}} />
        
    }

handleClick=()=>{

   this.setState({image: ! this.state.image })
}

    render(){
        return(

            <div id="carr">
            
            <span className="material-symbols-outlined" id="back" onClick={this.handleClick}>
       arrow_back_ios   {this.state.image ? this.state.imagea :this.state.imageaa }
</span>

<span className="material-symbols-outlined" id="for" onClick={this.handleClick} >
arrow_forward_ios  
</span>
           
            </div>


        )
    }

}

export default Carousel