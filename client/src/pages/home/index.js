import React, { useState } from "react";
import UserMenu from "@/components/UserMenu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  productDescription: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productCategory: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  productPrice: Yup.string()
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Switch" } };

function index() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userDetails } = useSelector((state) => state.user);

  const [isPro, setIsPro] = useState(false);

  const handleChange = (e) => {
    setIsPro(e.target.checked);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <UserMenu />

      <div
        style={{
          marginTop: "20px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>User Details</h2>
        <p>
          <strong>Full Name:</strong> {userDetails.fullName}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {userDetails.phoneNumber}
        </p>
        <p>
          <strong>Username</strong> {userDetails.userName}
        </p>
      </div>

      <Box component="span" sx={{ display: "block", marginTop: "20px" }}>
        <Button variant="contained" color="primary">
          Change Password
        </Button>
      </Box>
      <div
        style={{ marginBottom: "10px", marginTop: "50px", textAlign: "center" }}
      >
        Add Products <Switch onChange={handleChange} {...label} />
      </div>
      {isPro && (
        <div>
          <Button onClick={handleOpen}>Click To Add New Products</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Product Add Form
              </Typography>
              <Formik
                initialValues={{
                  productName: "",
                  productDescription: "",
                  productCategory: "",
                  productPrice: "",
                  productImage: "",
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
                        <Field placeholder="Product Name" name="productName" />
                        {errors.productName && touched.productName ? (
                          <div className="error">{errors.productName}</div>
                        ) : null}
                      </div>
                      <br></br>
                      <div className="field-container">
                        <Field
                          placeholder="Product Description"
                          name="productDescription"
                        />
                        {errors.productDescription &&
                        touched.productDescription ? (
                          <div className="error">
                            {errors.productDescription}
                          </div>
                        ) : null}
                      </div>
                      <br></br>
                      <div className="field-container">
                        <Field
                          placeholder="Product Category"
                          name="productCategory"
                        />
                        {errors.productCategory && touched.productCategory ? (
                          <div className="error">{errors.productCategory}</div>
                        ) : null}
                      </div>
                      <br></br>
                      <div className="field-container">
                        <Field placeholder="Product Price" name="productPrice" />
                        {errors.productPrice && touched.productPrice ? (
                          <div className="error">{errors.productPrice}</div>
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
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default index;
