import React from 'react';
import Image from 'next/image';
import spinner from '../../public/images/spinner.png';

const Loader = () => {
    return (
        <div className='flex justify-center items-center animate-spin mt-32'>
            <Image src={spinner}
            width={70}
            height={70} />
        </div>
    );
};

export default Loader;