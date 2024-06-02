import { combineReducers } from "redux";

import playersAvailableReducer from "./playersAvailable";
import teamsReducer from "./teams";

export const rootReducer = combineReducers({
  playersAvailable: playersAvailableReducer,
  teams: teamsReducer
});

export type TRootState = ReturnType<typeof rootReducer>;
