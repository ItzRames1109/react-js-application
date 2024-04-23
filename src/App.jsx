import React from "react";
import Welcome from "./Components/Welcome";
import SignIn from "./Components/SignIn";
import CreateAccount from "./Components/CreateAccount";
import AccountSettings from "./Components/AccountSettings";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route exact path="/" Component={Welcome}></Route>
          <Route path="/signin" Component={SignIn}></Route>
          <Route path="/createaccount" Component={CreateAccount}></Route>
          <Route path="/accountsettings" Component={AccountSettings}></Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
