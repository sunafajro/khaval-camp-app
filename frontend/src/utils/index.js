import React from "react";
import { Icon, Spin } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export const Aux = props => props.children;

export const Spinner = () => (
  <Spin style={{ width: "100%", textAlign: "center" }} indicator={antIcon} />
);

export const getCsrfToken = () => {
  return new Promise((resolve, reject) => {
    fetch("/csrf", {
      method: "GET",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Произошла ошибка!");
        }
        return response.json();
      })
      .then(csrf => {
        resolve(csrf);
      })
      .catch(error => {
        reject(error.message);
      });
  });
};
