import "./App.css";
import MainPage from "./pages/Main.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar.component";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <Navbar></Navbar>
        <div className="flex-1 flex">
          <Switch>
            <Route path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
