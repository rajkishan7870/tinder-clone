import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import Style from "./login.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from 'axios'
export default function Login() {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (details.email === "" && details.password === "") {
      setError("Enter your email and password");
      return;
    } else if (details.email === "" && details.password !== "") {
      setError("Enter your email first");
      return;
    } else if (details.email !== "" && details.password === "") {
      setError("Enter your password first");
      return;
    }

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const userData = {
      email: details.email,
      password: details.password,
    };
    axios
      .post("/api/login", userData, config)
      .then((res) => {
        if (res.data.token) {
          navigate("/profile")
        }
      }).catch(err => {
      console.log(err)
      });
      
    navigate("/profile")
  }
  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
            position: "relative",
          },
        }}
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
              Sign In
            </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5rem",
                alignSelf: "center",
                textTransform: "none",
              }}
              variant="outlined"
            >
              <FcGoogle size={20} />
              &nbsp;Sign in with Google
            </Button>

            <TextField
              id="outlined-basic"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            {error && (
                          <Alert
                              sx={{
                                width: "50%",
                                alignSelf: "center",  
                              }}
                              severity="error">
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              className={Style.submit}
              onClick={handleSubmit}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              variant="outlined"
              className={Style.submit}
              onClick={(e) => {
                e.preventDefault();
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Forgot password
            </Button>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              Don't have an account?{" "}
              <Link to={"/signUp"} underline="none">
                Sign up
              </Link>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
