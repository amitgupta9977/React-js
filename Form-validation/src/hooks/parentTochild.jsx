import { useState, useRef } from "react";

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");
  const childComponentRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    childComponentRef.current.updateValue(inputValue);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <ChildComponent ref={childComponentRef} />
      <button onClick={handleButtonClick}>Pass Value to Child Component</button>
    </div>
  );
}

const ChildComponent = React.forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  React.useImperativeHandle(ref, () => ({
    updateValue,
  }));

  return <div>The input value in the child component is: {value}</div>;
});
