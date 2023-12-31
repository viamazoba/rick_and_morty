/* eslint-disable react/prop-types */
//import React from 'react'

// eslint-disable-next-line react/prop-types
import './cardEpisode.scss'
import CardCharacter from '../CardCharacter'

export const CardEpisode = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data , onHandleCharacter, characterId, isRotated} = props
  
  console.log('Entrada de card:', data)
  return (
    <div className="container">
        {data.map((info) =>{ 
          return(

            <>
              <div className="container__episodes" key={info.id}>

                <div className="container__text" >
                  <h2>Name: {info.name}</h2>
                  <h3>Episode: {info.episode}</h3>
                  <p>Fecha de estreno: {info.air_date}</p>
                </div>
                <span className={`material-symbols-rounded ${isRotated && parseInt(characterId) === parseInt(info.id)? 'rotate-icon rotated' : ''}`} onClick={onHandleCharacter} data-key= {info.id}>chevron_right</span>

              </div>
              <div className='container__characters-episode'>
                {parseInt(characterId) === parseInt(info.id) && <CardCharacter characters = {info.characters} />} 
              </div>
            </>

        )

        })}
    </div>
  )
}

export default CardEpisode
