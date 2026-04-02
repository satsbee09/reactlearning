import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, PostCard } from '../component'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (!authStatus) return

        appwriteService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
            .catch((err) => {
                console.error('Failed to load posts:', err)
                setError(err.message || 'Unable to load posts. Please login or check permissions.')
            })
    }, [authStatus])

  return (
    <div className='w-full py-8'>
        <Container>
            {error ? (
                <div className='rounded-[28px] border border-red-700/70 bg-red-950/80 p-10 text-center text-red-200 shadow-xl'>
                    <h2 className='text-2xl font-semibold'>Unable to load posts</h2>
                    <p className='mt-3 max-w-xl mx-auto text-sm text-red-300'>{error}</p>
                </div>
            ) : (
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            )}
            </Container>
    </div>
  )
}

export default AllPosts