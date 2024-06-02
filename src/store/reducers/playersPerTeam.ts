import { IPlayers } from "@/utils/types";

import {
  GET_PLAYERS_PER_TEAM_ERROR,
  GET_PLAYERS_PER_TEAM_PENDING,
  GET_PLAYERS_PER_TEAM_SUCCESS
} from "../types";

import { TGetPlayersPerTeam } from "../actions";

interface IState {
  playersPerTeam: IPlayers[] | null;
  isFetching: boolean;
  error: null;
}

const initialState: IState = {
  playersPerTeam: null,
  isFetching: true,
  error: null
};

function reducer(state: IState = initialState, payload: TGetPlayersPerTeam) {
  switch (payload.type) {
    case GET_PLAYERS_PER_TEAM_PENDING:
      return { ...state, ...initialState };
    case GET_PLAYERS_PER_TEAM_SUCCESS:
      return { ...state, playersPerTeam: payload.data, isFetching: false };
    case GET_PLAYERS_PER_TEAM_ERROR:
      return { ...state, error: payload.error, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
