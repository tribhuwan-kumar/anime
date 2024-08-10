import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../modules/Card';
import category from '../../public/images/category.jpg';
import mobilesize from '../../public/images/mobilesize.jpg';

const Categories = ({data}) => {
    const router = useRouter();
    const[query, setQuery] = useState({genre:"", year:""});

    useEffect(()=>{
        const {genre, year} = router.query;
        if(query.genre !== genre || query.year !== year) {
            setQuery({genre, year});
        }
    },[]);
    const changeHandler = (e) => {
        setQuery({...query, [e.target.name]: e.target.value});
    };
    const searchHandler = () => {
        router.push({
            query,
            pathname:'/categories',
        })
    };
    return (  
    <div>
        <div className='flex lg:flex-row flex-col-reverse items-center lg:items-start justify-between mt-12 mb-16'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center sm:shadow-lg sm:rounded-xl 
                gap-6 sm:bg-gray-900 sm:outline-dotted sm:outline-emerald-500 
                sm:h-20 h-12 lg:px-24 sm:px-6 px-2'>
                <div>
                    <select className='select-option' value={query.genre} 
                        name='genre' onChange={changeHandler}>
                        <option value="">Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Music">Music</option>
                        <option value="Seinen">Seinen</option>
                        <option value="Shounen">Shounen</option>
                    </select>
                </div>
                <div>
                    <select className='select-option' value={query.year} name='year' onChange={changeHandler}>
                        <option value="">Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
                <div>
                    <button onClick={searchHandler} className='bg-emerald-800 px-5 rounded-lg transtion duration-75
                    font-semibold text-blue-200 hover:bg-emerald-600 sm:ml-3 w-48 
                    mt-2 sm:mt-0 sm:w-28 hover:ease-in py-1'>Search</button>
                </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:mt-6 
                mt-48 gap-3 place-items-center'>
                    {data.map((anime)=> (
                    <Card key={anime.id} {...anime} />
                ))}
                </div>
                </div>
                <div className='hidden md:block'>
                    <Image src={category} alt='category'
                    width={397}
                    height={622} />
                </div>
            
                <div className='block md:hidden'>
                    <Image src={mobilesize} alt='category'
                    width={297}
                    height={575} />
                </div>      
            </div>
        </div>
    );
};

export default Categories;