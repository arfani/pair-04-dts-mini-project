import Navbar from "./components/navbar"
import Home from "./components/home"
import Footer from "./components/footer"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
      <Navbar />
        <Route path="/" element={<Home />}>
        </Route>
      <Footer />
      </Routes>
    </>
  );
}

export default App;
