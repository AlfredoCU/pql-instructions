import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { i18n } from "@/utils/helpers";
import { IPlayers } from "@/utils/types";
import { availableColumns } from "@/utils/constants";
import IconCreate from "@/utils/svgs/create.svg?react";
import { playersAvailableSelector, teamsSelector } from "@/store/selectors";
import { createTeam, getPlayersAvailable } from "@/store/actions";

import "./CreateTeam.css";
import Form from "./components";
import Table from "../common/Table";
import ImageGame from "/images/game.png";
import EmptyState from "../common/EmptyState";

export default function CreateTeam() {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayers[] | []>([]);
  const { register, handleSubmit, formState, reset } = useForm({ mode: "all" });

  const { createTeam: success } = useSelector(teamsSelector);
  const { playersAvailable, isFetching, error } = useSelector(
    playersAvailableSelector
  );

  const onSubmit: SubmitHandler<FieldValues> = newData => {
    dispatch<any>(createTeam({ ...newData, players } as any));
    reset();
  };

  const handlePlayers = (newPlayers: IPlayers[] | []) => {
    setPlayers(newPlayers);
  };

  useEffect(() => {
    dispatch<any>(getPlayersAvailable());
  }, [success]);

  const { errors } = formState;

  return (
    <>
      {!isFetching && !error && (
        <>
          {(playersAvailable as IPlayers[]).length > 0 ? (
            <form
              onSubmit={e => {
                e.stopPropagation();
                handleSubmit(onSubmit)(e);
              }}
            >
              <Form register={register} errors={errors} />

              <Table
                specialAbility
                rows={playersAvailable}
                columns={availableColumns}
                handlePlayers={handlePlayers}
              />

              <div className="create-team-container">
                <Button
                  type="submit"
                  color="warning"
                  variant="contained"
                  startIcon={<IconCreate width={20} />}
                >
                  <p className="create-team-btn-txt">
                    {i18n("COMMON.CREATE_TEAM")}
                  </p>
                </Button>
              </div>
            </form>
          ) : (
            <EmptyState
              round
              src={ImageGame}
              message={i18n("CREATE_TEAM.EMPTY_STATE")}
            />
          )}
        </>
      )}
    </>
  );
}
