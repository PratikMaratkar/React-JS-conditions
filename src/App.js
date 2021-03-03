import React,{useState} from 'react';
import './pratik.css';


function App() {

const[my_condition,ChangeMyCondition]=useState(false)

let MyDiv = '';

const showMyDiv = () =>
{
  ChangeMyCondition(true);
}

const hideMyDiv = () =>
{
  ChangeMyCondition(false);
}

if(my_condition)
{
  MyDiv = (
    <div className="MyDiv">
      <h5>Current status : {my_condition}</h5>
    </div>
  )
}
else
{

}

  return (
   <div>
      <button className="myButton" onClick={showMyDiv}> Click here to show div</button>
      <button className="myButton" onClick={hideMyDiv}> Click here to hide div</button>
      {MyDiv}
   </div>
  );
}

export default App;
