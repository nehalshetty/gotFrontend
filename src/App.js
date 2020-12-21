import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/layout";
import BattlesPage from "./pages/battles";
import HomePage from "./pages/home";
import BattleCountContext from "./context/battleCount";
import getCount from "./services/battle/getCount";

function App() {
  const totalBattles = useState(null);

  useEffect(() => {
    updateTotalBattleState();
  }, []);

  const updateTotalBattleState = async () => {
    let res = await getCount();
    let [battleCount, updateBattleCount] = totalBattles;

    if (res.status === "success") {
      updateBattleCount(res.value.total);
    }
  };

  return (
    <div className="App">
      <BattleCountContext.Provider
        value={{ totalBattles, updateTotalBattleState }}>
        <Layout>
          <Switch>
            <Route exact path="/battles" component={BattlesPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" exact component={() => <>Page Not found</>} />
          </Switch>
        </Layout>
      </BattleCountContext.Provider>
    </div>
  );
}

export default App;
