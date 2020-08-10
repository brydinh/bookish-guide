import React, { useState } from "react";

import Header from "./Header";
import CreateConfig from "./CreateConfig";
import ConfigList from "./ConfigList";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <CreateConfig />
        <ConfigList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
