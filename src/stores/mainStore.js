import { createStore, combineReducers } from "redux";

import flightTableReducer from "../reducers/flightTableReducer";

var mainStore = createStore(
    combineReducers({
        flightTableReducer : flightTableReducer
    })
);

export default mainStore;