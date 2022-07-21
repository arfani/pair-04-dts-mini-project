import React from "react";
import { Container, Card, Grid, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import CoverImage from "../components/CoverImage";
import { getMovieDetail } from "../services/fetchMovies";
import Footer from "../components/footer";

export default function DetailMovie() {
  let params = useParams();
  const [detail, setDetail] = React.useState({});
  React.useEffect(() => {
    getMovieDetail(params.id).then((data) => {
      setDetail(data);
    });
  }, [params.id]);

  return (
    <>
      <Header />
      <CoverImage coverUrl={detail?.backdrop_path}>
        <Grid container spacing={2}>
          <Grid item>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                width="342"
                height="400"
                src={`https://image.tmdb.org/t/p/w342${detail?.poster_path}`}
              />
            </Card>
          </Grid>
          <Grid item>
            <h1>{detail?.title}</h1>
            <h3>Release Date: {detail?.release_date}</h3>
            <h3>Genres: {detail?.genres?.map((data) => `${data.name}, `)}</h3>
            <Button variant="contained">Watch Trailer</Button>
            <h3>"{detail?.tagline}"</h3>
            <h3>Duration: {detail?.runtime} Minutes</h3>
            <h3>
              Studio:{" "}
              {detail?.production_companies?.map((data) => `${data.name}, `)}
            </h3>
            <h3>Status: {detail?.status}</h3>
          </Grid>
        </Grid>
      </CoverImage>
      <Container maxWidth="xl"></Container>
      <Footer />
    </>
  );
}
