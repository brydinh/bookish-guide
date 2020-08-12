import React from "react";

import Header from "./Header";
import ConfigForm from "./ConfigForm";
import ConfigList from "./ConfigList";
import Footer from "./Footer";

// TODO: cleanup UI, clean up css, filter, export
function App() {
  return (
    <div>
        <Header />
        <ConfigForm />
        <ConfigList />
        <Footer />
    </div>
  );
}

export default App;
