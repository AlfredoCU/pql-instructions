import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import { i18n } from "@/utils/helpers";

import "./Form.css";

type TForm = {
  readonly errors: any;
  readonly register: Function;
};

export default function Form({ register, errors }: TForm) {
  return (
    <Grid container spacing={2} className="form-container">
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          name="name"
          color="warning"
          variant="outlined"
          id="outlined-basic"
          error={errors?.name?.message}
          helperText={errors?.name?.message}
          label={i18n("CREATE_TEAM.INPUTS.NAME")}
          {...register("name", { required: i18n("COMMON.FIELD_REQUIRED") })}
        />
      </Grid>

      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          name="slogan"
          color="warning"
          variant="outlined"
          id="outlined-basic"
          {...register("slogan")}
          label={i18n("CREATE_TEAM.INPUTS.DESCRIPTION")}
        />
      </Grid>
    </Grid>
  );
}
