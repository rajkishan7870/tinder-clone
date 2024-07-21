import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Profileform from "../../components/Profileform";
import style from "./ProfilePage.module.css";
import { useRecoilValue } from "recoil";
import { profile_data } from "../../Recoil/profile";
import axios from "axios";

export default function ProfilePage() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const profileDataFromAtom = useRecoilValue(profile_data);

  useEffect(() => {
    let cookies = document.cookie;
    if (!cookies) {
      navigate("/login");
      return
    } else {
      const token = cookies.split("token=")[1];
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get("/api/profile", config).then((res) => {
        console.log(res)
      }).catch(err => {
        const errorMessage = err.response.data.message
        if (errorMessage == "Invalid or expired token") {
          navigate("/login")
        }
        else {
          navigate("/profile")
        }
      })
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(profileDataFromAtom);

    axios.post("/api/profile", profileDataFromAtom, config).then((response) => {
      console.log(response.status, profileDataFromAtom);
    });
    navigate("/suggestion");
  }
  function handleCancel(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Dialog
        open={open}
        scroll="body"
        PaperProps={{
          sx: {
            minWidth: "45%",
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
          <form onSubmit={handleSubmit}>
            <div className={style.Profileform}>
              <h2>Personal Informations</h2>
              <Profileform />
              <div className={style.button}>
                <Button
                  onClick={handleCancel}
                  sx={{
                    textTransform: "none",
                    border: "1px solid black",
                    backgroundColor: "gray",
                    color: "black",
                    borderRadius: "10px",
                  }}
                >
                  {" "}
                  Cancel{" "}
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  sx={{
                    textTransform: "none",
                    border: "1px solid black",
                    backgroundColor: "gray",
                    color: "black",
                    borderRadius: "10px",
                  }}
                >
                  {" "}
                  Submit{" "}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
