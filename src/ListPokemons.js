const ListPokemons = () => {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { id: 2, name: "Ivysaur", type: "Grass", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" },
    { id: 3, name: "Venusaur", type: "Grass", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
    { id: 4, name: "Charmander", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { id: 5, name: "Charmeleon", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" },
    { id: 6, name: "Charizard", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
    { id: 7, name: "Squirtle", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { id: 8, name: "Wartortle", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" },
    { id: 9, name: "Blastoise", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
  ];

  return (
    <section>
      {pokemons.map((pokemon) => {
        return (
          <article>
            <h2>{pokemon.name}</h2>
            <p>Type: {pokemon.type}</p>
            <img src={pokemon.img} alt={pokemon.name} />
          </article>
        );
      })}
    </section>
  );
};

export default ListPokemons;
