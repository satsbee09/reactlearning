import React from 'react'
import logoImg from '../download.png'

function Logo({ width = '100px' }) {
  return (
    <div style={{ width }}>
      <img src={logoImg} alt='ArticBlog Logo' className='block w-full h-auto' />
    </div>
  )
}

export default Logo