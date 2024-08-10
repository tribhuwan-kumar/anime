import React from 'react';

const Alarm = () => {
    return (
        <div>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22H22" stroke="#aca1b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z" stroke="#aca1b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M12 2V3" stroke="#aca1b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M4 4L5 5" stroke="#aca1b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M20 4L19 5" stroke="#aca1b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default Alarm;