import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

function Review() {
  const products = [
    {
      name: "Product 1",
      desc: "A nice thing",
      price: "1080 RS",
    },
    {
      name: "Product 2",
      desc: "Apples",
      price: " 450 RS",
    },
    {
      name: "Product 3",
      desc: "Oranges",
      price: "108 RS",
    },
    {
      name: "Product 4",
      desc: "Kiwi Fruit",
      price: "350 RS",
    },
    { name: "Shipping", desc: "", price: "Free" },
  ];
  // const address = [
  //   "New",
  //   "Islamadbad",
  //   "Laboratory",
  //   "Nawaz",
  //   "Chowk",
  //   "Kamalia",
  // ];
  // const details = [
  //   { name: "card type", details: "Master card" },
  //   { name: "card holder", details: "Muhammad Haris Ishtiaq" },
  //   { name: "card Number", details: "xxxx-xxxx-xxxx-7392" },
  //   { name: "Expiry Date", details: "07/2027" },
  // ];
  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Order Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.desc}
            ></ListItemText>
            <Typography>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
          Shipping
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default Review;
