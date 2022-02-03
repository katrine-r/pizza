import './App.scss';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartEmptyPage from './pages/CartEmptyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/cart-page' element={<CartPage />} />
            <Route path='/cart-empty-page' element={<CartEmptyPage />} />
          </Route>
          {/* <Route path='*' to={'/'} /> */}
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* <CartPage /> */}
      {/* <CartEmptyPage /> */}
    </div>
  );
}

export default App;
