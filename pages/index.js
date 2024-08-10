import HomePage from "@/components/templates/HomePage";
import Card from "@/components/modules/Card";

export default function Home({data}) {
  return (
    <>
      <HomePage />
      <div className="max-w-7xl gap-5 grid col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-12 lg:grid-cols-4 
        md:grid-cols-3 sm:grid-cols-2 sm:mx-16 mb-10">
        {data.map((anime)=>(
          <Card key={anime.id} {...anime} />
        ))}
      </div> 
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/anime`)
  const json = await res.json();
  const data = json.slice(0,4);

  return {
    props: {
      data
    }
  }
}
