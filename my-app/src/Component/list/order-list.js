import { Component } from "react";
import Allitems from "./items";


class Orderlist extends Component {

    render() {
        return (

            <ol>
                <Allitems/>
            </ol>
        )
    }
}

export default Orderlist