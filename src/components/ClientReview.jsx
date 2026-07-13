import Image from 'next/image';
import React from 'react';
import imge2 from '@/asstes/image2.png'
import imges1 from '@/asstes/images1.png'
import imges3 from '@/asstes/images3.png'

const ClientReview = () => {
    return (
        <div className='container mx-auto  items-center text-center bg-amber-100 m-8'>
             <h1 className='text-3xl font-bold mt-5 flex justify-center text-center pt-3'>Client Review </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-9  container mx-auto'>
               <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Image
                            src={imge2}
                            alt='imge2'
                            />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
            </div> 

            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Image
                            src={imges1}
                            alt='imges1'
                            />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                       
                    </div>
                </div>
            </div> 

            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <Image
                            src={imges3}
                            alt='imges3'
                            />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        
                    </div>
                </div>
            </div>
         </div>
        </div>
            );
};

            export default ClientReview;