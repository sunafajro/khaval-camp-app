import { message } from "antd";
import {
  GET_FORM_ELEMENTS,
  GET_FORM_ELEMENTS_SUCCESS,
  GET_FORM_ELEMENTS_FAILED,
  GET_REGISTRATIONS,
  GET_REGISTRATIONS_SUCCESS,
  GET_REGISTRATIONS_FAILED,
  CREATE_REGISTRATION,
  CREATE_REGISTRATION_SUCCESS,
  CREATE_REGISTRATION_FAILED,
  GET_OCCUPIED_ROOMS,
  GET_OCCUPIED_ROOMS_SUCCESS,
  GET_OCCUPIED_ROOMS_FAILED
} from "../constants";
import { getCsrfToken } from "../../utils";

export const getFormElementsSuccess = elements => {
  return dispatch => {
    dispatch({
      type: GET_FORM_ELEMENTS_SUCCESS,
      elements
    });
  };
};

export const getFormElementsFailed = error => {
  message.error(error);
  return dispatch => {
    dispatch({
      type: GET_FORM_ELEMENTS_FAILED,
      error
    });
  };
};

export const getFormElements = () => {
  return dispatch => {
    dispatch({
      type: GET_FORM_ELEMENTS
    });
    fetch("/api/elements", {
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
      .then(data => dispatch(getFormElementsSuccess(data.result)))
      .catch(error => dispatch(getFormElementsFailed(error.message)));
  };
};

export const getRegistrationsSuccess = registrations => {
  return dispatch => {
    dispatch({
      type: GET_REGISTRATIONS_SUCCESS,
      registrations
    });
  };
};

export const getRegistrationsFailed = error => {
  message.error(error);
  return dispatch => {
    dispatch({
      type: GET_REGISTRATIONS_FAILED,
      error
    });
  };
};

export const getRegistrations = () => {
  return dispatch => {
    dispatch({
      type: GET_REGISTRATIONS
    });
    fetch("/api/registrations", {
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
      .then(data => dispatch(getRegistrationsSuccess(data.result)))
      .catch(error => dispatch(getRegistrationsFailed(error.message)));
  };
};

export const createRegistrationSuccess = registration => {
  message.success("Регистрация прошла успешно!");
  return dispatch => {
    dispatch({
      type: CREATE_REGISTRATION_SUCCESS,
      registration
    });
  };
};

export const createRegistrationFailed = error => {
  message.error(error ? error : "Произошла ошибка");
  return dispatch => {
    dispatch({
      type: CREATE_REGISTRATION_FAILED,
      error: error ? error : "Произошла ошибка"
    });
  };
};

export const createRegistration = data => {
  return dispatch => {
    dispatch({
      type: CREATE_REGISTRATION
    });
    getCsrfToken()
      .then(csrf => {
        csrf.data = { ...data };
        const body = JSON.stringify(csrf);
        fetch("/api/registrations", {
          method: "POST",
          accept: "application/json",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body
        })
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else if(response.status === 400) {
              throw new Error("Поля формы не заполнены!");
            } else if(response.status === 409) {
              throw new Error("Выбранное место/комната уже занято!");
            } else {
              throw new Error("При подаче заявки произошла ошибка!");
            }
          })
          .then(data => dispatch(createRegistrationSuccess(data.result)))
          .catch(error => dispatch(createRegistrationFailed(error.message)));
      })
      .catch(error => dispatch(createRegistrationFailed(error.message)));
  };
};

export const getOccupiedRoomsSuccess = occupiedRooms => {
  return dispatch => {
    dispatch({
      type: GET_OCCUPIED_ROOMS_SUCCESS,
      occupiedRooms
    });
  };
};

export const getOccupiedRoomsFailed = error => {
  message.error(error);
  return dispatch => {
    dispatch({
      type: GET_OCCUPIED_ROOMS_FAILED,
      error
    });
  };
};

export const getOccupiedRooms = () => {
  return dispatch => {
    dispatch({
      type: GET_OCCUPIED_ROOMS
    });
    fetch("/api/occupiedrooms", {
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
      .then(data => dispatch(getOccupiedRoomsSuccess(data.result)))
      .catch(error => dispatch(getOccupiedRoomsFailed(error.message)));
  };
};