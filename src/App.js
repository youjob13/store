import React from 'react';
import "./App.scss";
import Header from './component/Header/Header';
import MainPage from "./component/MainPage/MainPage";
import Catalog from "./component/Catalog/Catalog";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Catalog /> */}
      <MainPage />
    </div>
  );
}

export default App;
