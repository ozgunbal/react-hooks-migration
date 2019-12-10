import { createStore } from "redux";

const store = createStore((state = {}, action) => {
  if (action.type === "SUBMIT_FORM") return { ...state, ...action.payload };

  return state;
});

export default store;
