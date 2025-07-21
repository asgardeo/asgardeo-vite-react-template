import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ProtectedRoute } from '@asgardeo/react-router';
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute redirectTo='/'>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
