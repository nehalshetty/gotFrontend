import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import BattlesPage from "./pages/battles";
import HomePage from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/battles" component={BattlesPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" exact component={() => <>Page Not found</>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
