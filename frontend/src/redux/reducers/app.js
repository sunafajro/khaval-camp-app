import {
  GET_APPSTATE,
  GET_APPSTATE_SUCCESS,
  GET_APPSTATE_FAILED
  //UPDATE_APPSTATE,
  //CHANGE_APP_LANGUAGE
} from "../constants";
//import { labels } from '../../translations/translations';

const initialState = {
  appLoaded: false,
  //data: [],
  error: "",
  fetching: false,
  //labels: labels,
  lang: "ru",
  //languages: ['cv', 'ru', 'eo'],
  loggedIn: false
  //rawData: [],
  //user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APPSTATE:
      return {
        ...state,
        fetching: true
      };

    case GET_APPSTATE_SUCCESS:
      return {
        ...state,
        appLoaded: true,
        //data: action.data,
        error: "",
        fetching: false,
        lang: action.lang,
        loggedIn: action.loggedIn
        //rawData: action.rawData,
        //user: action.user,
      };

    case GET_APPSTATE_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    //   case UPDATE_APPSTATE:
    //     return {
    //       ...state,
    //       loggedIn: action.loggedIn,
    //       user: action.user,
    //     };

    //   case CHANGE_APP_LANGUAGE:
    //     return {
    //       ...state,
    //       language: action.language,
    //       data: action.data,
    //     };

    default:
      return state;
  }
};
