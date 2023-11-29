import './App.css';
import Add from './components/Add';
import Crud from './components/Crud';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Crud />} />
          <Route path='/create' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
