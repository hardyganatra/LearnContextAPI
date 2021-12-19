import React from "react";
import { AppContext } from "./App1";

export default function ChildComponent01() {
  const data = React.useContext(AppContext);
  // console.log(data, "ChildComponent01");
  const [state, setstate] = React.useState(data);
  console.log(state);
  React.useEffect(() => {
    setstate(data);
  }, [data]);
  return (
    <div
      style={{ height: "150px", border: "3px solid red", marginTop: "10px" }}
    >
      <br />
      <h3>This is child component</h3>
      {state.count}
    </div>
  );
}
