import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer, sagaWatcher } from "../reducers";
import { forbiddenWordsMiddleware } from "../middlewares";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.REDUX_DEVTOOLS_EXTENSION
      ? window.REDUX_DEVTOOLS_EXTENSION()
      : (f) => f
  )
);

saga.run(sagaWatcher);

export default store;
