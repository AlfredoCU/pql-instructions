import { TColumns } from "../types";
import playersColumns from "./playersColumns";

const availableColumns: TColumns[] = [
  { id: "actions", label: "", width: 10 },
  ...playersColumns
];

export default availableColumns;
