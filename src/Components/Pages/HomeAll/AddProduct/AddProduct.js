import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://jewellery-server.onrender.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    }

    return (
        <div id='addProduct'>
            <form className='addProduct-bg text-white' onSubmit={handleSubmit(onSubmit)}>
                <h2 data-aos="flip-right" data-aos-duration="1200"> Add <span className='heading'>A</span> Product</h2>
                <input {...register("pic")} placeholder="Product Img Url" required />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required />
                <input {...register("price")} placeholder="Price" required />
                <input type="submit" value='Add Product' className='btn btn-allP m-2' />
            </form>
        </div>
    );
};

export default AddProduct;