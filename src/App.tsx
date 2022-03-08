import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/UI/pages/HomePage';
import { Provider } from 'react-redux'
import store from './components/utils/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
