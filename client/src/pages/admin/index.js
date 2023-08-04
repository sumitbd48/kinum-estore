import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productCategory: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productPrice: Yup.string().required("Required"),
  productDescription: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const Admin = () => {
  const handleAddProducts = (values) => {
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };

  return (
    <div>
      <h1 className="signupTitle">Admin Add Products</h1>
      <Formik
        initialValues={{
          productName: "",
          productDescription: "",
          productCategory: "",
          productPrice: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleAddProducts(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="field-container">
              <Field placeholder="productName" name="productName" />
              {errors.productName && touched.productName ? (
                <div className="error">{errors.productName}</div>
              ) : null}
            </div>
            <br></br>
            <div className="field-container">
              <Field placeholder="productCategory" name="productCategory" />
              {errors.productCategory && touched.productCategory ? (
                <div className="error">{errors.productCategory}</div>
              ) : null}
            </div>
            <br></br>
            <div className="field-container">
              <Field placeholder="productPrice" name="productPrice" />
              {errors.productPrice && touched.productPrice ? (
                <div className="error">{errors.productPrice}</div>
              ) : null}
            </div>
            <br></br>
            <div className="field-container">
              <Field
                type="textarea"
                placeholder="productDescription"
                name="productDescription"
              />
              {errors.productDescription && touched.productDescription ? (
                <div className="error">{errors.productDescription}</div>
              ) : null}
            </div>
            <br></br>
            <button className="regBtn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Admin;
