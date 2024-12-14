import React, { useState } from 'react'
import ProductContext from './ProductContext'

const  ProductProvider  = (  props : any) => {
    const [ cart , setCart] = useState([])
    return (
        <ProductContext.Provider
        value={{
            cart , setCart
        }}>
    
    {props.children}
    </ProductContext.Provider>
    )
}
export default ProductProvider;