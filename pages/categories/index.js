import React from 'react';
import Categories from '@/components/templates/Categories';
import Loader from '@/components/modules/Loader';

const index = ({data}) => {
    return (
        <div className=''>
          <Categories data={data} />  
        </div>
    );
};

export default index;

export async function getServerSideProps(context) {
  const{
    query: {
      year, genre
    }
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/anime`)
  const data = await res.json();

  const filteredAnime = data.filter((item)=> {

    const yearResult = item.details.filter((detail)=>
    detail.Year && detail.Year === +year);

    const genreResult = item.details.filter((detail)=>
    detail.Genre && detail.Genre === genre);

    if( genre && year && yearResult.length && genreResult.length) {
      return item;
    } else if(!year && genre && genreResult.length) {
      return item;
    } else if(!genre && year && yearResult.length) {
      return item;
    }
  });
  
  return {
    props: {
      data: filteredAnime
    }
  };
}