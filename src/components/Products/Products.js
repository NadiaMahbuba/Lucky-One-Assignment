import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './products.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

toast.configure();
const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState('')
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    //choose one for me button function
    const addRandom = (products) => {
        const product = products[Math.floor(Math.random() * products.length)];
        setRandom(product);
    }
    // const clickes = () => {
    //     addRandom(cart);
    //     //toast(random.name);
    // }
    //choose again button function
    const chooseAgain = () => {
        setCart([]);
    }
    //delete the random name
    const deleteRandom = () => {
        setRandom('');
    }
    //const notify = () => toast(random.name);
    return (
        <div className='container'>
            <div className='products_summary'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order_summary'>
                <h3>Selected items:{cart.length}</h3>
                {
                    cart.map(order => <Order
                        order={order}
                        key={order.id}
                    ></Order>)
                }
                <button onClick={() =>
                    addRandom(cart)

                }
                    className='btn-choice'>Choose 1 For Me</button>

                {
                    //showing the random name on ui
                    <div className='random-generate'>
                        <p>{random.name}</p>
                        <FontAwesomeIcon icon={faTrash} onClick={deleteRandom}></FontAwesomeIcon>
                    </div>
                }

                <ToastContainer />
                <br />

                <button onClick={chooseAgain} className='btn-reset'>Choose Again</button>
            </div>
        </div>
    );
};

export default Products;