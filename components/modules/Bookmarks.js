import React from 'react';
import Heart from '../icons/Heart';
import Badge from '../icons/Badge';
import Alarm from '../icons/Alarm';

const Bookmarks = () => {
    return (
        <div className='flex mt-4 gap-4'>
            <button className='md:p-3 p-2 hover:bg-slate-700 transition bg-slate-800 rounded-lg'><Heart /></button> 
            <button className='md:p-3 p-2 hover:bg-slate-700 transition bg-slate-800 rounded-lg'><Badge /></button>
            <button className='md:p-3 p-2 hover:bg-slate-700 transition bg-slate-800 rounded-lg'><Alarm /></button>    
        </div>
    );
};

export default Bookmarks;