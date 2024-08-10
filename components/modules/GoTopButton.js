import React from 'react';
import ArrowUp from '../icons/ArrowUp';

const GoTopButton = () => {
    const upHandler = () => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
    }
    return (
        <div className='bg-emerald-800 hover:bg-emerald-700 transition w-10 flex justify-center 
            p-2 rounded-full ml-4 mb-4 cursor-pointer' onClick={upHandler}>
            <ArrowUp />
        </div>
    );
};

export default GoTopButton;