import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllBookPage = async () => {
    const res = await fetch('https://book-borrow-yzbu.vercel.app/data.json')
    const allbook = await res.json()
    // console.log(allbook)

    return (
        <div className='container mx-auto mt-9 px-10 bg-amber-100 mb-9'>
            <h1 className='text-3xl text-[#0B2D5B] font-bold pt-6 flex justify-center text-center'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-6 pb-8'>
                {allbook.map(allbook => <div key={allbook.id} className='card bg-base-100 shadow-sm'>

                    <figure className='p-7'>
                        <Image
                            src={allbook.image_url}
                            alt={allbook.title}
                            width={200}
                            height={200}
                            className='w-full h-64 object-cover rounded-xl'
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl text-[#0B2D5B]">{allbook.title}</h2>
                        <h2 className='font-semibold'>{allbook.author}</h2>
                        <p>{allbook.description}</p>
                        <Link href={`/all-book/${allbook.id}`}>
                            <button className="btn bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl">
                                View Details
                            </button>
                        </Link>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default AllBookPage;