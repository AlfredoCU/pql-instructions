import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { TOption } from "@/utils/types";
import { EOptions } from "@/utils/enums";
import usePageLoader from "@/utils/hooks";
import { darkTheme } from "@/utils/helpers";
import { CreateTeam, Loader, Navbar } from "@/components";

export default function App() {
  const [option, setOption] = useState(EOptions.CREATE_TEAM);
  const [showView] = usePageLoader(5000);

  const handleOption = (option: TOption) => {
    setOption(option);
  };

  if (!showView) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar option={option} handleOption={handleOption} />

      {option === EOptions.CREATE_TEAM && <CreateTeam />}
      {option === EOptions.SHOW_TEAM && <h1>Show teams</h1>}
    </ThemeProvider>
  );
}
