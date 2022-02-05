import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://glacial-refuge-18418.herokuapp.com/products', data)
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
                <input {...register("pic")} placeholder="Product Img Url" required data-aos="zoom-in-right" data-aos-duration="3000" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required data-aos="zoom-in-right" data-aos-duration="3000" />
                <input {...register("price")} placeholder="Price" required data-aos="zoom-in-right" data-aos-duration="3000" />
                <input type="submit" value='Add Product' className='btn btn-allP m-2' data-aos="zoom-in-right" data-aos-duration="3000" />
            </form>
        </div>
    );
};

export default AddProduct;