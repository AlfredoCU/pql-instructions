import { ThunkAction } from "redux-thunk";

import api from "@/services";
import { ITeams } from "@/utils/types";

import { TRootState } from "../reducers";

import {
  GET_TEAMS_ERROR,
  GET_TEAMS_PENDING,
  GET_TEAMS_SUCCESS
} from "../types";

interface IGetTeamsPendingAction {
  type: typeof GET_TEAMS_PENDING;
}

interface IGetTeamsSuccessAction {
  type: typeof GET_TEAMS_SUCCESS;
  data: ITeams[];
}

interface IGetTeamsErrorAction {
  type: typeof GET_TEAMS_ERROR;
  error: unknown;
}

function getTeamsPendingAction(): IGetTeamsPendingAction {
  return { type: GET_TEAMS_PENDING };
}

function getTeamsSuccessAction(data: ITeams[]): IGetTeamsSuccessAction {
  return { type: GET_TEAMS_SUCCESS, data };
}

function getTeamsErrorAction(error: unknown): IGetTeamsErrorAction {
  return { type: GET_TEAMS_ERROR, error };
}

export function getTeams(): ThunkAction<
  Promise<void>,
  TRootState,
  unknown,
  any
> {
  return async function (dispatch) {
    try {
      dispatch(getTeamsPendingAction());

      const { data } = await api.get("/api/teams");

      dispatch(getTeamsSuccessAction(data));
    } catch (error) {
      dispatch(getTeamsErrorAction(error));
    }
  };
}

export type TGetTeams =
  | IGetTeamsPendingAction
  | IGetTeamsSuccessAction
  | IGetTeamsErrorAction;
