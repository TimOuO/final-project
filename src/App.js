import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import MenuPage from "./pages/MenuPage";
import BranchPage from "./pages/BranchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/aboutus">
          <AboutUsPage />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/branch">
          <BranchPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
