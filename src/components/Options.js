import React from 'react'
export default function Options(props) {
    const percents = []
    for(let i=props.min; i <= props.max; i = i + props.pros){
      percents.push(i)
    }
  
    return (
      percents.map (percents =>{
        return <option value = {percents}>{percents}</option>
      })
      
    )
  }
  

/*export default function Options(props) {
  const optionValues = []
  for(let i=props.min; i <= props.max; i = i + props.add){
    optionValues.push(i)
  }

  return (
    optionValues.map (optionValues =>{
      return <option value = {optionValues}>{optionValues}</option>
    })
    
  )
}*/