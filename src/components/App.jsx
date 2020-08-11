import React from "react";

import Header from "./Header";
import ConfigForm from "./ConfigForm";
import ConfigList from "./ConfigList";
import Footer from "./Footer";

// TODO: Edit/Delete 
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <ConfigForm />
        <ConfigList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
