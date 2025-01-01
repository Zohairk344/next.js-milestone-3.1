import React from 'react'
import BlogCard from './BlogCard'

const Mega = () => {

    const posts = [
        {
            id : '1',
            title : 'Next.JS 15.1 review',
            description : 'Next.js has firmly established itself as a vital framework in the realm of modern web development. With its latest release, Next.js 15, developers now have access to an array of new features and improvements',
            date : '10-29-2024',
            ImageUrl : "/image/mega0.png",
        },
        {
            id : '2',
            title : 'The Best Guide to Flexbox Ever',
            description : 'So I recently started learning web development and quickly realized how powerful flexbox is (it’s seriously amazing).I’ve dug through countless articles and videos to understand it better. Today I think I found the best one out there.',
            date : '10-09-2024',
            ImageUrl : "/image/mega1.webp",
        },
        {
            id : '3',
            title : 'Top 10 UI Web Design Best Practices',
            description : 'Effective UI design boosts user engagement, navigation, and satisfaction. Key practices include simplicity to reduce cognitive load, consistency to create familiarity.',
            date : '10-03-2024',
            ImageUrl : "/image/mega2.webp",
        },
        {
            id : '4',
            title : '11 Practical Ways to Bring Side Income as a Developer 💰',
            description : 'Developers can diversify their income streams through various methods such as solving open source bounties',
            date : '11-20-2024',
            ImageUrl : "/image/mega3.jpg",
        },
        {
            id : '5',
            title : '7 Linux Distros I Still Miss in 2024',
            description : 'Many Linux distributions that once gained popularity have been discontinued over the years',
            date : '10-22-2024',
            ImageUrl : "/image/mega4.webp",
        },
        {
            id : '6',
            title : '10 JS Functions You Cant Ignore',
            description : 'There are numerous functions in JavaScript that every developers should master.Heres a list of ten functions',
            date : '11-19-2023',
            ImageUrl : "/image/mega5.png",
        }
    ]

  return (
    <div className='my-12 poppins'>
        <h1 className='text-3xl font-semibold text-center'>{" "} Exploring Everything New In The Tech World</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {posts.map((post) => (
                <div key={post.id}>
                    <div>
                        <BlogCard post={post}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Mega