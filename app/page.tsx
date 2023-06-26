import {CarCard, CustomFilter, Hero, SearchBar} from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const Cars = await fetchCars();
  console.log(Cars); 
  const isDataEmpty = !Array.isArray(Cars) || Cars.length<1 || !Cars;
  return (
    <main className="overflow-hidden">
      {/* Bismillah */}
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalouge</h1>
          <p>Explore the cars according to your liking</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>
        {!isDataEmpty
        ? (
        <section>
          <div className="home__cars-wrapper">
            {Cars?.map((car)=>(<CarCard car={car} />))}
          </div>
        </section>
        )
        : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>
            Oops, no results found
          </h2>
          <p>{Cars.message}</p>
        </div>
        )}
      </div>
    </main>
  )
}
