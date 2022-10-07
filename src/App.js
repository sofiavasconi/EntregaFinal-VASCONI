import logo from './logo.svg';
import './App.css';
import NavBarPagina from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBarPagina />
        </header>
            <ItemListContainer greeting='Bienvenido a URBAN.'/>
      </div>
  );
}

export default App;
