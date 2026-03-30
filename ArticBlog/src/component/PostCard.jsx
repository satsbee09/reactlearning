import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    let isMounted = true
    let objectUrl

    const loadPreview = async () => {
      if (!featuredImage) {
        setPreviewUrl('')
        return
      }

      try {
        const blob = await appwriteService.getFilePreview(featuredImage)
        if (isMounted && blob) {
          objectUrl = URL.createObjectURL(blob)
          setPreviewUrl(objectUrl)
        }
      } catch (err) {
        console.error('Failed to load preview:', err)
      }
    }

    loadPreview()

    return () => {
      isMounted = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [featuredImage])

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img
            src={previewUrl}
            alt={title}
            className='rounded-xl'
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard;
