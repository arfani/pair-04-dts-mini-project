<<<<<<< HEAD
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Header />
      <Main />
=======
import Navbar from "./components/navbar"
import Home from "./components/home"
import Footer from "./components/footer"
import { Routes, Route } from "react-router-dom"
import FormLogin from "./components/forms"

function App() {
  return (
    <>
    <Home />
>>>>>>> main
    </>
  );
}

export default App;
