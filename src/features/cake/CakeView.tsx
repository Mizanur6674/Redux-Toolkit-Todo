import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

const  CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch()
  
  return (
    <div>
      <h1>Number of cakes-{numOfCakes}</h1>
      <button onClick={ () => dispatch(ordered())}>Order Cake</button>
      <button onClick={ () => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
}
 export default CakeView

