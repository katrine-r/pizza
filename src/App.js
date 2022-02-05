import './App.scss';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
