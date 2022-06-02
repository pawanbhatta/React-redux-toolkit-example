import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { ordered,restocked } from "./cakeSlice";

const CakeView = () => {
  const noOfCakes = useSelector(state=>state.cake.noOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {noOfCakes} </h2>
      <button onClick={()=>dispatch(ordered(2))}>Order cake</button>
      <button onClick={()=>dispatch(restocked(5))} >Restock cakes</button>
    </div>
  );
};

export default CakeView;
