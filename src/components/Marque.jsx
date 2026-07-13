import React from 'react';
import Marquee from 'react-fast-marquee';

const books = [
    {
        _id: '1',
        title: 'Coming Soon: The Alchemist',
        author: 'Paulo Coelho',
    },
    {
        _id: '2',
        title: 'Coming Soon: Clean Code',
        author: 'Robert C. Martin',
    },
    {
        _id: '3',
        title: 'Coming Soon: The Psychology of Money',
        author: 'Morgan Housel',
    },
]

const Marque = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-amber-100 py-4 px-2 
        container mx-auto mt-9'>
            <button className='btn bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl'>New Book</button>
            <Marquee pauseOnHover={true} speed={100} className='gap-4'>
                {books.map((b) => (
                    <span key={b._id}>{b.title}{b.author}</span>
                ))}
            </Marquee>
        </div>
    );
};

export default Marque;