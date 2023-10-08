import React from "react";

export const validateNumber = (value: number) => {
  if (value > 1000) return 100;

  if (value < 0) return 0;

  return value;
};

export interface NumberFieldProps {
  value: number;
  onChange: () => void;
}

export const NumberField: React.FC<NumberFieldProps> = (props) => {
  return (
    <input
      type="number"
      value={validateNumber(props.value)}
      onChange={props.onChange}
    />
  );
};
