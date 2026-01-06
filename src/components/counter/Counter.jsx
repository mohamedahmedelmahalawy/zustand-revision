import { useCounterStore } from "../../store/CounterStore";
function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <>
      <h3 className="font-semibold text-amber-50/90 text-4xl">
        Count: <span className="text-green-400">{count}</span>
      </h3>
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="bg-amber-300 px-4 py-2 rounded-md font-semibold text-black"
        >
          Add One
        </button>
        <button
          onClick={decrease}
          className="bg-amber-300 px-4 py-2 rounded-md font-semibold text-black"
        >
          Subtract One
        </button>
        <button
          onClick={reset}
          className="bg-amber-300 px-4 py-2 rounded-md font-semibold text-black"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
