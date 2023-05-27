import { useRef,useEffect, useState } from 'react';
import { Element } from './utils/Constants';
import './App.css'
function App() {
   const gridRef = useRef()
   const [classListName , setClassListName] = useState()  
   const [count,setCount] = useState(0)
  const RandomFunc = ()=>{
    return Math.round(Math.random()*9+1);
  }

 
  setTimeout(()=>{
    setClassListName(RandomFunc())
  },500)  
    
 

  const handlerClick = (item)=>{
    if(classListName ==  item.target.id){
      setCount(p=>++p);
    }
    console.log(item.target);
  }

  return (
    <div className="App">
       <div className="scores-container">
      <div className="total-score">
        <h2>Your Score:</h2>
        <h2 id="score">{count}</h2>
      </div>

      <div className="time">
        <h2>Time left:</h2>
        <h2 id="time-left">60</h2>
      </div>
    </div>

    <div className="grid-container">
      <div ref={gridRef} onClick={(e)=>handlerClick(e)} className="grid">
        {Element.map((value)=>{
          return  <div key={value.id} className={ classListName == value.id ?  `${value.list} emoji` : `${value.list}`  } id={value.id}></div>
      })}  
        
      </div>
    </div>
    </div>
  );
}

export default App;
