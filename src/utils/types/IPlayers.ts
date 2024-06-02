import { TPosition } from "./TPosition";

export interface IPlayers {
  id: number;
  name: string;
  age: number;
  position: TPosition;
  special_ability: string;
  team_id: number | null;
}
