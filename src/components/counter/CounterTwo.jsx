import Button from "../button/Button";
import CounterValue from "../countervalue/CounterValue";

function CounterTwo() {
  return (
    <>
      <CounterValue />
      <div className="flex gap-2">
        <Button text="Add One" type="increase" />
        <Button text="Subtract One" type="decrease" />
        <Button text="Reset" type="reset" />
      </div>
    </>
  );
}

export default CounterTwo;
