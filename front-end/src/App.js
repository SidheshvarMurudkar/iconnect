import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Card>
        <Switch>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route to="/login">
            <Login />
          </Route>
        </Switch>
      </Card>
    </>
  );
}

export default App;
