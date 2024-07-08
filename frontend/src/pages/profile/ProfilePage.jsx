import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Profileform from "../../components/Profileform";
import style from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div>
      <Dialog
        open={open}
        scroll="body"
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
          <div className={style.Profileform}>
            <h2>Personal Informations</h2>
            <Profileform />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
