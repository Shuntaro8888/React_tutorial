import { useCounter } from "../context/CounterContext"

const CounterResult = () => {
  const state = useCounter(0);
  return <h3>{state}</h3>;
};

export default CounterResult;