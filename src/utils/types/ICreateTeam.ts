import { IPlayers } from "./IPlayers";

export interface ICreateTeam {
  name: string;
  slogan: string;
  players: IPlayers[];
}
