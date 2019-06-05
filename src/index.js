import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import User from "./User";
import List from "./List";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <List />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
