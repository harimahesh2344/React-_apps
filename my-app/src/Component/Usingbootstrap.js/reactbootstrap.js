
import React from "react"
import "./style.css"
import Showdate from "../greething-date/showdate"




const React_bootstrap = () => {


    function getdays(day){

        switch (day) {
            case 0:
                return "Sunday"
    
                case 1:
                    return "Monday"
    
                    case 2:
                        return "Tuesday"
    
                        case 3:
                            return "Wednesday"
    
                            case 4:
                                return "Thusday"
                    
                                case 5:
                                    return "Friday"
                                    case 6:
                                        return "Saturday"
            default:
                return "none"
               
        }
    }

    function getgreething(hours) {

        let getget

        if(hours>=0 && hours<=11.59){

            getget = "Good morning"
        }else if(hours>=12 && hours<=15.59){

            getget="Good afternoon"

        }else if(hours>=16 && hours<=19.59){

            getget="Good Evening"

        }else{
            getget="Good night"

        }
        return getget
        
    }


    
    function months(monthss){

        switch (monthss) {
            case 0:
                return "January"
    
                case 1:
                    return "February"
    
                 case 2:
                    return "March"
    
                 case 3:
                            return "April"
    
                            case 4:
                                return "May"
                    
                                case 5:
                                    return "June"
                                    case 6:
                                        return "July"
                                        case 7:
                                            return "August"
                            
                                            case 8:
                                                return "September"
                            
                                                case 9:
                                                    return "October"
                            
                                                    case 10:
                                                        return "November"
                                            
                                                        case 11:
                                                            return "December"

            default:
                return "none"
               
        }
    }


    function seasonn(season) {

        let sea

        if(season =="12" || season =="1"  || season =="2" ){

            sea = "Winter season ❄️"
        }else if(season =="6" || season =="7"  || season =="8"){

            sea="Summer season ☀️   "

        }else if(season =="9" || season =="10"  || season =="11"){

            sea="Rainy  season 🌧️  "

        }else if( season =="3" || season =="4"  || season =="5") {

           
            sea="Spring  season 🌱  "

        }
        return sea
        
    }

  
    return ( 

        <>

<nav>
<h3>Cars</h3>
<a href="">Home</a>
<a href="">Details</a>
<a href="">Special</a>
<a href="">contact</a>

<input  placeholder="Search here" /> &nbsp; &nbsp;
<button>Search</button>
</nav>
            <br /> <br />
        
                <center> <Showdate days={getdays(new Date().getDay()) } getgreethingg={getgreething(new Date().getHours())}  months1={months(new Date().getMonth())}  seasons= {seasonn(new Date().getMonth())}/></center>
           
          <br /> <br />


            <div id="greetings"></div>

            < div className="verna">


                <div className="card" style={{ width: "18rem" }}>
                    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Verna</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            See more
                        </a>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Audi A4</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                        See more
                        </a>
                    </div>
                </div>



                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-08.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BMW M Series</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                           See more
                        </a>
                    </div>
                </div>

            </div> <br /><br />



            < div className="verna">


                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://ca-times.brightspotcdn.com/dims4/default/dfaa910/2147483647/strip/true/crop/1688x1125+156+0/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F94%2Fac%2F181aabf69a536a3f5d9dffbf8938%2Fla-fy-hy-2016-mercedes-amg-gt-s-pictures-051" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Benz</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                           See more
                        </a>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://images.livemint.com/img/2020/10/04/600x338/Screenshot_(203)_1601833057006_1601833212534.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Thor</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                           See more
                        </a>
                    </div>
                </div>



                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Swift</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                           See more
                        </a>
                    </div>
                </div>

            </div> <br /><br /><br />


            <footer className="footer">
                <div className="Lavan1">
                    <div className="Lavan2">
                        <div className="lavan3">
                            <h3>About</h3>
                            <ul>
                                <li>
                                </li>
                                <li>
                                    <a href=""> contant us</a>
                                </li>
                                <li>
                                    <a href=""> press kit</a>
                                </li>
                                <li>
                                    <a href=""> blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lavan3">
                            <h3>For resturents</h3>
                            <ul>
                                <li>
                                    <a href="">partner with us</a>
                                </li>
                                <li>
                                    <a href="">
                                        apps for you
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lavan3">
                            <h3> Learn more</h3>
                            <ul>
                                <li>
                                    <a href="">privacy</a>
                                </li>
                                <li>
                                    <a href=""> security</a>
                                </li>
                                <li>
                                    <a href="">
                                        {" "}
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href=""> about us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lavan3">
                            <h3> follow us</h3>
                            <div className="social-links">
                                <a href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>






    )
}
export default React_bootstrap