import React from 'react';
import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

const [fNo, setfNo] = useState(0);

const [sNo, setsNo] = useState(0);



const addValue = () => {
Axios.post("http://localhost:3001/create", {
   fNo: fNo,
       sNo: sNo
      }).then(()=> {
        console.log("Success");
      });
};

const printPrime =() => {
  var isprime;
  var p=0;
  var primes = [];
  for(var i=fNo; i<=sNo; i++){
    isprime=1;

    for(var j=2; j<=i/2; j++){
      if(i%j ==0){
        isprime=0;
        break;
      }
    }
      if(isprime==1){
        primes[p]=i;
        p+=1;
      }

  }
   document.write(primes);
}

 

 
  return (
    <div className="App">
    <div className="information">
     
      <label>Firstno:</label>
      <input type="number" 
      onChange={(event) => {
        setfNo(event.target.value);
      }} />
      
      <label>Secondno:</label>
      <input type="number" 
      onChange={(event) => {
        setsNo(event.target.value);
      }}/>
      <button onClick={addValue}>Add To Database</button>
      <button onClick={printPrime}>Print Primes</button>

      <h5>primes</h5>

     </div> 
     <hr></hr>
     <hr></hr>
     <hr></hr>

     

    </div>
  );
}

export default App;
