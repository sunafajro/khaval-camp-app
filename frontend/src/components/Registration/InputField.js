import React from "react";
import { bool, func, object, string } from "prop-types";
import { Input } from "antd";

export const InputField = ({ handleChange, id, label, lang, state, value }) => {
  const style = id !== "phoneEl" ? {width: "100%", marginBottom: "10px"} : {width: "100%", marginBottom: "10px", clear: "both"};
  return (
    <div style={style}>
      <div><b>{label[lang]}:</b></div>
      <Input
        id={id}
        type="text"
        style={{ width: "100%" }}
        disabled={state}
        value={value}
        onChange={e => {
          handleChange(e.target.value, id);
        }}
      />
    </div>
  );
};

InputField.propTypes = {
  handleChange: func.isRequired,
  id: string.isRequired,
  label: object.isRequired,
  lang: string.isRequired,
  state: bool.isRequired,
  value: string
};
