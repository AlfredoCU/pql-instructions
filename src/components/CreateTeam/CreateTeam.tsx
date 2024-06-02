import { useEffect } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { i18n } from "@/utils/helpers";
import { availableColumns } from "@/utils/constants";
import { getPlayersAvailable } from "@/store/actions";
import IconCreate from "@/utils/svgs/create.svg?react";
import { playersAvailableSelector } from "@/store/selectors";

import "./CreateTeam.css";
import Form from "./components";
import Table from "../common/Table";

export default function CreateTeam() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm({ mode: "all" });

  const { playersAvailable, isFetching, error } = useSelector(
    playersAvailableSelector
  );

  const onSubmit = newData => {
    console.log(newData);
  };

  useEffect(() => {
    dispatch<any>(getPlayersAvailable());
  }, []);

  const { errors } = formState;

  return (
    <>
      {!isFetching && !error && (
        <form
          onSubmit={e => {
            e.stopPropagation();
            handleSubmit(onSubmit)(e);
          }}
        >
          <Form register={register} errors={errors} />

          <Table columns={availableColumns} rows={playersAvailable} />

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
      )}
    </>
  );
}
