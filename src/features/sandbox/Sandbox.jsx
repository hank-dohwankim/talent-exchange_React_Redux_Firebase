import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  return (
    <>
      <h1>Testing Sandbox</h1>
      <h1>Data : {data}</h1>
      <Button
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content="Decrement"
        color="red"
      />
    </>
  );
}
