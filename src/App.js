import "./App.css";
import { Route, Switch } from "wouter";
import Home from "pages/Home";
import Login from "pages/Login";
import HerodDetails from "pages/HerodDetails";
import { Redirect } from "wouter";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogged } from "redux/authReducer";

function App() {
    const userState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const userLoggedToken = window.localStorage.getItem("userLoggedToken");
        if (userLoggedToken) {
            const user = JSON.parse(userLoggedToken);
            if (!userState.user) {
                dispatch(setUserLogged(user))
            }
        }
    }, [dispatch, userState.user]);

    const token = localStorage.getItem("userLoggedToken");

    return (
        <div className="App">
            <Switch>
                <Route path="/">
                    {token ? <Home /> : <Redirect to={"/login"} />}
                </Route>
                <Route path="/login">
                    {!token ? <Login /> : <Redirect to={"/"} />}
                </Route>
                <Route path="/hero/:id" component={HerodDetails} />
            </Switch>
        </div>
    );
}

export default App;
