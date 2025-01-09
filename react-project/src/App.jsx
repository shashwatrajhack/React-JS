import React, {Fragment} from "react";

function App() {
  return (
    <Fragment>
      <Header title="world is here" />
      <Header title="this world is beautiful" />
    </Fragment>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
