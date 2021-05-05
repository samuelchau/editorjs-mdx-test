import { useState, useMemo } from 'react'
import { Chart } from 'react-charts'

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


// A simple line chart example taken from https://www.npmjs.com/package/react-charts
export function MyChart() {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  )
}

