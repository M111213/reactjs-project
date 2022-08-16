import React, { SyntheticEvent } from 'react';
import {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';
import { urlToHttpOptions } from 'url';


/*function favcolor(){
  const [color, setColor] = useState("red");

  return(
    <>
    <h1>My favourite color is {color}.</h1>
    <button type='button' onClick={() => setColor("blue")}>blue</button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<favcolor/>);*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact manager</h1>
        <input type="text" id="var"></input>
        <button>Submit</button>
      </header>
    
    </div>
  );
}
export default App;*/


async function get(){
 try{
  const response = await fetch('https://google.com');
console.log(response);
 } catch(e){}

}


function Contact(){
  const [name, setName] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | undefined>();
  const [existingName, newName] = useState<string[]>([]);
  const [rawInput, setRawInput] = useState("");
  const display = (event: SyntheticEvent) =>{
    event.preventDefault();
    setName(prevState=> [...prevState, rawInput])
    setRawInput(" ");
  }

  return(
  <form onSubmit={display}>
    <div className="App">
      <header className="App-header">
        <h1>Contact manager</h1>
          <input type="text"  value={rawInput} onChange={(e) => setRawInput(e.target.value)}></input>
        <button>Submit</button>
        <h4>Contact List</h4>
        {
        name !== []  && name.map(item =>    
          
          <p style={{
            background: ('background' == item) ? 'green' : 'black',
            color: "#FFFFFF",
          }} onClick={() =>{ 
            setSelected(item); 
            setRawInput(item)}}>{item}</p>)
      }

      </header>
    </div>
  </form>
  )

}

export default Contact;
export {Contact};
