import {
  SHOW_THUNK_LOADER,
  SHOW_SAGA_LOADER,
  HIDE_THUNK_LOADER,
  HIDE_SAGA_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "../constants";

const initialState = {
  loading: { thunk: false, saga: false },
  alert: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_THUNK_LOADER:
      return { ...state, loading: { ...state.loading, thunk: true } };
    case SHOW_SAGA_LOADER:
      return { ...state, loading: { ...state.loading, saga: true } };
    case HIDE_THUNK_LOADER:
    case HIDE_SAGA_LOADER:
      return { ...state, loading: { thunk: false, saga: false } };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
