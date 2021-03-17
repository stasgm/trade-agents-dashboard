import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { middlewares } from "./middlewares";

const configureStore = () => {
  const store: ReturnType<typeof createStore> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(Thunk), middlewares)
  );

  return store;
};

export { configureStore };
