import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ahmadhamesh')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
        
        
    // },[])
    return (
        <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl'>
            Github Followers: {data.followers}
        <img s src={data.avatar_url} width={300} alt="Github pic" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/ahmadhamesh')
    return response.json()
}