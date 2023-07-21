/* eslint-disable react/prop-types */
import characterNumber from "../../utilsCharacters";

export const CardCharacter = (props) => {
  const {characters} = props;
  const arrayIdCharacters = characterNumber(characters)

  console.log('Esta es la entrada de los personajes: ', arrayIdCharacters)
  return (
    <div>
      {characters.map((character)=>{
        <div key={character}>
          <p>{character.name} - {character.species}</p>
        </div>
      })}
    </div>
  )
}

export default CardCharacter
