import React from 'react'
import { Card, CardTitle, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardContent {
    post : {
        id : string,
        title : string,
        description : string,
        date : string,
        ImageUrl : string,
    }
}

const BlogCard = ({post} : BlogCardContent ) => {
  return (
    <div className='poppins'>
        <Card className='p-4'>
            <Image src={post.ImageUrl} alt={post.title} width={70} height={70} className='w-full h-80 object-cover'/>
            <CardTitle className='text-xl mt-6 text-center '>
                {post.title}
            </CardTitle>
            <CardContent className='text-center mt-4'>
                {post.description}
            </CardContent>
            <div className='flex flex-col text-center'>
                <p className='text-sm mb-3'>Published on : {new Date(post.date).toDateString()}</p>
                <Link href={`/post/${post.id}`} className='w-full flex px-6 py-4 mt-3 justify-center items-center text-white bg-black rounded hover:bg-green-400 hover:text-black'>Read More</Link>
            </div>
        </Card>
    </div>
  )
}

export default BlogCard