import React from "react";
import "./App.scss";
import Header from "./component/Header/Header";
import MainPage from "./component/MainPage/MainPage";
import Catalog from "./component/Catalog/Catalog";
import Product from "./component/Catalog/Product/Product";
import Informations from "./component/Informations/Informations";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Catalog /> */}
      <Product />
      {/* <MainPage /> */}
      <Informations />
    </div>
  );
};

export default App;
