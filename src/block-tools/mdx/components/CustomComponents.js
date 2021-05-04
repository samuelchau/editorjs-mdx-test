import { useState } from 'react'


export const CustomButton = () => (
  <div style={{padding: 20, backgroundColor: 'red'}} >
    <button onClick={()=>console.log("CustomButton clicked!!") }>Click Me</button>
  </div>
)


export const CustomCounter = (props) =>{

 const [count, setCount] = useState( props.start || 0 );
 
 return (
   <div>
     <button onClick={ ()=>setCount(count-1) }>-</button>
       {count}
     <button onClick={ ()=>setCount(count+1) }>+</button>
   </div>
 )
}


export const CustomSelectionBox = (props) => {

  const [ selected, setSelected ] = useState( props.selected || ["oranges"] );
  
  const options= ["apples", "oranges", "pineapples", "grapes", "bananas"];

  const handleChange = (event) => {
    console.log("selected item " + event.target.value);
    setSelected([...selected, event.target.value]);
  }

  return (
    <select value={selected} onChange={handleChange} multiple>
      {
        options.map( (item, index)=> <option key={`${item}-${index}`} value={item} >{item}</option> )
      }
    </select>
  )
}

