import React, { useState } from 'react'
// import { useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'



 const IceCreamView = () => {
  const [ value, setValue] = useState(1)
  const numOfIceCream = useAppSelector((state => state.iceCream.numOfIceCreams))
  const dispatch = useAppDispatch()

  
  return (
    
    <div>
        <h1>Number of IceCreams-{numOfIceCream} </h1>
        <button onClick={ ()=> dispatch(ordered())}>Order IceCream</button>
        <input type='number' value={value} onChange = { e => setValue(parseInt(e.target.value))} />
        <button onClick={ () => dispatch(restocked(value))}>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView