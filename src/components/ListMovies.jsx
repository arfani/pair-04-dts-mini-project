import React from "react";
import { Card, Grid, 
  // CardHeader
 } from "@mui/material";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import {
  getNowPlayingMovies,
  getNowPlayingSeries,
  getTopRatedMovies,
} from "../services/fetchMovies";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <Grid item md={2} key={index}>
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
