import { combineReducers } from "redux";

import playersAvailableReducer from "./playersAvailable";
import playersPerTeamReducer from "./playersPerTeam";
import teamsReducer from "./teams";

export const rootReducer = combineReducers({
  playersAvailable: playersAvailableReducer,
  playersPerTeam: playersPerTeamReducer,
  teams: teamsReducer
});

export type TRootState = ReturnType<typeof rootReducer>;
