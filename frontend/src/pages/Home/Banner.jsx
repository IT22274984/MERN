import React from 'react';
import BannerCard from '../shared/BannerCard';

export const Banner = () => {
    return (
        <div className='bg-teal-100 px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Read and Improve here <span className='text-blue-700'>for free</span></h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                </div>
            </div>
        </div>
    );
};
