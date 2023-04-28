import React, { useState } from 'react';
import ProductContext from './ProductContexts';
import ProductListing from "./ProductListing";
import AddProduct from "./AddProduct";


import './App.css';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "ACME Anvils",
      cost: 9.99
    },
    {
      id: 2,
      product_name: "ACME Hammers",
      cost: 19.99
    },
    {
      id: 3,
      product_name: "ACME Screwdrivers",
      cost: 29.99
    }
  ]);

  const context = {
    getProducts: () => {
      return products
    },
    addProducts: (product_name, cost) => {
      let id = Math.floor(Math.random()*10000+9999)
      setProducts([...products, {
          "id" : id,
          "product_name" : product_name,
          "cost": cost
        } ]
      )
    }
  }

  
    return (
      <>
      <ProductContext.Provider value={context}>
        
          <ProductListing />
          <AddProduct />

      </ProductContext.Provider>
      </>
    );
  }


export default App;
