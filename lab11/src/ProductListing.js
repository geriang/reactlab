import React, { useContext } from 'react';
import ContextProduct from './ContextProduct';

export default function ProductListing() {

    const productContext = useContext(ContextProduct)


    return (
        <>
            <h2>Product Listing</h2>
            <ul className="list-group">
                {productContext.products().map((p) => {
                    return (
                        <div>
                            <li className="list-group-item">{p.product_name} - {p.cost}</li>
                        </div>
                    )
                })
                }
            </ul>
        </>
    )
}