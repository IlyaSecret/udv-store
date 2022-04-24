import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import { AdminHeaderedLayout } from './components/layouts/admin-headered-layout';
import { HeaderedLayout } from './components/layouts/user-headered-layout';
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
            <Routes>
              <Route path='/admin' element={<AdminHeaderedLayout/>}>

              </Route>
            </Routes>
          </div>
        </BrowserRouter>
        </Provider>
  );
}

export default App;


