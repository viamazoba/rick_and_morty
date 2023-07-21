//import React from 'react';
// import { useState } from 'react'
import './App.css'
//import axios from './utils.js';
import useSWR from 'swr';
import fetcher from './utilsAxios';
import CardEpisode from './components/CardEpisode';
//import { useState } from 'react';

function App() {
  const url = '/episode/1,2,3,4,5,6,7,8,9,10';
  const { data, error, isLoading } = useSWR(url, fetcher)
  // const [count, setCount] = useState()

  // setData();
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data[0]);
  console.log(Array.isArray(data))

  // const handleGet = async () =>{
  //   setCount(await axios(url))
  //   console.log(await axios(url));
  // }

  return (
    <>
      <div>
        {data?<CardEpisode data = {data}/>: <p>Loading ...</p>}
      </div>
    </>
  )
}

export default App
