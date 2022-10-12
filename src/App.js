import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CheckOut from './pages/checkout/CheckOut';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop'; 

import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={ <Home /> }
                    />
                    <Route
                        path="/contact"
                        element={ <Contact /> }
                    />
                    <Route
                        path="/shop"
                        element={ <Shop /> }
                    />
                    <Route
                        path="/checkout"
                        element={ <CheckOut /> }
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
