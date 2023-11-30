


const Showdate=(props)=>{


    let year= new Date()


return(

    <div>

        <h4
        
        style={{
            
            color:"Tomato",
            fontFamily:"san-sarf"

        }}
        >{props.getgreethingg}  User, Today Was   {props.days} _ Time: {year.toLocaleTimeString()} _ {year.getDate()} -{props.months1}-{year.getFullYear()}. {props.seasons}</h4>
    </div>

)
}

export default Showdate