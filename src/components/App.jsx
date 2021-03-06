import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Keeper from "./Keeper";
import Weather from "./Weather";
import {Route , Redirect} from "react-router-dom";
import '../styles.css'

function App() {
  
  return (
    <div>
      <Header />
      <Route path="/keeper" component={Keeper}/>
      <Route path="/weather" component={Weather}/>
      <Redirect to ='/keeper'/>
      <Footer />
    </div>
  );
}
 
export default App;
