import React from "react";
import "./App.scss";
import Header from "./component/Header/Header";
import MainPage from "./component/MainPage/MainPage";
import Catalog from "./component/Catalog/Catalog";
import Product from "./component/Catalog/Product/Product";
import Informations from "./component/Informations/Informations";
import Footer from "./component/Footer/Footer";
import Filter from "./component/Filter/Filter";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Catalog /> */}
      {/* <Product /> */}
      <MainPage />
      <Informations />
      {/* <Filter /> */}
      <Footer />
    </div>
  );
};

export default App;
