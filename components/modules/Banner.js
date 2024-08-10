import React from 'react';
import Image from 'next/image';
import banner from '../../public/images/banner.jpg';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

const Banner = () => {
    return (
        <div className='relative flex flex-col-reverse md:flex-row px-4 md:px-10 justify-between items-center mt-6'>
            <div className='w-full md:w-80'>
                <h2 className='titles'>Watch Anime Online Free</h2>
                <p className='text-justify'>It all started in 2016 when we officially launched the system
                of file sharing. We boast HD quality as well as fast download speed. 
                To provide our users with multiple choices, we use links from third 
                party sources like mp4upload, vidstream, streamtape, mycloud. 
                </p>
                <div className='bg-cyan-900 mt-4 hover:bg-emerald-800 transition  rounded-xl py-3'>
                    <Link className='font-bold text-blue-300 w-full flex justify-center' href='/animelist'>Anime List</Link>
                </div>
            </div>
            <div>
                <Image
                src={banner}
                alt='banner'
                width={600}
                
                />
            </div>
            <div className='absolute top-0 md:top-10 right-0'>
                <SocialMedia />
            </div>  
        </div>
    );
};

export default Banner;