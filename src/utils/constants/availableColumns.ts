import { i18n } from "../helpers";
import { TAvailableColumns } from "../types";

const availableColumns: TAvailableColumns[] = [
  { id: "name", label: i18n("CREATE_TEAM.COLUMNS.NAME"), minWidth: 100 },
  { id: "age", label: i18n("CREATE_TEAM.COLUMNS.AGE"), minWidth: 50 },
  {
    id: "position",
    label: i18n("CREATE_TEAM.COLUMNS.POSITION"),
    minWidth: 100
  },
  {
    id: "special_ability",
    label: i18n("CREATE_TEAM.COLUMNS.SPECIAL_ABILITY"),
    minWidth: 100
  },
  { id: "actions", label: "", minWidth: 100 }
];

export default availableColumns;
