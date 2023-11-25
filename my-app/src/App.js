
import Allitems from "./Component/list/items"
import Orderlist from "./Component/list/order-list"
import UnoderList from "./Component/list/unorder-list"
import Images from "./Component/images/images"
import Table from "./Component/tables/tableherder"


function hello(){

  return (

    <div>
      
      <UnoderList/>
      <Orderlist/>
      <Images/>
      <Table/>

    </div>
  )
}

export default hello