import { TRootState } from "../reducers";

export const playersAvailableSelector = (state: TRootState) =>
  state.playersAvailable;
