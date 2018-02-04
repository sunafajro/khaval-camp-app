import { message } from "antd";
import {
  GET_APPSTATE,
  GET_APPSTATE_SUCCESS,
  GET_APPSTATE_FAILED
  //UPDATE_APPSTATE,
  //CHANGE_APP_LANGUAGE
} from "../constants";
// import { getCsrfToken, getNextLanguage, prepareListData } from "../../utils";

export const getStateSuccess = state => {
  return dispatch => {
    dispatch({
      type: GET_APPSTATE_SUCCESS,
      //data: prepareListData(state.data),
      lang: state.lang,
      loggedIn: state.loggedIn
      //rawData: state.data,
      //user: state.user.length === undefined ? state.user : {}
    });
  };
};

export const getStateFailed = error => {
  message.error(error);
  return dispatch => {
    dispatch({
      type: GET_APPSTATE_FAILED,
      error
    });
  };
};

export const getState = () => {
  return dispatch => {
    dispatch({
      type: GET_APPSTATE
    });
    fetch("/api/state", {
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
      .then(state => dispatch(getStateSuccess(state)))
      .catch(error => dispatch(getStateFailed(error.message)));
  };
};

/* action updates state of app after user login or logout */
// export const updateAppState = newState => {
//   return dispatch => {
//     dispatch({
//       type: UPDATE_APPSTATE,
//       loggedIn: newState.loggedIn,
//       user: newState.user,
//     });
//   };
// };

/* action changes app language and filters data by it */
// export const changeAppLanguage = () => {
//   return (dispatch, getState) => {
//     const { language, languages, rawData } = getState().app;
//     const nextLang = getNextLanguage(language, languages);
//     dispatch({
//       type: CHANGE_APP_LANGUAGE,
//       language: nextLang,
//       data: prepareListData(rawData, nextLang)
//     });
//   };
// };
