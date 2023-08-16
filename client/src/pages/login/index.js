import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { setUserDetails } from '../../redux/reducerSlices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const Login = () => {
  const dispatch = useDispatch()
  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      dispatch(setUserDetails(result));
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="container">
      <h1 className="signupTitle">Login</h1>
      <Formik
        initialValues={{
          phoneNumber: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          // console.log(values);
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="centered-form">
              <div className="field-container">
                <Field placeholder="Phone Number" name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="error">{errors.phoneNumber}</div>
                ) : null}
              </div>
              <br></br>
              <div className="field-container">
                <Field type="password" placeholder="Password" name="password" />
                {errors.password && touched.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </div>
              <br></br>
              <div className="btnContainer">
                <button className="regBtn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
