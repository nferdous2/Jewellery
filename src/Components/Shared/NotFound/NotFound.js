import React from 'react';
import './NotFound.css'
import notfound from '../../../Images/notfound1.gif'
const NotFound = () => {
    return (
        <div className='notfound-bg'>
            <div className='notfound-img'>
                <img style={{ width: '75%' }} src={notfound} alt="" />

            </div>

        </div >

    );
};

export default NotFound;