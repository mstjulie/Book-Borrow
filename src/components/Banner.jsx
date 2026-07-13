import Image from 'next/image';
import React from 'react';
import books from '@/asstes/books.png';

const Banner = () => {
    return (
        <div className="hero bg-amber-50 mt-4 container mx-auto ">
            <div className="hero-content flex-col lg:flex-row  items-center w-full gap-20">
                <div>
                    <h1 className="text-5xl font-bold text-[#0B2D5B]">Books are auniquely <br /> portable magic</h1>
                    <p className="py-6 text-[#8da1bb]">
                        Book are the quietest and most constant of friends , <br />
                        they are the most accessible and wisest of counselors, <br />
                        and the most patient of teachers.
                    </p>
                
                    <button className="btn bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl">Browse Now</button>
                    
                </div>
                 <Image
               src={books}
               alt='books'
               width={600}
               height={600}
               className='w-[600px] h-auto'
               />
            </div>
        </div>
    );
};

export default Banner;