import React, { useState } from "react";

import Header from "./Header";
import ConfigForm from "./ConfigForm";
import ConfigList from "./ConfigList";
import Footer from "./Footer";

function App() {

  function addConfig(newConfig){
    console.log(newConfig);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <ConfigForm onAdd={addConfig}/>
        <ConfigList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
