import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React from "react";

function PersonalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First name"
            id="firstname"
            name="firstname"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last name"
            id="lastname"
            name="lastname"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            id="Phone Number"
            name="Phone"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            id="Address1"
            name="Address1"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            id="City"
            name="City"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            id="country"
            name="country"
            variant="standard"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
  <FormLabel >Gender</FormLabel>
  <RadioGroup
    defaultValue="female"
  >
    <FormControlLabel value="Female" control={<Radio />} label="Female" />
    <FormControlLabel value="Male" control={<Radio />} label="Male" />
    <FormControlLabel value="Other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalDetails
