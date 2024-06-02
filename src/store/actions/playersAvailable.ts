import { ThunkAction } from "redux-thunk";

import api from "@/services";
import { IPlayers } from "@/utils/types";

import { TRootState } from "../reducers";

import {
  GET_PLAYERS_AVAILABLE_ERROR,
  GET_PLAYERS_AVAILABLE_PENDING,
  GET_PLAYERS_AVAILABLE_SUCCESS
} from "../types";

interface IGetPlayersAvailablePendingAction {
  type: typeof GET_PLAYERS_AVAILABLE_PENDING;
}

interface IGetPlayersAvailableSuccessAction {
  type: typeof GET_PLAYERS_AVAILABLE_SUCCESS;
  data: IPlayers[];
}

interface IGetPlayersAvailableErrorAction {
  type: typeof GET_PLAYERS_AVAILABLE_ERROR;
  error: unknown;
}

function getPlayersAvailablePendingAction(): IGetPlayersAvailablePendingAction {
  return { type: GET_PLAYERS_AVAILABLE_PENDING };
}

function getPlayersAvailableSuccessAction(
  data: IPlayers[]
): IGetPlayersAvailableSuccessAction {
  return { type: GET_PLAYERS_AVAILABLE_SUCCESS, data };
}

function getPlayersAvailableErrorAction(
  error: unknown
): IGetPlayersAvailableErrorAction {
  return { type: GET_PLAYERS_AVAILABLE_ERROR, error };
}

export function getPlayersAvailable(): ThunkAction<
  Promise<void>,
  TRootState,
  unknown,
  any
> {
  return async function (dispatch) {
    try {
      dispatch(getPlayersAvailablePendingAction());

      const { data } = await api.get("/api/players/available");

      dispatch(getPlayersAvailableSuccessAction(data));
    } catch (error) {
      dispatch(getPlayersAvailableErrorAction(error));
    }
  };
}

export type TGetPlayersAvailableAction =
  | IGetPlayersAvailablePendingAction
  | IGetPlayersAvailableSuccessAction
  | IGetPlayersAvailableErrorAction;
