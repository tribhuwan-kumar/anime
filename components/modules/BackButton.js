import React from 'react';
import { useRouter } from 'next/router';
import Back from '../icons/Back';

const BackButton = () => {
    const router = useRouter();
    const backHandler = () => {
        router.back();
    };
    return (
        <div onClick={backHandler} className='flex hover:bg-emerald-800 bg-cyan-900 
        w-28 mt-12 rounded-lg items-center justify-center py-2'> 
                <Back />
                <button className='w-full font-semibold'>back</button>  
        </div>
    );
};

export default BackButton;