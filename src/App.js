import './App.css';
import NavBarPagina from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBarPagina />
        </header>
            <ItemListContainer greeting='Bienvenido a URBAN.'/>
            <ItemDetailContainer />
      </div>
  );
}

export default App;
