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
  GET_OCCUPIED_ROOMS_FAILED,
  GET_OCCUPIED_ROOMS_SUCCESS
} from "../constants";

const initialState = {
  creating: false,
  elements: [],
  error: "",
  fetching: false,
  fetchingRooms: false,
  occupiedRooms: {},
  registration: {},
  registrations: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      return {
        ...state,
        fetching: true
      };

    case GET_FORM_ELEMENTS_SUCCESS:
      return {
        ...state,
        elements: action.elements,
        error: "",
        fetching: false
      };

    case GET_FORM_ELEMENTS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    case GET_REGISTRATIONS:
      return {
        ...state,
        fetching: true
      };

    case GET_REGISTRATIONS_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        registrations: action.registrations
      };

    case GET_REGISTRATIONS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    case CREATE_REGISTRATION:
      return {
        ...state,
        creating: true,
        registration: {}
      };

    case CREATE_REGISTRATION_SUCCESS:
      return {
        ...state,
        error: "",
        creating: false,
        registration: action.registration
      };

    case CREATE_REGISTRATION_FAILED:
      return {
        ...state,
        creating: false,
        error: action.error
      };

    case GET_OCCUPIED_ROOMS:
      return {
        ...state,
        fetchingRooms: true,
      };

    case GET_OCCUPIED_ROOMS_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingRooms: false,
        occupiedRooms: action.occupiedRooms
      };

    case GET_OCCUPIED_ROOMS_FAILED:
      return {
        ...state,
        fetchingRooms: false,
        error: action.error
      };

    default:
      return state;
  }
};
