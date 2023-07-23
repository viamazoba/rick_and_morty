//import useSWR from 'swr';
//import fetcher from '../../utilsAxios';
/* eslint-disable react/prop-types */
//import characterNumber from "../../utilsCharacters";
import axios from 'axios'
// import fetcher from '../../utilsAxios';
// import multiFetcher from '../../utilsCharacters.js'

// export const CardCharacter = (props) => {
//   //const url = '/character/1'
//   const {characters} = props;
//   //console.log(characters)
//   ///const [arrayIdCharacters] = characterNumber(characters)
//   const arrayNumbers = characters.map((url) => {
//     const subPath = url.slice(31,50)
//     const arrayPromises = fetcher(subPath)
//     return arrayPromises;
//   });
  
//   const data = multiFetcher(arrayNumbers)

//   console.log('estas son los datos datos: ', data)
  


//   console.log('Esta es la entrada de los personajes: ', arrayNumbers)
//   //console.log('Estos serían los datos', data)

//   return (
//     <div>
//       {characters.map((character)=>{
//         <div key={character}>
//           <p>{character.name} - {character.species}</p>
//         </div>
//       })}
//     </div>
//   )
// }

// export default CardCharacter


import { useEffect, useState } from 'react';
//import fetcher from '../../utilsAxios';
//import multiFetcher from '../../utilsCharacters.js';

export const CardCharacter = (props) => {
  const { characters } = props;
  console.log(characters)
  const [datos, setDatos] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        // Obtener un array de promesas con los datos de cada personaje
          const promises = await characters.map((character) => {
          //const subPath = character.slice(0,10);
          return  axios.get(character);
        });

        // Esperar a que se resuelvan todas las promesas
        console.log('Array de promesas: ', promises)

        Promise.all(promises)
                .then(responses => {
                  // Aquí obtendrás todas las respuestas de las peticiones
                  console.log(responses)
                  setDatos(responses.map(response => response.data));
                  //console.log('Datos obtenidos:', data);
                })
                .catch(error => {
                  console.error('Error en una o más peticiones:', error);
                });

        //setDatos(multiFetcher(promises));

        //console.log('Estos son los datos:', data);
        // Aquí puedes manejar los datos como desees, por ejemplo, actualizar el estado con los datos
        // setData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, [characters]);

  //console.log('Estos son tu useState: ',datos)

  //if (characters) return <div>loading...</div>

  return (
    <div>
      {datos.map((character) => (
        <div key={character}>
          <p>{character.name} - {character.species}</p>
        </div>
      ))}
    </div>
  );
};

export default CardCharacter;
