import { useCounterStore } from "../../store/CounterStore";

function Button({ type, text }) {
  const subscribedItem = useCounterStore((state) => state[type]);
  console.log(`button ${type} rendered`);
  return (
    <button
      onClick={subscribedItem}
      className="bg-amber-300 px-4 py-2 rounded-md font-semibold text-black"
    >
      {text}
    </button>
  );
}

export default Button;
