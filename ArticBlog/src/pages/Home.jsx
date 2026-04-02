import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../component'

const technologies = [
  'React.js for dynamic UI',
  'Node.js + Express API',
  'MongoDB data storage',
  'Git + GitHub version control',
]

const features = [
  'User authentication and profile management',
  'Idea posting and categorization',
  'Comment and feedback system',
  'Real-time collaboration features',
  'Clean and intuitive dashboard',
]

function Home() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    if (!authStatus) {
      setPosts([])
      setError('')
      return
    }

    appwriteService.getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
      .catch((err) => {
        console.error('Failed to load home posts:', err)
        setError(err.message || 'Unable to load posts. Please login or check permissions.')
      })
  }, [authStatus])

  const latestPosts = posts.slice(0, 4)

  return (
    <div className='w-full py-8'>
      <Container>
        <section className='mb-10 overflow-hidden rounded-[32px] border border-slate-700/80 bg-slate-900/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]'>
          <div className='mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='max-w-2xl'>
              <p className='text-sm uppercase tracking-[0.28em] text-sky-400'>Project overview</p>
              <h1 className='mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>ArticBlog</h1>
              <p className='mt-3 text-slate-300'>A modern blogging platform built for fast collaboration, secure authentication, and polished content sharing.</p>
            </div>
            <div className='grid gap-3 sm:grid-cols-2'>
              <div className='rounded-3xl bg-slate-800/80 p-5'>
                <h2 className='text-base font-semibold text-slate-100'>Technologies Used</h2>
                <ul className='mt-4 space-y-3 text-sm text-slate-300'>
                  {technologies.map((tech) => (
                    <li key={tech} className='flex items-start gap-3'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400' />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='rounded-3xl bg-slate-800/80 p-5'>
                <h2 className='text-base font-semibold text-slate-100'>Key Features</h2>
                <ul className='mt-4 space-y-3 text-sm text-slate-300'>
                  {features.map((feature) => (
                    <li key={feature} className='flex items-start gap-3'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='rounded-3xl bg-slate-800/80 p-6 text-slate-300'>
            <h2 className='text-lg font-semibold text-white'>Impact & Future Scope</h2>
            <p className='mt-3 leading-7'>This project is designed to support startups and student innovators, encourage collaborative problem-solving, and create new opportunities for funding and partnerships. Future expansions can include AI-based recommendations, investor matching, and advanced analytics.</p>
          </div>
        </section>

        {error ? (
          <div className='rounded-[28px] border border-red-700/70 bg-red-950/80 p-10 text-center text-red-200 shadow-xl'>
            <h2 className='text-2xl font-semibold'>Unable to load posts</h2>
            <p className='mt-3 max-w-xl mx-auto text-sm text-red-300'>{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className='rounded-[28px] border border-slate-700/70 bg-slate-950/80 p-10 text-center text-slate-200 shadow-xl'>
            <h2 className='text-2xl font-semibold'>Login to read posts</h2>
            <p className='mt-3 max-w-xl mx-auto text-sm text-slate-400'>Sign in to unlock the full community feed and access published articles.</p>
          </div>
        ) : (
          <>
            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
              {latestPosts.map((post) => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
            {posts.length > latestPosts.length && (
              <div className='mt-8 text-center'>
                <Link to='/all-posts' className='text-sky-400 hover:underline'>View all posts</Link>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  )
}

export default Home