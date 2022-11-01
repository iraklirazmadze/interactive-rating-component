import React from "react";



const Votes = ({numb,setNumb}) =>{
const votes=[1,2,3,4,5];
const handleClick = (index) =>{
    let number = index+1;

    setNumb(number)
    
}
    return(
        votes.map((vote,index) =>
            <div style={numb == index+1 ? {backgroundColor: "#7C8798", color:'white'}: null} className="votes" key={index} onClick={() => handleClick(index)}>{vote}</div>
        )
    )
}

export default Votes;