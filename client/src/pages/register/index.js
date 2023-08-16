import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

export const Register = () => {
  const registerUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      console.log("Post response:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="container">
      <h1 className="signupTitle">Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          phoneNumber: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          registerUser(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="centered-form">
              <div className="field-container">
                <Field placeholder="firstName" name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div className="error">{errors.firstName}</div>
                ) : null}
              </div>
              <br></br>
              <div className="field-container">
                <Field placeholder="lastName" name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div className="error">{errors.lastName}</div>
                ) : null}
              </div>
              <br></br>
              <div className="field-container">
                <Field placeholder="email" name="email" type="email" />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <br></br>
              <div className="field-container">
                <Field placeholder="Phone Number" name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="error">{errors.phoneNumber}</div>
                ) : null}
              </div>
              <br></br>
              <div className="field-container">
                <Field placeholder="username" name="username" />
                {errors.username && touched.username ? (
                  <div className="error">{errors.username}</div>
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
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
