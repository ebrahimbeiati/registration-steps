import React, { Component } from "react";
import { AppBar, TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", 
    },
  },
});

const styles = {
  button: {
    margin: 15,
  },
};

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back =(e)=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            label="Occupation"
            helperText="Enter Your Occupation"
            onChange={handleChange("Occupation")}
            defaultValue={values.Occupation}
          />
          <br />
          <TextField
            label="City"
            helperText="Enter Your City"
            // Use label instead of floatingLabelText
            onChange={handleChange("City")}
            defaultValue={values.City}
          />
          <br />
          <TextField
            label="Bio"
            helperText="Enter Bio"
            // Use label instead of floatingLabelText
            onChange={handleChange("Bio")}
            defaultValue={values.bio}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormPersonalDetails;
