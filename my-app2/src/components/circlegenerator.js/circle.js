
// import { useState } from "react"
// import "./circle.css"








// const CircleGenerator =()=>{

//     const [array, setArray]=useState([]);

//     const [color, setColor]=useState("");

//     const redColor=()=>{

//         setColor( "red")


//     }
//     const blueColor =()=>{

//     setColor("blue")

//     }

//   const  handleclick=()=>{

//     setArray([...array, <div className="cic" style={{backgroundColor:color}} ></div>, <button onClick={redColor}>Red</button>  , <button onClick={blueColor}>blue</button>    ])

//     }


//     return (

//         <>
//         <button onClick={handleclick}>Generator Circle</button> <br/>
        
//  <h1>{array}</h1>



//  <div className="cic" style={{backgroundColor:color}} ></div> <button onClick={redColor}>Red</button>  <button onClick={blueColor}>blue</button> 
        
//         </>
//     )
// }

// export default CircleGenerator


import { useState } from "react";

const CricleUse = () => {
  const [circles, setCircles] = useState([]);

  const handleCircle = () => {
    const newCircle = {
        color:"#0F0F0F"
    };
    setCircles([...circles, newCircle]);
  };
  const handleColor = (index) => {
    const randomColor = "blue";
    setCircles((prevCircles) => {
      prevCircles[index].color = randomColor;
      return [...prevCircles];
    });
  };

  return (
    <div>
      {circles.map((circle, index) => (
        <div key={index}>
          <div
            className="w-24 h-24 border rounded-full"
            style={{ backgroundColor: circle.color }}
          ></div>
          <button onClick={() => handleColor(index)}>Change Color</button>
        </div>
      ))}
      <button onClick={handleCircle}>Click Here</button>
    </div>
  );
};

export default CricleUse;