import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ImLocation } from "react-icons/im";
import "./ViewJobModal.css";
import { Link } from "react-router-dom";
import {IoMdGlobe} from 'react-icons/io'

const ViewJobModal = (props) => {
  return (
    <div className="dialog-main-div">
      <Dialog
        open={Object.keys(props.job).length !== 0 ? true : false}
        className="dialog-main"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle className="dialog-content">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Apply @ {props.job.name} <a href={props.job.website + ""} target="_blank"><IoMdGlobe /></a>
            <IconButton onClick={props.closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent style={{ textAlign: "center", overflow:"hidden" }}>
          <Typography variant="h4">{props.job.title}</Typography>
        </DialogContent>
        <Box display="flex" margin="20px" justifyContent="space-around">
          <Typography variant="subtitle2">
            <ImLocation /> {props.job.location}
          </Typography>
          <Typography variant="subtitle2">Type : {props.job.type}</Typography>
          <Typography variant="subtitle2">Posted on : {props.job.time}</Typography>
          <Typography variant="subtitle2">Company: {props.job.name}</Typography>
        </Box>
        <h5 style={{marginLeft: "20px", marginTop:"10px"}}>About the Company</h5>
        <DialogContent style={{ textAlign: "justify", width: "100%" }}>
          {props.job.companyDescription}
        </DialogContent>
        <h5 style={{marginLeft: "20px", marginTop:"10px"}}>Job Description</h5>
        <DialogContent style={{ textAlign: "justify", width: "100%" }}>
          {props.job.description}
        </DialogContent>
        <DialogActions>
          <button variant="outlined" className="apply-btn">
            <Link className="apply-btn-dialog" to="/jobs/apply" target="_blank">
              Apply
            </Link>
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewJobModal;
