import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from "@mui/material";

import { i18n } from "@/utils/helpers";
import { ITeams } from "@/utils/types";
import { getPlayersPerTeam, getTeams } from "@/store/actions";
import { playersPerTeamSelector, teamsSelector } from "@/store/selectors";
import { playersColumns } from "@/utils/constants";

import "./ShowTeams.css";
import Table from "../common/Table";
import EmptyState from "../common/EmptyState";
import ImageSelectATeam from "/images/teams.jpeg";
import ImageEmptyState from "/images/hero-harry-with-broom.webp";

export default function ShowTeams() {
  const dispatch = useDispatch();
  const [idTeam, setIdTeam] = useState("");
  const { teams, isFetching, error } = useSelector(teamsSelector);

  const {
    playersPerTeam,
    isFetching: isFetchingPlayer,
    error: errorPlayer
  } = useSelector(playersPerTeamSelector);

  const handleChange = (event: SelectChangeEvent) => {
    setIdTeam(event.target.value as string & null);
  };

  useEffect(() => {
    dispatch<any>(getTeams());
  }, []);

  useEffect(() => {
    if (idTeam) {
      dispatch<any>(getPlayersPerTeam(idTeam));
    }
  }, [idTeam]);

  return (
    <>
      {!isFetching && !error && (
        <>
          {(teams as ITeams[]).length > 0 ? (
            <>
              <div className="select-container">
                <FormControl>
                  <InputLabel id="id-team-select-label" color="warning">
                    {i18n("SHOW_TEAMS.INPUTS.TEAMS")}
                  </InputLabel>

                  <Select
                    id="id-team"
                    label="id-team"
                    color="warning"
                    value={`${idTeam}`}
                    onChange={handleChange}
                    labelId="id-team-select-label"
                  >
                    {(teams as ITeams[]).map((item: ITeams) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {idTeam ? (
                <>
                  {!isFetchingPlayer && !errorPlayer && (
                    <Table columns={playersColumns} rows={playersPerTeam} />
                  )}
                </>
              ) : (
                <EmptyState
                  round
                  src={ImageSelectATeam}
                  message={i18n("SHOW_TEAMS.SELECT_A_TEAM")}
                />
              )}
            </>
          ) : (
            <EmptyState
              src={ImageEmptyState}
              message={i18n("SHOW_TEAMS.EMPTY_STATE")}
            />
          )}
        </>
      )}
    </>
  );
}
