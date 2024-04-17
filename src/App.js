import Counter from "./components/Counter";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header>
        <Counter />
      </Header>
    </Fragment>
  );
}

export default App;
