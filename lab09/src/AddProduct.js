import React, {useState, useContext} from 'react';
import ProductContext from './ProductContexts';

export default function AddProduct() {

    const context = useContext(ProductContext);
    const [product_name, setProductName] = useState('');
    const [cost, setCost] = useState(0);

  

    const onAddProduct = () => {
        context.addProducts(product_name, cost)
    };

    return(
        <>
        <h1>Add New Product</h1>
        <div>
        <label>Product Name</label>
        <input
          type="text"
          name="product_name"
          value={product_name}
          onChange={(e)=>{setProductName(e.target.value)}}
        ></input>
      </div>
      <div>
        <label>Product Cost</label>
        <input
          type="text"
          name="cost"
          value={cost}
          onChange={(e)=>{setCost(e.target.value)}}
        ></input>
      </div>
      <button onClick={onAddProduct}>Add</button>
        </>
    )


}
