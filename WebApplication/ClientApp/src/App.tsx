import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import { AccuralUcoinsPage } from './components/admin-interface/admin-pages/accural-ucoins/accural-ucoins';
import { AdminHeaderedLayout } from './components/layouts/admin-headered-layout';
import { HeaderedLayout } from './components/layouts/user-headered-layout';
import { CartPage } from './pages/cart-page/cart-page';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { LoginPage } from './pages/login-page/login-page';
import { OrdersPage } from './pages/orders-page/orders-page';
import { ProductPage } from './pages/product-page/product-page';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GetUcoinsPage } from './pages/get-ucoins-page/get-ucoins-page';
import { UcoinRequestPage } from './components/admin-interface/admin-pages/ucoin-requests-page/ucoin-requests-page';

function App() {
  

  return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">     
            <Routes>    
              <Route path='/' element={<HeaderedLayout />} >
                <Route path='catalog' element={<CatalogPage />} />
                <Route path='orders' element={<OrdersPage />}></Route>
                <Route path='cart' element={<CartPage />}></Route>
                <Route path='catalog/:title' element={<ProductPage/>}></Route>
                <Route path='get-ucoins' element={<GetUcoinsPage />}></Route>
                <Route path='orders' element={<OrdersPage/>}></Route>
              </Route>
              <Route path='/sign-in' element={<LoginPage />}></Route>
            </Routes>
            <Routes>
              <Route path='/admin' element={<AdminHeaderedLayout/>}>
                <Route path='accural-ucoins' element={<AccuralUcoinsPage />}></Route>
                <Route path='ucoin-requests' element={<UcoinRequestPage />}></Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
        </PersistGate>
        </Provider>
  );
}

export default App;


