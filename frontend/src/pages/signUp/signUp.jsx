import React, { useState } from "react";
import Style from "./signUp.module.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0,
    DOB: "",
  });
  function handleClose() {
    setOpen(false);
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const userData = {
      name: details.name,
      email: details.email,
      password: details.password,
      phone: details.phone,
      DOB: details.DOB,
    };
    axios
      .post("/api/user", userData, config)
      .then((response) => {
        console.log(response.status);
      });
    navigate("/login");
  }
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          height: "90vh",
          padding: "0rem 1rem 1rem 1rem",
          borderRadius: "1.5rem",
          minWidth: "40%",
          position: "relative",
        },
      }}
      scroll="paper"
    >
      <DialogActions>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon sx={{ color: "black" }} />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <form className={Style.root}>
          <Typography
            variant="h4"
            sx={{ alignSelf: "center", fontWeight: "bold" }}
          >
            Sign Up
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
              console.log(details)
            }}
            sx={{
              width: "60%",
              alignSelf: "center",
            }}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            sx={{
              width: "60%",
              alignSelf: "center",
            }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            sx={{
              width: "60%",
              alignSelf: "center",
            }}
          />
          <TextField
            label="Phone"
            name="phone"
            type="number"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            sx={{
              width: "60%",
              alignSelf: "center",
            }}
          />
          <div>
          <Typography variant="caption">
            <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: "30%" }}>
              Date of birth
            </Typography>
          </Typography>
          <TextField
            name="DOB"
            type="date"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            sx={{
              width: "60%",
              alignSelf: "center",
              marginLeft: "20%"
            }}
          />
          </div>
          <Button
            type="submit"
            variant="contained"
            className={Style.submit}
            sx={{
              textTransform: "none",
              width: "50%",
              alignSelf: "center"
            }}
            onClick={handleSubmit}
          >
            Next
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
