import React from "react";
import { Card, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import {
  getNowPlayingMovies,
  getNowPlayingSeries,
  getTopRatedMovies,
} from "../services/fetchMovies";

export default function ListMovies({ typeMovies }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    if (typeMovies === "onGoingMovies") {
      getNowPlayingMovies().then((data) => {
        setMovies(data);
      });
    } else if (typeMovies === "onGoingSeries") {
      getNowPlayingSeries().then((data) => {
        setMovies(data);
      });
    } else if (typeMovies === "topRated") {
      getTopRatedMovies().then((data) => {
        setMovies(data);
      });
    }
  }, [typeMovies]);

  return (
    <Grid container spacing={2}>
      {movies.map((item, index) => (
        <Grid item md={2} sm={4} xs={6} key={index}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              alt="green iguana"
              width="342"
              height="400"
              src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
