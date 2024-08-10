import React from 'react';
import SocialOne from '../icons/SocialOne';
import SocialTwo from '../icons/SocialTwo';
import SocialThree from '../icons/SocialThree';

const SocialMedia = () => {
    return (
        <div className='flex-col'>
           <div className='bg-sky-800 social-container'>
                <a className='social-media' target='_blank' href='#' rel='noreferrer'><SocialOne /></a>
            </div>
           <div className='bg-blue-600 social-container'>
                <a className='social-media' target='_blank' href='#' rel='noreferrer'><SocialTwo /></a>
            </div>
           <div className='bg-green-600 social-container'>
                <a className='social-media' target='_blank' href='#' rel='noreferrer'><SocialThree /></a>
            </div>
        </div>
    );
};

export default SocialMedia;