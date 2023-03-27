import {
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
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
  const [newObject,setNewObject]=({})
  // const [career, setCareer] = useState();
  // const [newDegreeLevel, setNewDegreeLevel] = useState();
  // const [portfolio, setPortfolio] = useState();
  // const [profile, setProfile] = useState();
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  const handleChange = (event) => {
    event.preventDefault();
    setNewObject({
      ...newObject,
      [event.target.name]: event.target.value,
    });
  };
  const {
    career,
    newDegreeLevel,
    portfolio,
    profile,
    checked,
  } = newObject;
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
          control={<Switch name="checked" checked={checked} onChange={(event)=>handleChange(event)} />}
          label="Agreed"
        />
      </FormControl>
    </React.Fragment>
  );
}

export default Qualifications;
