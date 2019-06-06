import ReactDOM from "react-dom";
import Header from "./Header";
import User from "./User";
import List from "./List";
import Footer from "./Footer";
import Star from "./Star"
import Badge from "./Badge"
import React, { useState, useEffect, useCallback } from "react";

import "./styles.css";

function App() {
  const [itemList, setItemList] = useState([]);

  const handleItems = values => {
    setItemList(values)
  }
  useEffect(() => {

  }, [itemList]);

  return (
    <div className="App">
      <Header />
      <Star count={itemList}/>
      <div className="container App-container">
        <div className="row">
          <div className="col-sm">
            <User />
          </div>
          <div className="col-sm">
            <Badge count={itemList}/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <List propsList={handleItems}/>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
