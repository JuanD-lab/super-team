import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
    const validationsSquema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });
    const renderError = (message) => <p className="text-danger">{message}</p>;
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationsSquema}
                onSubmit={(values) => {
                    //submit function
                  }}
            >
                <Form className="form-group">
                    <div className="mt-4">
                        <span>Email:</span>
                        <Field
                            type="email"
                            name="email"
                            className="form-control col-sm-5"
                            placeholder="user@example.com"
                        />
                        <ErrorMessage name="email" render={renderError} />
                        <span>Password:</span>
                        <Field
                            type="password"
                            name="password"
                            className="form-control col-sm-5 "
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" render={renderError} />
                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default Login;
