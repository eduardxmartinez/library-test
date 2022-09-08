import React, { useEffect, useState } from 'react'
import './App.css';
import { Button, ContainerFlex, MediaImg, Text } from 'creacionlibrerias';
import { getCharacter } from './service';

function App() {
  const [idChar, setIdChar] = useState(1);
  const [character,setCharacter] = useState("");

  const gettingChs = async (character) => {
    const response = await getCharacter(character);
    setCharacter(response);
    console.log(response);
  }

  const handleDecrease = () => {
    idChar > 1
    ? setIdChar(idChar - 1)
    : setIdChar(1) 
  }
  const handleIncrease = () => {
    setIdChar(idChar+1);
  }
  useEffect(()=> {
    gettingChs(idChar)
  }, [idChar])

  return (
    <div className="App">
      <ContainerFlex flexDirection="column" justifyContent="space-evenly" alignItems="center" height="100vh" gap="8px">
        <MediaImg src={character.image} width="200px" height="200px" alt={character.name}/>
        <Text component="h3" fontSize="18px" lineHeight="10px">{character.name}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.id}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.species}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.status}</Text>
        <ContainerFlex flexDirection="row" justifyContent="center" alignContent="center" height="40px" gap="40px">
          <Button onClick={handleDecrease} width="150px" height="40px" bgColor="lightsteelblue" bgColorHover="lightcoral" >{`< Before`}</Button> 
          <Button onClick={handleIncrease} width="150px" height="40px" bgColor="lightsteelblue" bgColorHover="lightcoral" >{`Next >`}</Button>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
}

export default App;
