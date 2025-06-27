import React from 'react';
import { Link } from 'react-router';
// import logo from '../../../src/assets/'

const ProFastLogo = () => {
    return (
        <Link to='/'>
        <div className='flex items-end'>
            <img className='mb-2  ' src="https://i.postimg.cc/gcXkvXgM/image.png" alt="" />
            <p className='text-3xl -ml-2 font-extrabold'>ProFast</p>
        </div>
        </Link>
    );
};

export default ProFastLogo;