import Intro from "./components/top/top";
import Middle from "./components/middle/middle";
import Bottom from "./components/bottom/bottom";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Intro />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
