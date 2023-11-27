
import Allitems from "./Component/list/items"
import Orderlist from "./Component/list/order-list"
import UnoderList from "./Component/list/unorder-list"
import Images from "./Component/images/images"
import Table from "./Component/tables/tableherder"
import Registerform from "./Component/registerform.js/register"
import ProfileObjects from "./Component/profile-components/profile"


function kk(){

  return (

    <div>
      
      <UnoderList/>
      <Orderlist/>
      <Images/>
      <Table/>
      <Registerform/>
      <ProfileObjects/>

    </div>
  )
}

export default kk