import { TRootState } from "../reducers";

export const playersPerTeamSelector = (state: TRootState) =>
  state.playersPerTeam;
