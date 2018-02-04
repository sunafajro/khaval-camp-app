import React from "react";
import { array, bool, func, object, string } from "prop-types";
import { Select } from "antd";

const { Option, OptGroup } = Select;

export const SelectGroupField = ({
  handleChange,
  id,
  items,
  label,
  lang,
  occupiedRooms,
  state,
  value
}) => {
  return (
    <div style={{ width: "49%", marginLeft: "1%", marginBottom: "10px", float: 'left' }}>
      <div>
        <b>{label[lang]}:</b>
      </div>
      <Select
        id={id}
        style={{ width: "100%" }}
        disabled={state}
        value={value}
        onChange={value => {
          handleChange(value, id);
        }}
      >
        {Object.keys(items).map(room => {
          return (
            <OptGroup key={"opt-select-room-" + room} label={"Комната " + room}>
              {items[room].map(place => {
                const p = place.split(':');
                const el = occupiedRooms.indexOf(place) !== -1
                  ? (<Option key={"opt-select-room-place-" + place} value={place} disabled>{"Место " + p.pop()}</Option>)
                  : (<Option key={"opt-select-room-place-" + place} value={place}>{"Место " + p.pop()}</Option>);
                return el;
              })}
            </OptGroup>
          );
        })}
      </Select>
    </div>
  );
};

SelectGroupField.propTypes = {
  handleChange: func.isRequired,
  id: string.isRequired,
  items: object.isRequired,
  label: object.isRequired,
  lang: string.isRequired,
  occupiedRooms: array.isRequired,
  state: bool.isRequired,
  value: string
};
