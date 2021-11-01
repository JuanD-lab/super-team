import authService from "../services/authFetch";

/* Actions */
export const logIn = ({ email, password }) => {
    return async (dispatch) => {
        const { data: user } = await authService.login({
            email,
            password,
        });
        if (user === "Request failed with status code 401") {
            
        } else {
            window.localStorage.setItem(
                "userLoggedToken",
                JSON.stringify(user)
            );
        }
        dispatch({
            type: "LOG_IN",
            data: user,
        });
    };
};

export const setUserLogged = (user) => {
    return async (dispatch) => {
        dispatch({
            type: "SET_USER",
            data: user,
        });
    };
};

export const logOut = () => {
    return async (dispatch) => {
        window.localStorage.removeItem("userLoggedToken");
        window.location.href = `${window.location.href}`;
        dispatch({
            type: "LOG_OUT",
        });
    };
};

/* Reducer */
const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { user: action.data };
        case "SET_USER":
            return { user: action.data };
        case "LOG_OUT":
            return { user: {} };
        default:
            return state;
    }
};

export default authReducer;
