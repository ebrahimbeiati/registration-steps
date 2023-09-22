import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar>
            <h1>Success</h1>
          </AppBar>
          <div>
            <h1>Thank You For Your Submission</h1>
            <p>We will get in touch through email for further instructions.</p>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Success;
