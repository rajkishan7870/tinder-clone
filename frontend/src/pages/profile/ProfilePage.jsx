import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Profileform from "../../components/Profileform";
import style from "./ProfilePage.module.css";
import { blue } from "@mui/material/colors";

export default function ProfilePage() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleCancel(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Dialog open={open} scroll="body" PaperProps={{
        sx : {
          minWidth: "45%",
        }
      }}>
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
                onClick={handleSubmit}
                sx={{
                  textTransform: "none",
                  border: "1px solid black",
                  backgroundColor: "gray",
                  color: "black",
                  borderRadius: "10px"
                }}
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
