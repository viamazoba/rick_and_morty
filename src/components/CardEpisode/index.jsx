/* eslint-disable react/prop-types */
//import React from 'react'

// eslint-disable-next-line react/prop-types
import './cardEpisode.scss'
import CardCharacter from '../CardCharacter'

export const CardEpisode = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data , boolCharacter, onHandleCharacter} = props
  
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
                <span className="material-symbols-rounded" onClick={onHandleCharacter}>chevron_right</span>

              </div>
              <div>
                {boolCharacter && <CardCharacter characters = {info.characters}/>} 
              </div>
            </>

        )

        })}
    </div>
  )
}

export default CardEpisode
