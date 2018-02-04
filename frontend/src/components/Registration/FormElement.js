import React from "react";
import { any, bool, func, object, string } from "prop-types";
import { DatePicker } from "antd";
import Moment from "moment";
import { InputField } from "./InputField";
import { RadioField } from "./RadioField";
import { SelectField } from "./SelectField";
import { SelectGroupField } from "./SelectGroupField";

export const FormElement = ({
  birthDate,
  fetchingRooms,
  handleChange,
  id,
  items,
  label,
  lang,
  occupiedRooms,
  residence,
  showImage,
  state,
  type,
  value
}) => {
  let element;
  const age = Moment().diff(birthDate, "years");
  switch (type) {
    case "input": {
      element = (
        <InputField
          handleChange={handleChange}
          id={id}
          label={label}
          lang={lang}
          state={state}
          value={value}
        />
      );
      break;
    }
    case "radio": {
      if (id !== "jobEl") {
        element = (
          <RadioField
            handleChange={handleChange}
            id={id}
            items={items}
            label={label}
            lang={lang}
            state={state}
            value={value}
          />
        );
      } else {
        element =
          age > 17 ? (
            <RadioField
              handleChange={handleChange}
              id={id}
              items={items}
              label={label}
              lang={lang}
              state={state}
              value={value}
            />
          ) : null;
      }
      break;
    }
    case "select": {
      element = (
        <SelectField
          handleChange={handleChange}
          id={id}
          items={items}
          label={label}
          lang={lang}
          showImage={showImage}
          state={state}
          value={value}
        />
      );
      break;
    }
    case "selectgroup": {
      let disabled = fetchingRooms;
      if (state) {
        disabled = state;
      }
      element =
        residence && items[residence] ? (
          <SelectGroupField
            handleChange={handleChange}
            id={id}
            items={items[residence]}
            label={label}
            lang={lang}
            occupiedRooms={occupiedRooms[residence] ? occupiedRooms[residence] : []}
            state={disabled}
            value={value}
          />
        ) : null;
      break;
    }
    case "datepicker": {
      const style =
        age > 17
          ? {
              width: "49%",
              marginRight: "1%",
              marginBottom: "10px",
              float: "left"
            }
          : { width: "100%", marginBottom: "10px" };
      element = (
        <div style={style}>
          <div>
            <b>{label[lang]}:</b>
          </div>
          <DatePicker
            style={{ width: "100%" }}
            value={Moment(value)}
            disabled={state}
            onChange={(d, s) => {
              handleChange(Moment(d), id);
            }}
          />
        </div>
      );
      break;
    }
    default:
      element = null;
  }
  return element;
};

FormElement.propTypes = {
  birthDate: object,
  fetchingRooms: bool.isRequired,
  handleChange: func.isRequired,
  id: string.isRequired,
  items: any,
  label: object.isRequired,
  lang: string.isRequired,
  occupiedRooms: object.isRequired,
  residence: string,
  showImage: func.isRequired,
  state: bool.isRequired,
  type: string.isRequired,
  value: any
};
