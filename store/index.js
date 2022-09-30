import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

let store = null;

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
    sagaMiddleware.run(rootSaga);
    return store;
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["auth", "config", "week"], // entries here will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    store = createStore(persistedReducer, bindMiddleware([sagaMiddleware])); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
    sagaMiddleware.run(rootSaga);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
export { store };
