import React, { Component } from 'react';
import { ThemeProvider } from "@mui/styles";
import {AppBar} from '@mui/material';
import Button from '@mui/material/Button'; // Import Button instead of RaisedButton
import { TextField } from '@mui/material';

const styles = {
  button: {
    margin: 15,
  },
};


export class FormUserDetails extends Component {
    continue = e =>{
      e.preventDefault();
      this.props.nextStep();
    }
  render() {
    const {values, handleChange} = this.props;

    return (
      <ThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details"/>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          /><br/>
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          /><br/>
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          /><br/>
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          /><br/>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          /><br/>
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          /><br/>
          <Button
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
        
      </ThemeProvider>
    )
  }
}

export default FormUserDetails
