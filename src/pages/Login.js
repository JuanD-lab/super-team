import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { logIn } from "../redux/authReducer";
import Button from "components/Common/Button";

function Login() {
    const dispatch = useDispatch();

    const validationsSquema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    const renderErrorMsg = (message) => (
        <p className="text-danger">{message}</p>
    );

    return (
        <>
            <div className="container-sm">
                <div className="my-3">
                    <span className="h1">SuperTeam</span>
                </div>
                <h1 className="text-success">
                    Welcome, log in to create your super team!
                </h1>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationsSquema}
                    onSubmit={(values) => {
                        dispatch(logIn(values));
                    }}
                >
                    <Form className="form-group">
                        <div className="mt-4">
                            <Field
                                type="email"
                                name="email"
                                className="form-control col-sm-5 mb-3"
                                placeholder="Your email"
                                autoComplete="section-login email"
                            />
                            <ErrorMessage
                                name="email"
                                render={renderErrorMsg}
                            />
                            <Field
                                type="password"
                                name="password"
                                className="form-control col-sm-5 mb-3"
                                placeholder="Your password"
                                autoComplete="section-login current-password"
                            />
                            <ErrorMessage
                                name="password"
                                render={renderErrorMsg}
                            />
                            <Button
                                type="submit"
                                classType="success"
                                label="Log In"
                            />
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Login;
