import { I18n } from "i18n-js";

import { en, es } from "../lang";

const t = new I18n({ en, es });

const formatLocale = () => {
  const { language } = window.navigator;

  if (language.includes("en")) return "en";
  if (language.includes("es")) return "es";

  return "en";
};

const i18n = () => (translate: string) => {
  t.locale = typeof window !== "undefined" ? formatLocale() : "en";

  return t.t(translate);
};

export default i18n();
