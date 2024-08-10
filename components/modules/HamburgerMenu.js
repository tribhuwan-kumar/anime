import React from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
    
    return (
        <div className='w-full bg-gray-700 absolute z-10 -top-7 h-48 left-0'>
            <div className=' flex flex-col items-center mt-10 '>
                <Link className='py-2' href='/animelist'>Anime List</Link>
                <Link className='py-2' href='/categories'>Category</Link>
                <Link className='py-2' href='/aboutus'>About us</Link>
            </div> 
        </div>
    );
};

export default HamburgerMenu;