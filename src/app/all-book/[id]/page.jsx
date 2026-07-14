
import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://book-borrow-yzbu.vercel.app/data.json')
    const allbook = await res.json()
    const books = allbook.find(allbook => allbook.id == id)
    // console.log(books)

    return (
        <div className='bg-amber-100 container mx-auto mt-9 mb-9  p-15'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='p-7'>
                    <Image
                        src={books.image_url}
                        alt={books.title}
                        width={200}
                        height={200}
                        className='w-full h-64 object-cover rounded-xl'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-1xl text-[#0B2D5B]">{books.title}</h2>
                        <h2 className='font-semibold'>{books.author}</h2>
                        <p>{books.description}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;