import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
