import {
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const careerLevel = [
  {
    value: "Entry Level",
  },
  {
    value: "Intermediate",
  },
  {
    value: "Experienced Professional",
  },
  {
    value: "Department Head",
  },
  {
    value: "Project Manager",
  },
  {
    value: "Team lead",
  },
];
const degreeLevel = [
  {
    name: "Non-Matriculation",
  },
  {
    name: "Intermediate/A-Level",
  },
  {
    name: "Matriculation/O-Level",
  },
  {
    name: "Bachelors",
  },
  {
    name: "Masters",
  },
  {
    name: "M-phil/MS",
  },
  {
    name: "PHD/Dectorate",
  },
  {
    name: "Certification",
  },
  {
    name: "Diploma",
  },
  {
    name: "Short Course",
  },
];
function Qualifications({ handleChangeQualifications}) {
  const { user } = useSelector((state) => state.auth);
  console.log("user from use selector");
  console.log("user from use selector");
  console.log("user from use selector");
  console.log("user from use selector");
  console.log(user);
  const [qualificationObject, setQualificationObject] = useState({});
  const [newObject, setNewObject] = useState({});

  useEffect(() => {
    let finalObject = {
      career: career,
      newDegreeLevel: newDegreeLevel,
      portfolio: portfolio,
      profile: profile,
      checked: checked,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      country: user.country,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      address: user.address,
      newMartialStatus: user.newMartialStatus,
    };
    setNewObject(finalObject);
    handleChangeQualifications(finalObject);
  }, []);
  const handleChange = (event) => {
    event.preventDefault();
    setQualificationObject({
      ...qualificationObject,
      [event.target.name]: event.target.value,
    });
  };
  const { career, newDegreeLevel, portfolio, profile, checked } =
    qualificationObject;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Qualifications
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="career"
            select
            required
            value={career}
            onChange={(event) => handleChange(event)}
            label="Career Level"
            SelectProps={{
              native: true,
            }}
            sx={{ width: 200 }}
            variant="standard"
          >
            {careerLevel.map((option) => (
              <option>{option.value}</option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="newDegreeLevel"
            select
            required
            value={newDegreeLevel}
            onChange={(event) => handleChange(event)}
            label="Degree Level"
            SelectProps={{
              native: true,
            }}
            sx={{ width: 200 }}
            variant="standard"
          >
            {degreeLevel.map((option) => (
              <option>{option.name}</option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="portfolio"
            label="Website/Portfolio"
            variant="outlined"
            value={portfolio}
            onChange={(event) => handleChange(event)}
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="profile"
            label="Your Linkedin Profile"
            variant="outlined"
            value={profile}
            onChange={(event) => handleChange(event)}
            required
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <FormControl>
        <FormControlLabel
          control={
            <Switch
              name="checked"
              checked={checked}
              onChange={(event) => handleChange(event)}
            />
          }
          label="Agreed"
        />
      </FormControl>
    </React.Fragment>
  );
}

export default Qualifications;
