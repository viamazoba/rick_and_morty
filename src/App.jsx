import './App.css'
import useSWR from 'swr';
import fetcher from './utilsAxios';
import CardEpisode from './components/CardEpisode';
import { useState } from 'react';
import '../src/styles/base/base.scss'

function App() {
  const url = '/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';
  const { data, error, isLoading } = useSWR(url, fetcher)
  const [characterId, setcharacterId] = useState(null)
  const [isRotated, setIsRotated] = useState(false);

  
  const handleCharacters= (event)=>{
    if(characterId === null){
      setcharacterId(event.currentTarget.dataset.key)
    }else{
      setcharacterId(null)
    }
    setIsRotated(!isRotated)
  }
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  return (
    <>
      <div>
        {data?<CardEpisode data = {data} characterId = {characterId} 
        onHandleCharacter = {handleCharacters}
        isRotated = {isRotated}/>: <p>Loading ...</p>}
      </div>
    </>
  )
}

export default App
