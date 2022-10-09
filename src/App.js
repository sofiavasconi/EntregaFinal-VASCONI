import './App.css';
import NavBarPagina from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBarPagina />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido a URBAN.'/>} />
          <Route path='/catalogo' element={<ItemListContainer />} />
          <Route path='/marcas/:marcaName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
