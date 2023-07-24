/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from 'react';
import './CardCharacter.scss'
//import fetcher from '../../utilsAxios';
//import multiFetcher from '../../utilsCharacters.js';

export const CardCharacter = (props) => {
  const { characters } = props;
  const [datos, setDatos] = useState([])

  useEffect(() => {
    async function fetchData(arrayCharacters) {
      try {
          const promises = await arrayCharacters.slice(0,10).map((character) => {
          return  axios.get(character);
        });


        Promise.all(promises)
                .then(responses => {
                  setDatos(responses.map(response => response.data));
                })
                .catch(error => {
                  console.error('Error en una o más peticiones:', error);
                });
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData(characters);
  }, [characters]);

  return (
    <div className='container-characters'>
      {datos.map((character) => (
        <div key={character.id} className='container__character'>
          <div className='container__image'>
            <img src={character.image} alt={character.name} />
          </div>
          <div className='container__text'>
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Specie:</strong> {character.species}</p>
            <p><strong>Status:</strong> {character.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCharacter;
