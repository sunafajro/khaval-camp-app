import React from "react";
import { array, bool, func, object, string } from "prop-types";
import { Radio } from "antd";

const RadioGroup = Radio.Group;

export const RadioField = ({
  handleChange,
  id,
  items,
  label,
  lang,
  state,
  value
}) => {
  const style = id === 'jobEl' ? { width: "49%", marginLeft: "1%", marginBottom: "10px", float: 'left' } : {width: "100%", marginBottom: "10px"};
  return (
    <div style={style}>
      <div><b>{label[lang]}:</b></div>
      <RadioGroup
        id={id}
        style={{ marginRight: "5px" }}
        value={value}
        onChange={e => {
          handleChange(e.target.value, id);
        }}
      >
        {items.map((option, index) => {
          return (
            <Radio
              key={"opt-radio-" + index}
              value={option.value}
              disabled={state}
            >
              {option.label[lang]}
            </Radio>
          );
        })}
      </RadioGroup>
    </div>
  );
};

RadioField.propTypes = {
  handleChange: func.isRequired,
  id: string.isRequired,
  items: array.isRequired,
  label: object.isRequired,
  lang: string.isRequired,
  state: bool.isRequired,
  value: string
};
