import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name On Card"
            variant="standard"
            required
            fullWidth
            name="card"
            id="card"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Card Number"
            variant="standard"
            required
            fullWidth
            name="number"
            id="number"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expiry Date"
            variant="standard"
            required
            fullWidth
            name="expire"
            id="expire"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="CVV"
            variant="standard"
            required
            fullWidth
            helperText="Last three digits on card(Back side)"
            name="cvv"
            id="cvv"
          ></TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
