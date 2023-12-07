
import Allitems from "./Component/list/items"
import Orderlist from "./Component/list/order-list"
import UnoderList from "./Component/list/unorder-list"
import Images from "./Component/images/images"
import Table from "./Component/tables/tableherder"
import Registerform from "./Component/registerform.js/register"
import ProfileObjects from "./Component/profile-components/profile"
import React_bootstrap from "./Component/Usingbootstrap.js/reactbootstrap"
import Buttons from "./Component/buttons/btn"
import Text from "./Component/table-text-componet/text"
import Showdate from "./Component/greething-date/showdate"
import Carousel from "./Component/carousel-creating/carousel"
import Map from "./Component/obj-map/map"
import Apiprofile from "./Component/fakeapi.js/fakeapi"
import Employees from "./Component/Employees_detailes/Employess"


function kk() {


  function getRandomColor() {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}



  return (

    <div>
{/* 
      <UnoderList/>
      <Orderlist/>
      <Images/>
      <Table/>
      <Registerform/>
      <ProfileObjects/> */}


       {/* cars web sites  */}



        {/* <React_bootstrap />  */}
    

      {/* buttons task */}



      {/* <Buttons type="Size 1"backgroundColor= {getRandomColor()} color={"white"} width="100px" height="50px" /> <br/>  <br/>
      <Buttons type="Size 2" backgroundColor={getRandomColor()}  color="white" width="150px" height="50px" /> <br/> <br/>
      <Buttons type="Size 3" backgroundColor={getRandomColor()}  color="white"  width="180px" height="50px"/> <br/> <br/>
      <Buttons type="Size 4" backgroundColor={getRandomColor()}  color="white" width="200px" height="50px"/> <br/> <br/>
      <Buttons type="Size 5" backgroundColor={getRandomColor()} color="white" width="220px" height="50px"/> <br/> <br/>
      <Buttons type="Size 6" backgroundColor={getRandomColor()} color="white" width="250px" height="50px"/> <br/> <br/>
      <Buttons type="Size 7" backgroundColor={getRandomColor()}  color="white" width="280px"height="50px"/> <br/> <br/>
      <Buttons type="Size 8" backgroundColor={getRandomColor()} color="white" width="300px"height="50px"/> <br/> <br/>
      <Buttons type="Size 9" backgroundColor={getRandomColor()}  color="white" width="320px" height="50px"/> <br/> <br/>
      <Buttons type="Size 10" backgroundColor={getRandomColor()}  color="white"width="350px"height="50px" />  <br/> <br/>
    
   */}


   {/* tables using jsxprop */}


   {/* <Text>
<p>Hai user how are you <h1>lavan</h1></p>

   </Text>  */}
   



   {/* Carousel  */}

   {/* <Carousel/>
    */}




{/* 
map */}

{/* <Map/> */}



{/* <Apiprofile/> */}

<Employees/>

    </div>
  )
}

export default kk