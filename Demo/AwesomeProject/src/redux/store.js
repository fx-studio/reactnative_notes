import { legacy_createStore as createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";

/**
 * Hợp nhất tất các Reducers lại vào 1 mối chính
 */
const rootReducer = combineReducers({
    count: countReducer,
});

/**
 * Tạo store
 */
export const store = createStore(rootReducer);
