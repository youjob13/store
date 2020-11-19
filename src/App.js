import React from 'react';
import "./App.scss";
import Header from './component/Header/Header';
import MainPage from "./component/MainPage/MainPage";
import Catalog from "./component/Catalog/Catalog";
import Product from './component/Catalog/Product/Product';
import AboutMe from './component/Catalog/Product/AboutMe';
import Characteristic from './component/Catalog/Product/Characteristic';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Catalog /> */}
      <Product />
      <AboutMe />
      <Characteristic />
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
