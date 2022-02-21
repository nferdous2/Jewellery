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
                    alert('Review added successfully');
                    reset();
                }
            })
    }

    return (
        <div id="addReview">
            <form className='purchase-bg text-white' onSubmit={handleSubmit(onSubmit)} >
                <h2 data-aos="zoom-in-up" data-aos-duration="1200"><span className='heading'>We</span> Value <span className='heading'>Your </span>Opinion</h2> <span className="iconsS"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </span>
                <input className='aa' {...register("img")} placeholder="Img Url" required />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required />
                <input {...register("opinion")} placeholder="Opinion" required />
                <select {...register("rating")} className="reviews">
                    <option value="">Rating</option>
                    <option value="1">1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                </select>
                {/* <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rating 1-5 Only" required /> */}
                <input type="submit" value='Add Review' className='btn btn-allP m-2' />
            </form>
        </div>
    );
};

export default AddReview;