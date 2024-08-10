import React from 'react';
import Bookmarks from '../modules/Bookmarks';
import BackButton from '../modules/BackButton';
import Image from 'next/image';
//icons:
import Play from '../icons/Play';
import Video from '../icons/Video';
import Time from '../icons/Time';
import CategoryIcon from '../icons/CategoryIcon';

const AnimeDetails = (props) => {
    const{id, name, age, episode, rate, quality, introduction, 
        details, manga, television} = props;
    
    return (
        <>
        <BackButton />
        <div className='flex flex-col lg:flex-row lg:justify-start 
        mt-12 gap-7 justify-center items-center'>
            <div>
                <Image className='rounded-lg' src={`/images/${id}.jpg`} width={300} 
                height={424} alt='anime-image' />
            </div>
            <div>
                <h3 className='sm:text-4xl lg:text-left text-center text-2xl text-blue-100'>{name} ({details[2].Year})</h3>
            <div className='grid lg:grid-cols-4 sm:px-12 lg:px-0 sm:grid-cols-2 gap-2 lg:gap-0 mt-4 lg:mt-2
            grid-cols-1 lg:place-items-start place-items-center content-center
            text-blue-400 mt-2 font-semibold text-lg'>
                <p className='pt-1'>Age: {age ? age : 'everyone'}</p>
                <p className='lg:-ml-6 pt-1'>Rate: {rate} / 10</p>
                <p className='pt-1'>Episodes: {episode}</p>
                <p className='border p-2 text-sm rounded-lg text-center border-blue-500'>{television[4]}</p>
            </div>
            <div className='flex sm:flex-row lg:justify-start flex-col justify-center 
            text-center sm:text-left mt-6 lg:mt-2 gap-2'>
                <div className='flex sm:justify-start justify-center items-center gap-2'>
                    <CategoryIcon/>
                    <p>Genre: {details[1].Genre} </p> 
                </div>
                <span className='hidden sm:block'>|</span>
                <div className='flex sm:justify-start justify-center items-center gap-1'>
                    <Time />
                    <p>Length: {details[3].Length}</p>
                </div>
            </div>
            <div className='flex lg:justify-start justify-center mt-2 sm:mt-0 items-center gap-2'>
                <Video />
                <p>Quality: {quality}</p>
            </div>
            <div className='lg:mt-4 mt-6 sm:w-128 w-auto'>
                <p className='text-justify'><span className='font-semibold text-blue-400'>
                    Introduction: </span>{introduction}</p> 
            </div>
            <div className='mt-6'>
                <p>{television[0]}</p>
                <p>Countery: {details[0].Country}</p>
                <Bookmarks />
                <div className='lg:w-128 lg:mx-0 mx-auto w-full'>
                    <button className='w-full flex justify-center items-center gap-2 bg-emerald-600 
                        text-blue-100 font-bold sm:text-2xl text-base py-3 rounded-xl 
                        hover:bg-emerald-500 transition mt-6'><Play />Watch Online
                    </button>
                </div> 
            </div>
            </div>
        </div>
        
        <div className='mb-10 mt-2 lg:flex lg:justify-start lg:flex-col'>
            <h4 className='font-semibold text-center lg:text-left text-lg text-blue-400'>Manga:</h4>
            {manga.map((item, index)=> (
                <ul key={index} className=' lg:mx-0 lg:w-72 lg:text-left text-center sm:w-128 py-2 w-auto mx-auto'>
                    <li className={index % 2 ? 
                        'bg-slate-800 pl-4 py-2':'bg-slate-600 text-gray-300 pl-4 py-2'}>
                        {item}</li>
                </ul>
            ))}
        </div>
        </>
    );
};

export default AnimeDetails;