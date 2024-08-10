import React from 'react';
import AnimeList from '@/components/templates/AnimeList';

const AnimeDetails = ({data}) => {
    return (
        <AnimeList data={data} />
    );
};

export default AnimeDetails;

export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/anime`);
    const data = await res.json();
    console.log(data);

    return {
        props: {data}
    };
}