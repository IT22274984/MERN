import React from 'react'
// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"

const ReviewCard = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>Discover inspiring testimonials from individuals who've benefited from our eye health resources. Hear how our guidance and support have helped them achieve better vision and overall eye wellness. Join our community and start your journey towards healthier eyes today!</p>
                <Avatar
                    alt="avatar of Jese"
                    img={profile}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Thivvi</h5>
                <p className='text-sm'> Customer </p>
            </div>
        </div>
    )
}

export default ReviewCard