import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RequestForm from './components/RequestForm';
import AdminDashboard from './components/AdminDashboard';
import Hero from './components/Hero'; // Import Hero

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Netdoc Ambulance</p>
      </footer>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
