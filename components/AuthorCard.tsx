import React from 'react'
import Image from 'next/image'

const AuthorCard = () => {
  return (
    <div className='poppins shadow-xl rounded-lg p-5 my-12'>
        <div className='flex items-center'>
            <Image src="/image/guest-account.webp"
            alt="Author"
            width={70}
            height={70}
            className='rounded-full'/>
            <div className='flex flex-col ml-4'>
                <h1 className='text-xl'>Zohair Khan</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum, at dicta nisi placeat a ipsam ipsa praesentium vero ratione, architecto cum inventore. Iste repellendus, natus enim molestiae quos nobis.</p>
            </div>
        </div>
    </div>
  )
}

export default AuthorCard