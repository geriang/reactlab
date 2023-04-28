import React, { useState, useMemo } from 'react';
import ContextProduct from './ContextProduct'

export default function ProductProvider(props) {

    const [productData, setProductData] = useState([{

        id: 1,
        product_name: "ACME Anvils",
        cost: 99.99
    },
    {
        id: 2,
        product_name: "ACME Screwdriver",
        cost: 25.00
    },
    {
        id: 3,
        product_name: "ACME Nails",
        cost: 3.0

    }])

    const context = useMemo(() => {

        return {
            products: () => {
                return productData;
            },
            addProduct: (productName, cost) => {
                setProductData(
                    [...productData, {
                        id: Math.floor(Math.random() * 100000),
                        product_name: productName,
                        cost: cost
                    }]
                )
            }
        }
    }, [productData])


    // const context = {
    //     products: products,
    //     addProduct: addProduct,
    // };

    return (
        <>
            <ContextProduct.Provider value={context}>
                {props.children}
            </ContextProduct.Provider>

        </>
    )


}
