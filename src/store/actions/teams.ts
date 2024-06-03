import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";

import api from "@/services";
import { ICreateTeam, IPlayers, ITeams } from "@/utils/types";

import { TRootState } from "../reducers";

import {
  CREATE_TEAM_ERROR,
  CREATE_TEAM_PENDING,
  CREATE_TEAM_SUCCESS,
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

// ==============================================================================

interface ICreateTeamPendingAction {
  type: typeof CREATE_TEAM_PENDING;
}

interface ICreateTeamSuccessAction {
  type: typeof CREATE_TEAM_SUCCESS;
}

interface ICreateTeamErrorAction {
  type: typeof CREATE_TEAM_ERROR;
  error: unknown;
}

function createTeamPendingAction(): ICreateTeamPendingAction {
  return { type: CREATE_TEAM_PENDING };
}

function createTeamSuccessAction(): ICreateTeamSuccessAction {
  return { type: CREATE_TEAM_SUCCESS };
}

function createTeamErrorAction(error: unknown): ICreateTeamErrorAction {
  return { type: CREATE_TEAM_ERROR, error };
}

export function createTeam(
  createTeamData: ICreateTeam
): ThunkAction<Promise<any>, TRootState, unknown, any> {
  return async function (dispatch) {
    try {
      dispatch(createTeamPendingAction());

      if (createTeamData.players.length <= 0) {
        throw new Error("Players are required");
      }

      const { data: teams } = await api.get("/api/teams");

      const nameFound = teams.some(
        (item: ITeams) => item.name === createTeamData.name
      );

      if (nameFound) {
        throw new Error("The team name already exists, enter another name");
      }

      const requests = createTeamData.players.map(item =>
        api.put(`/api/players/${item.id}`, { ...item })
      );

      const updatedPlayers = await Promise.all(requests);

      if (updatedPlayers.length === 0) {
        throw new Error("An error occurred, please re-enter");
      }

      const newPlayers = updatedPlayers.map(item => item.data.id);

      api.post("/api/teams", { ...createTeamData, players: newPlayers });

      toast.success("Team created successfully");
      dispatch(createTeamSuccessAction());
    } catch (error: any) {
      toast.error(error?.message);
      dispatch(createTeamErrorAction(error));
    }
  };
}

// ==============================================================================

export type TGetTeams =
  | IGetTeamsPendingAction
  | IGetTeamsSuccessAction
  | IGetTeamsErrorAction
  | ICreateTeamPendingAction
  | ICreateTeamSuccessAction
  | ICreateTeamErrorAction;
