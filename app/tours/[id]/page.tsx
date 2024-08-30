import mapsImg from '@/images/maps.jpeg';
import Image from 'next/image';

function page({params}:{params:{id:string}}) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            src={mapsImg}
            alt='maps' 
            width={192} 
            height={192} 
            className='w-48 h-48 object-cover rounded' 
          />
          <h2>local image</h2>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default page