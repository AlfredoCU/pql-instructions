import { combineReducers } from "redux";

import playersAvailableReducer from "./playersAvailable";

export const rootReducer = combineReducers({
  playersAvailable: playersAvailableReducer
});

export type TRootState = ReturnType<typeof rootReducer>;
