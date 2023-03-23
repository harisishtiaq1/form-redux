import {
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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
function Qualifications() {
  const [career, setCareer] = useState();
  const [newDegreeLevel, setNewDegreeLevel] = useState();
  const [portfolio, setPortfolio] = useState();
  const [profile, setProfile] = useState();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
            value={career}
            onChange={(e) => setCareer(e.target.value)}
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
            select
            required
            value={newDegreeLevel}
            onChange={(e) => setNewDegreeLevel(e.target.value)}
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
            label="Website/Portfolio"
            variant="outlined"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Your Linkedin Profile"
            variant="outlined"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <FormControl>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Agreed"
        />
      </FormControl>
    </React.Fragment>
  );
}

export default Qualifications;
