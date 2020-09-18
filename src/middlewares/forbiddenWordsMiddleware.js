import { showAlert } from "../actions";
import { CREATE_POST } from "../constants";

const forbiddenWords = ["fuck", "spam", "php"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (found.length) {
          return dispatch(showAlert("You are a spamer"));
        }
      }

      return next(action);
    };
  };
}
