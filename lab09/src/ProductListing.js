import React, { useContext } from 'react';
import ProductContext from './ProductContexts';

export default function ProductListing() {
    let context = useContext(ProductContext)


    return (
        <>
            <ul>
                {context.getProducts().map(p => {
                    return (
                        <div key={p.id}>
                            <li>{p.product_name}</li>
                            <li>{p.cost}</li>
                        </div>
                    )
                })}
            </ul>
        </>
    );

}
