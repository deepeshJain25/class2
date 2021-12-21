import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import '../styles.css'

function App() {
  return (
    <div>
      <Header />
      <CreateArea  />
      <Footer />
    </div>
  );
}

export default App;
