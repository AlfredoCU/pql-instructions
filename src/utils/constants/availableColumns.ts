import { TColumns } from "../types";
import playersColumns from "./playersColumns";

const availableColumns: TColumns[] = [
  ...playersColumns,
  { id: "actions", label: "", minWidth: 100 }
];

export default availableColumns;
