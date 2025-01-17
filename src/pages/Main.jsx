import React from "react";
import { Container } from "@mui/material";

import CustomCarousel from "../components/Carousel";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <CustomCarousel />
      <Container maxWidth="xl">
        <h1>On Going Movies</h1>
        <ListMovies typeMovies="onGoingMovies" />
        <h1>On Going Series</h1>
        <ListMovies typeMovies="onGoingSeries" />
        <h1>Top Rated</h1>
        <ListMovies typeMovies="topRated" />
      </Container>
      <Footer />
    </>
  );
}
