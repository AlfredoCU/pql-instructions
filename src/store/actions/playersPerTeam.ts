import { ThunkAction } from "redux-thunk";

import api from "@/services";
import { IPlayers } from "@/utils/types";

import { TRootState } from "../reducers";

import {
  GET_PLAYERS_PER_TEAM_ERROR,
  GET_PLAYERS_PER_TEAM_PENDING,
  GET_PLAYERS_PER_TEAM_SUCCESS
} from "../types";

interface IGetPlayersPerTeamPendingAction {
  type: typeof GET_PLAYERS_PER_TEAM_PENDING;
}

interface IGetPlayersPerTeamSuccessAction {
  type: typeof GET_PLAYERS_PER_TEAM_SUCCESS;
  data: IPlayers[];
}

interface IGetPlayersPerTeamErrorAction {
  type: typeof GET_PLAYERS_PER_TEAM_ERROR;
  error: unknown;
}

function getPlayersPerTeamPendingAction(): IGetPlayersPerTeamPendingAction {
  return { type: GET_PLAYERS_PER_TEAM_PENDING };
}

function getPlayersPerTeamSuccessAction(
  data: IPlayers[]
): IGetPlayersPerTeamSuccessAction {
  return { type: GET_PLAYERS_PER_TEAM_SUCCESS, data };
}

function getPlayersPerTeamErrorAction(
  error: unknown
): IGetPlayersPerTeamErrorAction {
  return { type: GET_PLAYERS_PER_TEAM_ERROR, error };
}

export function getPlayersPerTeam(
  id: number | string
): ThunkAction<Promise<void>, TRootState, unknown, any> {
  return async function (dispatch) {
    try {
      dispatch(getPlayersPerTeamPendingAction());

      const { data } = await api.get(`/api/players?team_id=${id}`);

      dispatch(getPlayersPerTeamSuccessAction(data));
    } catch (error) {
      dispatch(getPlayersPerTeamErrorAction(error));
    }
  };
}

export type TGetPlayersPerTeam =
  | IGetPlayersPerTeamPendingAction
  | IGetPlayersPerTeamSuccessAction
  | IGetPlayersPerTeamErrorAction;
