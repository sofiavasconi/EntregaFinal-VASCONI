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
      <main>
        <ItemListContainer greeting='Bienvenido a URBAN.'/>
      </main>
      
    </div>
  );
}

export default App;
