import React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import AppNav from "./AppNav";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";

const App = () => {
  return (
    <div className="app-wrapper">
      <AppHeader />
      <AppNav />
      <AppContent />
      <AppFooter />
    </div>
  );
};

export default App;
