import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

import { i18n } from "@/utils/helpers";

import "./CreateTeam.css";
import Form from "./components";

export default function CreateTeam() {
  const { register, handleSubmit, control, formState } = useForm({
    mode: "all"
  });

  const onSubmit = data => {
    console.log(data);
  };

  const { errors } = formState;

  return (
    <form
      onSubmit={e => {
        e.stopPropagation();
        handleSubmit(onSubmit)(e);
      }}
    >
      <Form register={register} errors={errors} />

      <p>table</p>

      <div className="create-team-container">
        <Button type="submit" variant="contained" color="warning">
          <p className="create-team-btn-txt">{i18n("COMMON.CREATE_TEAM")}</p>
        </Button>
      </div>
    </form>
  );
}
