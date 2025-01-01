"use client"
import React from 'react'
import AuthorCard from '@/components/AuthorCard'
import CommentSection from '@/components/CommentSection'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/Footer'

const posts = [
    {
        id : '1',
        title : 'Next.JS 15.1 review',
        description : 'Next.js has firmly established itself as a vital framework in the realm of modern web development. With its latest release, Next.js 15, developers now have access to an array of new features and improvements',
        date : '10-29-2024',
        image : "/image/mega0.png",
    },
    {
        id : '2',
        title : 'The Best Guide to Flexbox Ever',
        description : 'So I recently started learning web development and quickly realized how powerful flexbox is (it’s seriously amazing).I’ve dug through countless articles and videos to understand it better. Today I think I found the best one out there.',
        date : '10-09-2024',
        image : "/image/mega1.webp",
    },
    {
        id : '3',
        title : 'Top 10 UI Web Design Best Practices',
        description : 'Effective UI design boosts user engagement, navigation, and satisfaction. Key practices include simplicity to reduce cognitive load, consistency to create familiarity.',
        date : '10-03-2024',
        image : "/image/mega2.webp",
    },
    {
        id : '4',
        title : '11 Practical Ways to Bring Side Income as a Developer 💰',
        description : 'Developers can diversify their income streams through various methods such as solving open source bounties',
        date : '11-20-2024',
        image : "/image/mega3.jpg",
    },
    {
        id : '5',
        title : '7 Linux Distros I Still Miss in 2024',
        description : 'Many Linux distributions that once gained popularity have been discontinued over the years',
        date : '10-22-2024',
        image : "/image/mega4.webp",
    },
    {
        id : '6',
        title : '10 JS Functions You Cant Ignore',
        description : 'There are numerous functions in JavaScript that every developers should master.Heres a list of ten functions',
        date : '11-19-2023',
        image : "/image/mega5.png",
    }
]

const post = ({params} : {params : {id : string}}) => {
    const {id} = params
    const post = posts.find((p) => p.id === id)

    if(!post){
        return(
            <h1 className='poppins flex justify-center items-center h-screen bg-lime-600 text-7xl text-white'>Page Not Found</h1>
        )
    }

    const RenderParagraph = (description : string) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className='mt-4 text-justify'>{para.trim()}</p>
        ))
    }

  return (
    <div>
        <Header/>
        <div className='max-w-3xl mx-auto p-5 flex flex-col items-center poppins'>
            <h1 className='my-5 md:text-4xl sm:text-2xl font-semibold mb-7'>{post.title}</h1>
            {post.image && (
                <Image src={post.image} alt='' width={700} height={700}/>
            )}  

            <div className='text-xl my-4'>{RenderParagraph(post.description)}</div>

            <CommentSection/>
            <AuthorCard/>
        </div>
        <Footer/>   
    </div>
  )
}

export default post