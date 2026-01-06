import { useCounterStore } from "../../store/CounterStore";

function CounterValue() {
  const count = useCounterStore((state) => state.count);

  return (
    <h3 className="font-semibold text-amber-50/90 text-4xl">
      Count: <span className="text-green-400">{count}</span>
    </h3>
  );
}

export default CounterValue;
