import { i18n } from "../helpers";
import { TPosition } from "../types";

function getText(option: string) {
  return i18n(`CREATE_TEAM.SPECIAL_ABILITY.${option}`);
}

export default function specialAbilityOption(position: TPosition) {
  const listPosition = {
    Seeker: [getText("ONE"), getText("TWO")],
    Beater: [getText("THREE"), getText("FOUR")],
    Keeper: [getText("FIVE"), getText("SIX")],
    Chaser: [getText("SEVEN"), getText("EIGHT")]
  };

  return listPosition[position];
}
