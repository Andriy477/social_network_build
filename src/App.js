import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppNav from "./components/AppNav";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import Dialogs from "./components/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music";
import News from "./components/News";
import Settings from "./components/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <AppHeader />
        <AppNav />
        <div className="app-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={AppContent} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
