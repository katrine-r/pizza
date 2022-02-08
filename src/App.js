import './App.scss';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout';
import { Provider } from 'react-redux';
import store from './store/reducers'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='/cart-page' element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
