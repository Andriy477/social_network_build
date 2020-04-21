import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppNav from "./components/AppNav";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import Dialogs from "./components/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <AppHeader />
      <AppNav />
      <div className="app-content">
        {/*<AppContent />*/}
        <Dialogs />
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
