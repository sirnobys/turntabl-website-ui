import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { LandingPage } from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import { AboutUs } from "./pages/AboutUsPage";
import { Contact } from "./pages/ContactPage";
import { Services } from "./pages/ServicesPage";
import { EventsPage } from "./pages/EventsPage";
import { BlogPage } from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
