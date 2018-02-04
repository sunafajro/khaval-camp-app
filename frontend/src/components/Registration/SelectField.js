import React from "react";
import { array, bool, func, object, string } from "prop-types";
import { Button, Select } from "antd";

const { Option } = Select;

export const SelectField = ({
  handleChange,
  id,
  items,
  label,
  lang,
  showImage,
  state,
  value
}) => {
  const style =
    id === "residenceEl" && (value === "zabava" || value === "corp20")
      ? { width: "49%", marginRight: "1%", marginBottom: "10px", float: "left" }
      : { width: "100%", marginBottom: "10px" };
  return (
    <div style={style}>
      <div>
        <b>{label[lang]}:</b>
      </div>
      <Select
        id={id}
        style={
          value === "zabava" || value === "corp20"
            ? { width: "80%" }
            : { width: "100%" }
        }
        disabled={state}
        value={value}
        onChange={value => {
          handleChange(value, id);
        }}
      >
        {items.map((option, index) => {
          return (
            <Option key={"opt-select-" + index} value={option.value}>
              {option.label[lang]}
            </Option>
          );
        })}
      </Select>
      { value === "zabava" || value === "corp20" ? <Button
        style={{ marginTop: "3px", marginLeft: "5px" }}
        shape="circle"
        icon="picture"
        size="small"
        onClick={showImage}
      /> : null }
    </div>
  );
};

SelectField.propTypes = {
  handleChange: func.isRequired,
  id: string.isRequired,
  items: array.isRequired,
  label: object.isRequired,
  lang: string.isRequired,
  showImage: func.isRequired,
  state: bool.isRequired,
  value: string
};
