import React from 'react';
import Image from 'next/image';

const Week = async () => {
    const res = await fetch('https://book-borrow-yzbu.vercel.app/data.json')
    const featured = await res.json()
    console.log(featured)
    const topfeatured = featured.slice(4, 8)
    return (
        <div className='container mx-auto bg-amber-100 mt-7'> 
            <div className='flex flex-col md:flex-row justify-between pt-4'>
            <h2 className='text-[#0B2D5B] text-3xl font-bold'>Best seller of the week</h2>
            <div>
            <button className="btn bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl">VIEW ALL</button>
            </div>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pb-8'>
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

export default Week;