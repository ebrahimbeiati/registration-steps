// import React, { Component } from "react";
// import { AppBar, TextField, Button } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";

// const styles = {
//   button: {
//     margin: 15,
//   },
// };

// export class FormUserDetails extends Component {
//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   render() {
//     const { values, handleChange } = this.props;

//     return (
//       <ThemeProvider theme={theme}>
//         {" "}
//         {/* Provide the theme */}
//         <React.Fragment>
//           <AppBar title="Enter User Details" />
//           <TextField
//             hintText="Enter Your First Name"
//             floatingLabelText="First Name"
//             onChange={handleChange("firstName")}
//             defaultValue={values.firstName}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Last Name"
//             floatingLabelText="Last Name"
//             onChange={handleChange("lastName")}
//             defaultValue={values.lastName}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Email"
//             floatingLabelText="Email"
//             onChange={handleChange("email")}
//             defaultValue={values.email}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Occupation"
//             floatingLabelText="Occupation"
//             onChange={handleChange("occupation")}
//             defaultValue={values.occupation}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your City"
//             floatingLabelText="City"
//             onChange={handleChange("city")}
//             defaultValue={values.city}
//           />
//           <br />
//           <TextField
//             hintText="Enter Your Bio"
//             floatingLabelText="Bio"
//             onChange={handleChange("bio")}
//             defaultValue={values.bio}
//           />
//           <br />
//           <Button
//             variant="contained" // Use variant to style the button
//             color="primary" // Set the color as needed
//             style={styles.button}
//             onClick={this.continue}
//           >
//             Continue
//           </Button>
//         </React.Fragment>
//       </ThemeProvider>
//     );
//   }
// }

// export default FormUserDetails;
import React, { Component } from "react";
import { AppBar, TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Change the primary color as needed
    },
  },
  // Add more theme customizations as needed
});

const styles = {
  button: {
    margin: 15,
  },
};

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            helperText="Enter Your First Name"
            label="First Name" // Use label instead of floatingLabelText
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            helperText="Enter Your Last Name"
            label="Last Name" // Use label instead of floatingLabelText
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            helperText="Enter Your Email"
            label="Email" // Use label instead of floatingLabelText
            onChange={handleChange("email")}
            defaultValue={values.email}
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
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
