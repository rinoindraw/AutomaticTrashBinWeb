import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import TrashBinOne from "./components/TrashBinOne/TrashBinOne";
import TrashBinTwo from "./components/TrashBinTwo/TrashBinTwo";
import TrashBinThree from "./components/TrashBinThree/TrashBinThree";
import Banner from "./components/Banner/Banner";

function App() {
  // State to control dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State to control whether the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(true); // Set to true initially, or false if you want it closed by default

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define CSS class for the App element
  const appClassName = `App ${darkMode ? "dark" : ""} ${
    sidebarOpen ? "sidebar-open" : "sidebar-closed"
  }`;

  return (
    <Router>
      <div className={appClassName}>
        <SideBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          sidebarClosed={sidebarOpen}
          handleSidebarToggle={toggleSidebar}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trashbin1" element={<TrashBinOne />} />
          <Route path="/trashbin2" element={<TrashBinTwo />} />
          <Route path="/trashbin3" element={<TrashBinThree />} />
          <Route path="/about" element={<Banner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
