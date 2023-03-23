import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const martialStatus = [
  {
    id: 1,
    value: "Single",
  },
  {
    id: 2,
    value: "Married",
  },
  {
    id: 3,
    value: "Divorced",
  },
  {
    id: 4,
    value: "Widow",
  },
];
function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState();
  const [newMartialStatus, setNewMartialStatus] = useState();

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First name"
            variant="standard"
            required
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last name"
            variant="standard"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="standard"
            required
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="standard"
            required
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="standard"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            variant="standard"
            required
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel required>Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={newMartialStatus}
            onChange={(e) => setNewMartialStatus(e.target.value)}
            select
            required
            label="Martial Status"
            defaultValue="Select your Martial Status"
            SelectProps={{
              native: true,
            }}
            sx={{ width: 200 }}
            variant="standard"
          >
            {martialStatus.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalDetails;
