// App.js
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
