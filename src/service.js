const url = "https://rickandmortyapi.com/api/character/"

export const getCharacter = async(character) => {
    const response = await fetch(`${url}${character}`,
    {method:"GET"});

    const payload = response.json();

    return payload;
}
