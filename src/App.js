import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Booking from "./Views/Booking";
import "./App.css";
import PageLoader from "./Views/PageLoader";
import BookingConfirmation from "./Views/Booking/BookingConfirmation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
