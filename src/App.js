import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Header/Nav";
import About from "./Components/Main/About/About";
import Menu from "./Components/Main/Menu/Menu";
import Order from "./Components/Main/Order/Order";
import Passion from "./Components/Main/Passion/Passion";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Header />
        <Passion />
        <About />
        <Menu />
      </Route>
      <Route exact path="/Orders">
        <Order />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
