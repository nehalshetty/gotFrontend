import Layout from "./components/layout";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Layout>APP</Layout>

      <Switch>
        <Route exact path="/battles" component={() => <>sdsds</>} />
        <Route path="/roster/:number" component={<>scs</>} />
      </Switch>
    </div>
  );
}

export default App;
