import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@mui/material";

import "./styles/carousel.css";

function Item(props) {
  return (
    <div className="carousel__d">
      <img src="" alt="" className="caro_img" />
      <div className="caro__details">
        <h6 className="cast__name"></h6>
        <h6 className="character"></h6>
      </div>
    </div>
  );
}

export default function CustomCarousel(props) {
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
