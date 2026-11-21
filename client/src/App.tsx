import { Outlet } from 'react-router';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app-page">
     <Navbar />
     <Outlet />
    </div>
  )
}

export default App
