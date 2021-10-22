import "./App.css";
import { Route, Switch} from "wouter";
import Home from "pages/Home";
import Login from "pages/Login";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default App;
