import { Checkbox, FormControl, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const careerLevel = [
  {
    id: 1,
    value: "Entry Level",
  },
  {
    id: 2,
    value: "Intermediate",
  },
  {
    id: 3,
    value: "Experienced Professional",
  },
  {
    id: 4,
    value: "Department Head",
  },
  {
    id: 5,
    value: "Project Manager",
  },
  {
    id: 6,
    value: "Team lead",
  },
];
const degreeLevel = [
  {
    id: 1,
    value: "Non-Matriculation",
  },
  {
    id: 2,
    value: "Intermediate/A-Level",
  },
  {
    id: 3,
    value: "Matriculation/O-Level",
  },
  {
    id: 4,
    value: "Bachelors",
  },
  {
    id: 5,
    value: "Masters",
  },
  {
    id: 6,
    value: "M-phil/MS",
  },
  {
    id: 7,
    value: "PHD/Dectorate",
  },
  {
    id: 8,
    value: "Certification",
  },
  {
    id: 9,
    value: "Diploma",
  },
  {
    id: 10,
    value: "Short Course",
  },
];
function Qualifications() {
  const [career,setCareer]=useState();
  const [newDegreeLevel,setNewDegreeLevel]=useState();
  const [portfolio,setPortfolio]=useState();
  const [profile,setProfile]=useState()
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Qualifications
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            required
            label="Career Level"
            SelectProps={{
              native: true,
            }}
            sx={{ width: 200 }}
            variant="standard"
          >
            {careerLevel.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            required
            label="Degree Level"
            SelectProps={{
              native: true,
            }}
            sx={{ width: 200 }}
            variant="standard"
          >
            {degreeLevel.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Website/Portfolio"
            variant="outlined"
            required
            fullWidth
            name="expire"
            id="expire"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Your Linkedin Profile"
            variant="outlined"
            required
            fullWidth
            name="expire"
            id="expire"
          ></TextField>
        </Grid>
      </Grid>
      <FormControl>
      <FormControlLabel control={<Switch />} label="Agreed" />
      </FormControl>
    </React.Fragment>
  );
}

export default Qualifications;
