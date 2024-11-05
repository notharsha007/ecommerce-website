import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increase,
  multiply,
} from "../../redux/slices/CounterSlice";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increase(5))}>Increment by 5</button>
      <button onClick={() => dispatch(multiply(5))}>multiply by 5</button>
    </div>
  );
};

export default CounterComponent;
