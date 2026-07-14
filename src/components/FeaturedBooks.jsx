import Image from 'next/image';
import React from 'react';

const FeaturedBooks = async () => {
    const res = await fetch('https://book-borrow-yzbu.vercel.app/data.json')
    const featured = await res.json()
    console.log(featured)
    const topfeatured = featured.slice(0, 4)
    // console.log(topfeatured)

    return (
        <div className='container mx-auto mt-9 px-10 bg-amber-100'>
            <h1 className='text-3xl text-[#0B2D5B] font-bold pt-6 flex justify-center text-center'>Featured Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-6 pb-8'>
                {topfeatured.map(featured => <div key={featured.id} className='card bg-base-100 shadow-sm'>
                    
                        
                            <Image
                                src={featured.image_url}
                                alt={featured.title}
                                width={200}
                                height={200}
                                className='w-full h-64 object-cover rounded-xl'
                            />
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{featured.title}</h2>
                            <h3>{featured.author}</h3>
                            <p>{featured.description}</p>
                            <div className="card-actions">
                                <button className="btn bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl">View Details</button>
                            </div>
                        </div>
                    
                </div>)}
            </div>
        </div>
    );
};

export default FeaturedBooks;