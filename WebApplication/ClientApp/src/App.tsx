import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import Logo from './components/logo/logo';
import { CatalogPage } from './pages/catalog-page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />  
        <Routes>   
        <Route path='/' element={<CatalogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
