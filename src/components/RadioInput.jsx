import { useState, useEffect } from "@wordpress/element";
import {
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";

const RadioInput = ({ onChange }) => {
  const [checked, setChecked] = useState("25");
  useEffect(() => {
    onChange(checked);
  }, [checked]);
  return (
    <RadioGroup label="Width" onChange={setChecked} checked={checked}>
      <Radio value="25">25%</Radio>
      <Radio value="50">50%</Radio>
      <Radio value="75">75%</Radio>
      <Radio value="100">100%</Radio>
    </RadioGroup>
  );
};

export default RadioInput;
