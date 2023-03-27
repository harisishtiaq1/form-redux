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
import React, { useEffect, useState } from "react";
const martialStatus = [
  {
    value: "Single",
  },
  {
    value: "Married",
  },
  {
    value: "Divorced",
  },
  {
    value: "Widow",
  },
];
function PersonalDetails({ handleChangeObject }) {
  const [userObject, setUserObject] = useState({});
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [gender, setGender] = useState();
  // const [newMartialStatus, setNewMartialStatus] = useState();
  // handleChangeObject = () => {
  //   console.log("use detail");
  //   console.log("use detail");
  //   console.log("use detail");
  //   console.log("use detail");
  //   console.log(userObject);
  //   setUserObject(userObject);
  // const { name, value } = event.target;
  // console.log("form in personal Details", form);
  // dispatch(personalData(userObject));
  // };
  useEffect(() => {
    console.log("handlechange object");
    console.log("handlechange object");
    console.log("handlechange object");
    console.log("handlechange object");
    console.log(handleChangeObject);
    handleChangeObject(userObject);
  }, [userObject]);

  const handleChange = (event) => {
    event.preventDefault();
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  console.log("userObject");
  console.log("userObject");
  console.log("userObject");
  console.log("userObject");
  console.log(userObject);
  const {
    firstName,
    lastName,
    phoneNumber,
    city,
    country,
    gender,
    address,
    newMartialStatus,
  } = userObject;
  // const handleSubmit ()

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            label="First name"
            variant="standard"
            required
            fullWidth
            value={firstName || ""}
            onChange={(event) => handleChange(event)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            label="Last name"
            variant="standard"
            required
            value={lastName}
            onChange={(event) => handleChange(event)}
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="standard"
            required
            name="phoneNumber"
            fullWidth
            value={phoneNumber}
            onChange={(event) => handleChange(event)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            variant="standard"
            required
            fullWidth
            value={address}
            onChange={(event) => handleChange(event)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            label="City"
            variant="standard"
            required
            fullWidth
            value={city}
            onChange={(event) => handleChange(event)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="country"
            label="Country"
            variant="standard"
            required
            fullWidth
            value={country}
            onChange={(event) => handleChange(event)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel required>Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              name="gender"
              value={gender}
              onChange={(event) => handleChange(event)}
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
            name="martialStatus"
            value={newMartialStatus}
            onChange={(event) => handleChange(event)}
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
              <option>{option.value}</option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalDetails;
