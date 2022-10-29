import './App.css';
import NavBarPagina from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Provider from './context/CartContext';
import FotoIndex from './components/mock/fotoIndex';

function App() {
  return (
    <Provider>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBarPagina />
        </header>
        <Routes>
          <Route path='/' element={<FotoIndex />} />
          <Route path='/catalogo' element={<ItemListContainer greeting='Bienvenido a URBAN.' />} />
          <Route path='/marcas/:marcaName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/form' element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
