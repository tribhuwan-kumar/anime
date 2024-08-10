import React from 'react';
import { useRouter } from 'next/router';
import AnimeDetails from '@/components/templates/AnimeDetails';
import Loader from '@/components/modules/Loader';


const Details = ({data}) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>
            <Loader />
        </div>
    }
    return (
        <div>
            <AnimeDetails {...data} />
        </div>
    );
};

export default Details;

export async function getStaticPaths() {
    const res = await fetch (`${process.env.BASE_URL}/anime`);
    const json = await res.json();
    const data = json.slice(0,10);
    const paths = data.map((anime)=> ({
        params: {id: anime.id.toString()},
    }));
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params: {id}, } = context;
    const res = await fetch(`${process.env.BASE_URL}/anime/${id}`);
    const data = await res.json();
    
    if(!data.id) {
        return {
            notFound: true,
        };
    }
    return {
        props: {data}
    }
}