import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "./reducers/countReducer";
import movieReducer from "./reducers/movieReducer";

/**
 * Sagas
 */
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "../sagas";

/**
 * Hợp nhất tất các Reducers lại vào 1 mối chính
 */
const rootReducer = combineReducers({
    count: countReducer,
    movie: movieReducer,
});

/**
 * Tạo store
 */
//export const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
