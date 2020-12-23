import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard.js";
import First from "./components/First.js";
import Second from "./components/Second.js";
import Third from "./components/Third.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" component={Form} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/first" component={First} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/third" component={Third} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
