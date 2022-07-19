import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <Grid container>
        <Grid item md={6} xs={12}>
          Title Info 1 Info 2 Info 3 Description
        </Grid>
        <Grid item md={6} xs={12}>
          Photo
        </Grid>
      </Grid>
    </Paper>
  );
}
