import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conta from './pages/Conta';
import Home from './pages/Home';
import ContaInfo from './pages/ContaInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conta/' element={<ContaInfo />}/>
        <Route path='/conta/:id' element={<Conta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
