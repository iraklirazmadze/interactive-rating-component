
import { useState } from "react";
import iconStar from "./images/icon-star.svg"
import Votes from "./Votes";
import thankImg from "./images/illustration-thank-you.svg"
function App() {

const [numb,setNumb] = useState();
const [submit,setSubmit] = useState(false);

const submition =() =>{
  if(numb != undefined){
   setSubmit(!submit);
  }
}

  return (
    <>
   <div className="mainContainer" style={submit ? {display:"none"}:{display:"flex"}}>
    <div className="iconDiv"><img src={iconStar}></img></div>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div className="votesDiv">
      <Votes numb={numb} setNumb={setNumb}/>
    </div>
    <button onClick={submition}>SUBMIT</button>
   </div>

  <div className="mainContainer" style={!submit ? {display:"none"}:{display:"flex", alignItems:"center"}}>
    <img src={thankImg}></img>
    <div className="thank-result"><p style={{color:"rgba(252, 118, 20, 1)"}}>you selected {numb} out of 5</p></div>
    <h1 style={{}}>Thank you</h1>
    <p style={{textAlign:"center",marginTop:'10px'}}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
  </div>
   </>
   
  );
}

export default App;
