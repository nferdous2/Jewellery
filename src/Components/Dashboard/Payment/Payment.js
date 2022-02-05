import { faSadTear, faSmileBeam, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Payment = () => {
    return (
        <div className='payment-container'>
            <h2 >We Are Sorry!</h2>
            <div className="iconsS">
                <FontAwesomeIcon icon={faSadTear}></FontAwesomeIcon>

            </div>
            <h3><span className='heading'>O</span>ur <span className='heading'>P</span>ayment <span className='heading'>S</span>ystem <span className='heading'>Is</span> <span className='heading'>C</span>urrently <span className='heading'>U</span>navailable</h3>
            <div className="iconsS">
                <FontAwesomeIcon icon={faSmileBeam}></FontAwesomeIcon>

            </div>
        </div>
    );
};

export default Payment;