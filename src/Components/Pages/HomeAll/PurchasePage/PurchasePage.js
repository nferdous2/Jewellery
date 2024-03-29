import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './PurchasePage.css';

const PurchasePage = () => {
    const [product, setProduct] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://jewellery-server.onrender.com/orders/${serviceId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [serviceId])

    // Get the product details 
    const name = new URLSearchParams(window.location.search).get('name');
    const quantity = parseInt(new URLSearchParams(window.location.search).get('quantity'));
    const totalPrice = parseInt(new URLSearchParams(window.location.search).get('totalPrice').replace(/,/g, ''));

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://jewellery-server.onrender.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order placed successfully. Go to Dashboard to check your order.');
                    reset();
                    window.location.href = 'https://jewellery1-5636e.web.app';
                }
            })
    };

    return (
        <div>
            <form className='purchase-bg text-white' onSubmit={handleSubmit(onSubmit)}>
                <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                    Place <span className="heading">Your</span> Order
                </h2>
                <input label="Product Name" type="text" {...register('productName')} value={name} readOnly />
                <input label="Quantity" type="text" {...register('quantity')} value={quantity} readOnly />
                <input label="Total Price" type="number" {...register('price')} value={totalPrice} readOnly />
                <input {...register("address")} placeholder="Address" required />
                <input {...register("phone")} placeholder="Phone Number" required />
                <input type="submit" value='Confirm Order' className='btn btn-allP m-2' />
            </form>
        </div>
    );
};

export default PurchasePage;
