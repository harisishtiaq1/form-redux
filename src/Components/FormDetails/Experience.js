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
import React, { useState } from "react";

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
  {
    salary: "10K-20K",
  },
];

function Experience() {
  const [checked, setChecked] = useState(false);
  const [experience, setExperience] = useState();
  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(checked, "checked");
  };
  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel required>Work Experience</FormLabel>
            <RadioGroup sx={{ display: "flex" }}>
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            select
            required
            fullWidth
            variant="outlined"
            label="Expected Salary"
            defaultValue="Select your Expected Salary"
            SelectProps={{
              native: true,
            }}
          >
            {expectedSalary.map((option) => (
              <option key={option.id} value={option.id}>
                {option.salary}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Preffered Job City"
            id="City"
            name="City"
            variant="outlined"
            required
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <FormControl sx={{ mt: 3 }}>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="I Hereby Apply for this role"
        />
      </FormControl>
    </React.Fragment>
  );
}

export default Experience;
