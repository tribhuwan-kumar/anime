import React, {useState} from 'react';
import Link from 'next/link';
import Menu from '../icons/Menu';
import HamburgerMenu from '../modules/HamburgerMenu';
import GoTopButton from '../modules/GoTopButton';
import Cancel from '../icons/Cancel';

const Layout = ({children}) => {
    const[mobileMenu, setMobileMenu] = useState(false);
    const[showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <header className='max-w-6xl relative mx-auto flex items-center justify-between mt-6 px-10'>
                <div>
                    <Link className='text-3xl hover-links font-bold text-amber-300' href='/'>Anime Prime</Link>
                    <p className='text-amber-300 text-xs
                     italic'>your true source of watching anime!</p>
                </div>
                <div className='md:flex md:gap-12 hidden md:block'>
                    <Link className='hover-links' href='/animelist'>Anime List</Link> 
                    <Link className='hover-links' href='/categories'>Category</Link>
                    <Link className='hover-links' href='/aboutus'>About Us</Link>      
                </div>
                <div onClick={() => setMobileMenu(!mobileMenu)}  className={mobileMenu ? 'block': 'md:hidden'}>
                    <button onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? <div className='absolute z-20 top-0'> <Cancel /> </div> :
                        <div> <Menu /> </div>}
                    </button>
                    <div onClick={() => setShowMenu(!showMenu)}
                        className={mobileMenu ? 'block': 'hidden'}>
                            <HamburgerMenu/>
                    </div>
                </div> 
            </header>
            <div className='max-w-6xl mx-auto min-h-screen px-10'>
                {children}
            </div>
            <GoTopButton />
            <footer className='w-full bg-gray-900'>
                <div>
                    <p className='text-sm text-center py-4'>© 2023. All Rights Reserved.</p>
                </div>
            </footer>
        </div>  
    );
};

export default Layout;