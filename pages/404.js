import React from 'react';
import notFound from '../public/images/404.png';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
          <Image src={notFound} alt='404'
          width={228}
          height={140}/> 
          <p className='font-bold text-3xl mt-2'>Page not found</p> 
        </div>
    );
};

export default NotFound;