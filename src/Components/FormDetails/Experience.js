import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const expectedSalary = [
  {
    salary: "10K-20K",
  },
  {
    salary: "30K-50K",
  },
  {
    salary: "50K-70K",
  },
  {
    salary: "70K-90K",
  },
  {
    salary: "90K-100K",
  },
  {
    salary: "100K-110K",
  },
];

function Experience({ handleChangeObject }) {
  const { user } = useSelector((state) => state.auth);
  const [experienceObject, setExperienceObject] = useState({
    checked: "",
    experience: "",
    salary: "10K-20K",
    jobCity: "",
    checked: false,
  });
  const [newObject, setNewObject] = useState({});
  useEffect(() => {
    let finalObject = {
      checked: checked,
      experience: experience,
      salary: salary,
      jobCity: jobCity,
      career: user.career,
      newDegreeLevel: user.newDegreeLevel,
      portfolio: user.portfolio,
      profile: user.profile,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      agreed: user.agreed,
      country: user.country,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      address: user.address,
      newMartialStatus: user.newMartialStatus,
    };
    setNewObject(newObject);
    handleChangeObject(finalObject);
  }, [experienceObject]);
  const handleChange = (event) => {
    event.preventDefault();
    setExperienceObject({
      ...experienceObject,
      [event.target.name]: event.target.value,
    });
  };

  const { checked, experience, salary, jobCity } = experienceObject;
  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel required>Work Experience</FormLabel>
            <RadioGroup
              name="experience"
              value={experience}
              onChange={(event) => handleChange(event)}
              sx={{ display: "flex" }}
            >
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            select
            name="salary"
            required
            value={salary}
            onChange={(event) => handleChange(event)}
            fullWidth
            variant="outlined"
            label="Expected Salary"
            defaultValue="Select your Expected Salary"
            SelectProps={{
              native: true,
            }}
          >
            {expectedSalary.map((option) => (
              <option>{option.salary}</option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="jobCity"
            value={jobCity}
            onChange={(event) => handleChange(event)}
            label="Preffered Job City"
            variant="outlined"
            required
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <FormControl sx={{ mt: 3 }}>
        <FormControlLabel
          control={<Checkbox onChange={(event) => handleChange(event)} />}
          label="I Hereby Apply for this role"
        />
      </FormControl>
    </React.Fragment>
  );
}

export default Experience;
