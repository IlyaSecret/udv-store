import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import { HeaderedLayout } from './components/layouts/headered-layout';
import { CartPage } from './pages/cart-page/cart-page';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { LoginPage } from './pages/login-page/login-page';
import { OrdersPage } from './pages/orders-page/orders-page';
import { ProductPage } from './pages/product-page/product-page';
import { store } from './redux/store';

function App() {
  return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">     
            <Routes>    
              <Route path='/' element={<HeaderedLayout />} >
                <Route path='catalog' element={<CatalogPage />} />
                <Route path='orders' element={<OrdersPage />}></Route>
                <Route path='cart' element={<CartPage />}></Route>
                <Route path='catalog/:title' element={<ProductPage/>}></Route>
              </Route>
              <Route path='/sign-in' element={<LoginPage />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        </Provider>
  );
}

export default App;


