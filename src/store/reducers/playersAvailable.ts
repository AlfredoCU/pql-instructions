import { IPlayers } from "@/utils/types";

import {
  GET_PLAYERS_AVAILABLE_ERROR,
  GET_PLAYERS_AVAILABLE_PENDING,
  GET_PLAYERS_AVAILABLE_SUCCESS
} from "../types";
import { TGetPlayersAvailableAction } from "../actions";

interface IState {
  playersAvailable: IPlayers[] | null;
  isFetching: boolean;
  error: null;
}

const initialState: IState = {
  playersAvailable: null,
  isFetching: true,
  error: null
};

function reducer(
  state: IState = initialState,
  payload: TGetPlayersAvailableAction
) {
  switch (payload.type) {
    case GET_PLAYERS_AVAILABLE_PENDING:
      return { ...state, ...initialState };
    case GET_PLAYERS_AVAILABLE_SUCCESS:
      return { ...state, playersAvailable: payload.data, isFetching: false };
    case GET_PLAYERS_AVAILABLE_ERROR:
      return { ...state, error: payload.error, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
