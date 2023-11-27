
import { Profile } from "./profile-object";



const { id,title,price,description,category,image,rating }=Profile



function ProfileObjects() {
    return (
      <>
        {Profile.map((val, ind) => {
          return (
            <div key={ind}>
              <h3 >{val.id}</h3>
              <img src={val.image} width={100}/>
              <h3 >{val.title}</h3>
              <h3>{val.category}</h3>
              <p>{val.description}</p>
              <h3 >{`price ${val.price}`}</h3> <br/>
            
              
            </div>
          )
        })}
      </>
    )
  }
  export default ProfileObjects