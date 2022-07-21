import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";

import * as fetchMovies from "../services/fetchMovies";
import "./styles/carousel.css";

function Item(props) {
  return (
    <div
      className="carousel_image"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
      }}
    >
      <div className="nav">
        <h3>{props.item.title}</h3>
        <h4>{props.item.overview}</h4>
        <div className="back__btn">
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}

export default function CustomCarousel() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetchMovies.getTrendings().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <Carousel animation="slide" indicators={false}>
      {movies.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
}
