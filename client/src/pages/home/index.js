import React from "react";
import UserMenu from "@/components/UserMenu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux'


function index() {
  const { userDetails } = useSelector(state => state.user);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <UserMenu />

      <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ marginBottom: "10px" }}>User Details</h2>
        <p><strong>Full Name:</strong> {userDetails.fullName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
        <p><strong>Username</strong> {userDetails.userName}</p>
      </div>

      <Box component="span" sx={{ display: "block", marginTop: "20px" }}>
        <Button variant="contained" color="primary">Change Password</Button>
      </Box>
    </div>
  );
}

export default index;
