import { ITeams } from "@/utils/types";

import {
  GET_TEAMS_ERROR,
  GET_TEAMS_PENDING,
  GET_TEAMS_SUCCESS
} from "../types";
import { TGetTeams } from "../actions";

interface IState {
  teams: ITeams[] | null;
  isFetching: boolean;
  error: null;
}

const initialState: IState = {
  teams: null,
  isFetching: true,
  error: null
};

function reducer(state: IState = initialState, payload: TGetTeams) {
  switch (payload.type) {
    case GET_TEAMS_PENDING:
      return { ...state, ...initialState };
    case GET_TEAMS_SUCCESS:
      return { ...state, teams: payload.data, isFetching: false };
    case GET_TEAMS_ERROR:
      return { ...state, error: payload.error, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
