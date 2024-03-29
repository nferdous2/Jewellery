import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './PurchasePage.css';
const PurchasePage = () => {
    const [product, setProduct] = useState([]);
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://jewellery-server-roan.vercel.app/orders/${serviceId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [serviceId])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://jewellery-server-roan.vercel.app/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order place successfully,Go to Dashboard to check your order')
                    reset()
                    window.location.href = 'https://jewellery1-5636e.web.app/'


                }
            })
        console.log(data);
    }

    return (
        <div>
            <form className='purchase-bg text-white' onSubmit={handleSubmit(onSubmit)} >
                <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" data-aos-duration="2000">Place <span className="heading">Your</span> Order</h2>
                <input {...register("productId")} value={product.name} defaultValue={serviceId} />
                <input {...register("price")} placeholder="Price" required />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required />
                <input {...register("address")} placeholder="Address" required />
                <input {...register("phone")} placeholder="Phone Number" required />
                <input type="email" {...register("email")} placeholder="Email" required />
                <input type="submit" value='Confirm Order' className='btn btn-allP m-2' />
            </form>
        </div>
    );
};

export default PurchasePage;