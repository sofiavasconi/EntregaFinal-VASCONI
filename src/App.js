import './App.css';
import NavBarPagina from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBarPagina />
        </header>
        <Routes>
            <Route path='/marcas/:marcaName' element={<ItemListContainer greeting='Bienvenido a URBAN.'/>} />
            <Route path='/catalogo' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
