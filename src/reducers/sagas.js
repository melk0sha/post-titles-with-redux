import { takeEvery, put, call, delay } from "redux-saga/effects";
import { FETCH_SAGA_POSTS, REQUEST_POSTS } from "../constants";
import { hideSagaLoader, showAlert, showSagaLoader } from "../actions";

const fakeDataUrl = "https://jsonplaceholder.typicode.com/posts?_limit=4";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showSagaLoader());
    const payload = yield call(fetchPosts);
    yield delay(500);
    yield put({ type: FETCH_SAGA_POSTS, payload });
    yield put(hideSagaLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong."));
    yield put(hideSagaLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(fakeDataUrl);
  return await response.json();
}
