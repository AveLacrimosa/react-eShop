import { useState, useEffect } from 'react'
import productsService from '../../services/productsService'

import styles from './ProductsList.module.css'
import OneProduct from '../oneProduct/OneProduct'

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    //funkcija, kuri gauna response is services fetch()
    //ir saugo i state gauta reiksme
    const getProducts = () => {
        productsService().then((res) => {
            setProducts(res);
        })
    }

    useEffect(() => {
        getProducts();
    }, []);
    console.log(products)

    return (
        <div className={styles.productList}>
            <OneProduct items={products}/>
        </div>
    )
}

export default ProductsList