import React from "react";

export interface ComboBoxProps{
  label: string;
}

const ComboBox = (props: ComboBoxProps) => {
  return <div>{props.label}</div>;
};

export default ComboBox;