import "./App.css";
import { Route, Switch } from "wouter";
import Home from "pages/Home";
import Login from "pages/Login";
import HerodDetails from "pages/HerodDetails";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/hero/:id" component={HerodDetails} />
            </Switch>
        </div>
    );
}

export default App;
