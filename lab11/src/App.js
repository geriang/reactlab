import React from 'react';
import ProductProvider from './ProductProvider';
import './App.css';
import ProductListing from './ProductListing';
import AddProduct from './AddProduct';

function App() {

  

  return (
    <>
      <div className='container'>
        <h1>Products</h1>
        <ProductProvider>
          <ProductListing/>
          <AddProduct/>
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
