import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://glacial-refuge-18418.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    }

    return (
        <div id="addReview">
            <form className='purchase-bg text-white' onSubmit={handleSubmit(onSubmit)} >
                <h2 data-aos="zoom-in-up" data-aos-duration="1200"><span className='heading'>We</span> Value <span className='heading'>Your </span>Opinion</h2> <span className="iconsS"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </span>
                <input {...register("img")} placeholder="Img Url" required data-aos="zoom-in-up" data-aos-duration="3000" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required data-aos="zoom-in-up" data-aos-duration="3000" />
                <input {...register("opinion")} placeholder="Opinion" required data-aos="zoom-in-up" data-aos-duration="3000" />
                <input type="submit" value='Add Review' className='btn btn-allP m-2' data-aos="zoom-in-up" data-aos-duration="3000" />
            </form>
        </div>
    );
};

export default AddReview;