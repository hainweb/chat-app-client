import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CheckPasswordPage from './pages/CheckPasswordPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/check-password" element={<CheckPasswordPage />} />
          <PrivateRoute path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
