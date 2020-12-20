import Layout from "./components/layout";
import { NavLink, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BattlePage from "./pages/battle";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/battle" component={BattlePage} />
          <Route path="/" exact component={() => <>Home</>} />
          <Route path="*" exact component={() => <>Page Not found</>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
