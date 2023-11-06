import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Conductores from './pages/home/Conductores';
import Pasajeros from './pages/home/Pasajeros';
import Viajes from './pages/home/Viajes';

function App() {
  console.log("testing");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} excact />
        <Route path='/conductores' element={<Conductores />} excact />
        <Route path='/pasajeros' element={<Pasajeros />} excact />
        <Route path='/viajes' element={<Viajes />} excact />
      </Routes>
    </Router>
  );
}

export default App;
