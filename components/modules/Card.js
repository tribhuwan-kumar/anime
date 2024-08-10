import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Star from '../icons/Star';
//function:
import { shortenTitle } from '@/helper/functions';

const Card = (props) => {
    const{id, name, age, rate} = props;
    return (
        <div className='mb-2'>
            <Link href={`/animelist/${id}`}>
                <div className='relative hover:scale-110 shadow-md hover:opacity-70 transition duration-500'>
                    <Image className='rounded-lg'
                    src={`/images/${id}.jpg`} 
                    width={220}
                    height={320}/> 
                <div className='absolute bg-stone-950 left-4 px-1 pb-1 rounded-b-lg 
                bg-opacity-80 top-0 z-10'>
                    <p className='text-sm'>{age ? age : null}</p>
                </div>
                <div className='absolute bg-cyan-900 rounded-b-lg w-full h-20 pl-4 bottom-0 z-10'>
                    <div className='flex items-center pt-2 gap-2'>
                        <Star />
                        <p className='text-slate-300 text-sm'>Rate: {rate}</p>
                    </div>
                    <h4 className='font-semibold text-blue-300'>{shortenTitle(name)}</h4>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;