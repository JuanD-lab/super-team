import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Login from "../pages/Login";

const initialState = {};
function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOG_IN":
            return { user: action.data };
        default:
            return state;
    }
}
function renderWithRedux(
    component,
    { startState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    };
}

describe("Login form", () => {
    test("validate correct mail format", async () => {
        const { getByPlaceholderText, getByText } = renderWithRedux(
            <Login />
        );

        await act(async () => {
            const emailInput = getByPlaceholderText(/Your email/i);
            fireEvent.blur(emailInput);
            fireEvent.change(emailInput, {
                target: { value: "examplegmail" },
            });
        });
        expect(getByText(/email must be a valid email/i)).toBeInTheDocument()
    });

    test("error message when the email field is not written", async () => {
        const { getByPlaceholderText, getByText } = renderWithRedux(
            <Login />
        );

        await act(async () => {
            const emailInput = getByPlaceholderText(/Your email/i);
            fireEvent.blur(emailInput);
        });
        expect(getByText(/email is a required field/i)).toBeInTheDocument()
    });

    test("error message when the password field is not written", async () => {
        const { getByPlaceholderText, getByText } = renderWithRedux(
            <Login />
        );

        await act(async () => {
            const passwordInput = getByPlaceholderText(/Your password/i);
            fireEvent.blur(passwordInput);
        });
        expect(getByText(/password is a required field/i)).toBeInTheDocument()
    });

    test("button say login", () => {
        const { getByRole } = renderWithRedux(<Login />);
        expect(getByRole("button")).toHaveTextContent("Log In");
    });
});
