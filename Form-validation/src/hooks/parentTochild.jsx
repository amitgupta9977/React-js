import { useRef } from "react";

function ParentComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <div>
      <input ref={inputRef} />
      <ChildComponent inputRef={inputRef} />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

function ChildComponent(props) {
  return <div>The input value is: {props.inputRef.current.value}</div>;
}
export default handleButtonClick;
