import {
  SHOW_THUNK_LOADER,
  SHOW_SAGA_LOADER,
  HIDE_THUNK_LOADER,
  HIDE_SAGA_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "../constants";

export function showThunkLoader() {
  return {
    type: SHOW_THUNK_LOADER,
  };
}

export function showSagaLoader() {
  return {
    type: SHOW_SAGA_LOADER,
  };
}

export function hideThunkLoader() {
  return {
    type: HIDE_THUNK_LOADER,
  };
}

export function hideSagaLoader() {
  return {
    type: HIDE_SAGA_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
