import React, { use, useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   /* const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/satsbee09')
        .then(response => response.json())
        .then(data => {console.log(data);
            setData(data)
        })
    }, [])*/
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>Github-Followers:{data.followers}
    <img className='rounded-full w-20 h-20 mx-auto mt-4' src={data.avatar_url} alt="Github Profile"  width={300}/>
    </div>
  )
}

export default Github
export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/satsbee09')
    const data = await response.json()
    return data
}