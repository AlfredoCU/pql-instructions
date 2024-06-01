import classNames from "classnames";

import { i18n } from "@/utils/helpers";
import { TOption } from "@/utils/types";
import { EOptions } from "@/utils/enums";
import Home from "@/utils/svgs/home.svg?react";
import Teams from "@/utils/svgs/teams.svg?react";

import "./Navbar.css";
import Logo from "/images/pql_logo_loader.png";

type TNavbar = { option: TOption; handleOption: (option: TOption) => void };

export default function Navbar({ option, handleOption }: TNavbar) {
  return (
    <header>
      <nav className="navbar-container">
        <button
          type="button"
          onClick={() => handleOption(EOptions.CREATE_TEAM)}
          className={classNames("navbar-btn", {
            "navbar-btn-active": option === EOptions.CREATE_TEAM
          })}
        >
          <Home className="navbar-icon" />
          <p>{i18n("COMMON.CREATE_TEAM")}</p>
        </button>

        <img src={Logo} alt="logo" className="navbar-img" />

        <button
          type="button"
          onClick={() => handleOption(EOptions.SHOW_TEAM)}
          className={classNames("navbar-btn", {
            "navbar-btn-active": option === EOptions.SHOW_TEAM
          })}
        >
          <Teams className="navbar-icon" />
          <p>{i18n("COMMON.SHOW_TEAM")}</p>
        </button>
      </nav>
    </header>
  );
}
