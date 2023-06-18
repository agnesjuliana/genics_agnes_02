const baseUrl = 'https://pokeapi.co/api/v2';

// Function to fetch Pokémon data
async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`${baseUrl}/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Pokémon not found!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Example usage
const pokemonName = 'pikachu';
fetchPokemon(pokemonName)
  .then(data => {
    console.log(data)
    console.log('Name:', data.name);
    console.log('ID:', data.id);
    console.log('Abilities:', data.abilities.map(ability => ability.ability.name));
    console.log('Types:', data.types.map(type => type.type.name));
    console.log('Sprite:', data.sprites.front_default);
  })
  .catch(error => {
    console.error(error);
  });