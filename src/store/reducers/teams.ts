import { ITeams } from "@/utils/types";

import {
  CREATE_TEAM_ERROR,
  CREATE_TEAM_PENDING,
  CREATE_TEAM_SUCCESS,
  GET_TEAMS_ERROR,
  GET_TEAMS_PENDING,
  GET_TEAMS_SUCCESS
} from "../types";
import { TGetTeams } from "../actions";

interface IState {
  teams: ITeams[] | null;
  isFetching: boolean;
  error: null;
  createTeam: boolean;
  isFetchingCreate: boolean;
  errorCreate: null;
}

const initialState: IState = {
  teams: null,
  isFetching: true,
  error: null,
  createTeam: false,
  isFetchingCreate: true,
  errorCreate: null
};

function reducer(state: IState = initialState, payload: TGetTeams) {
  switch (payload.type) {
    case GET_TEAMS_PENDING:
      return { ...state, teams: null, isFetching: true, error: null };
    case GET_TEAMS_SUCCESS:
      return { ...state, teams: payload.data, isFetching: false };
    case GET_TEAMS_ERROR:
      return { ...state, error: payload.error, isFetching: false };
    case CREATE_TEAM_PENDING:
      return {
        ...state,
        createTeam: false,
        isFetchingCreate: true,
        errorCreate: null
      };
    case CREATE_TEAM_SUCCESS:
      return {
        ...state,
        createTeam: true,
        isFetchingCreate: false,
        errorCreate: null
      };
    case CREATE_TEAM_ERROR:
      return {
        ...state,
        createTeam: false,
        isFetchingCreate: false,
        errorCreate: payload.error
      };
    default:
      return state;
  }
}

export default reducer;
