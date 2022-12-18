import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { SnipcartProvider } from 'use-snipcart';

import type { AppProps } from 'next/app';
import Carousel from 'react-bootstrap/Carousel';
import dumyData from './dumpData';
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';

import AllProduct from './AllProduct.js';
import { StoreProvider } from './Store.js';

export default function App({ Component, pageProps }: AppProps) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`http://localhost:8080/product/`)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SnipcartProvider>
        <StoreProvider>
          <AllProduct.Provider value={{ products }}>
            <Component {...pageProps} />
          </AllProduct.Provider>
        </StoreProvider>
      </SnipcartProvider>
    </>
  );
}