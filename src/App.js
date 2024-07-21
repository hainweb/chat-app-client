import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import HomePage from './pages/Home';
import CheckPasswordPage from './pages/CheckPasswordPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
         
          <Route path="/check-password" element={<CheckPasswordPage />} />
          <PrivateRoute path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
