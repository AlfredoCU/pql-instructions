import { useState } from "react";

import { TOption } from "@/utils/types";
import { EOptions } from "@/utils/enums";
import usePageLoader from "@/utils/hooks";
import { Loader, Navbar } from "@/components";

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
    <>
      <Navbar option={option} handleOption={handleOption} />

      {option === EOptions.CREATE_TEAM && <h1>create team</h1>}
      {option === EOptions.SHOW_TEAM && <h1>Show teams</h1>}
    </>
  );
}
