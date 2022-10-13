import { createStore } from "vuex";

export default createStore({
  modules: {
    pokemons: {
      namespaced: true,

      state: {
        pokemon: { id: null },
        pokemonsList: [],
      },

      mutations: {
        SET_DATA(state, data) {
          for (const key in data) {
            if (state[key]) {
              state[key] = data[key];
            }
          }
        },
      },

      actions: {
        async loadPokemons({ commit }, offset = 0) {
          try {
            // get obj with 'name' and 'url' fields
            const pokemons = await (
              await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
              )
            ).json();

            // get obj with more fields without 'description'
            const detailsFetch = pokemons.results.map(async (item) => {
              return await (await fetch(item.url)).json();
            });
            const allPokemons = (await Promise.all(detailsFetch)).map((item) =>
              getPokemonObj({ data: item })
            );

            // get obj with 'description'
            const descriptionsFetch = pokemons.results.map(async (item) => {
              return await (
                await fetch(
                  `https://pokeapi.co/api/v2/pokemon-species/${item.name}`
                )
              ).json();
            });
            (await Promise.all(descriptionsFetch)).forEach((data, index) => {
              allPokemons[index].description =
                data.flavor_text_entries[0].flavor_text;
            });

            // set pokemonsList array
            commit("SET_DATA", { pokemonsList: allPokemons });
          } catch (e) {
            console.error(e);
          }
        },

        async loadSinglePokemon({ commit }, id) {
          try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
              .then((res) => res.json())
              .then((res) => {
                const pokemon = getPokemonObj({ data: res });

                fetch(
                  `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
                )
                  .then((res) => res.json())
                  .then((res) => {
                    pokemon.description =
                      res.flavor_text_entries[0].flavor_text;
                    commit("SET_DATA", { pokemon });
                  })
                  .catch((error) => console.log(error));
              });
          } catch (error) {
            console.error(error);
          }
        },
      },

      getters: {
        singlePokemon: ({ pokemon }) => pokemon,
        allPokemons: ({ pokemonsList }) => pokemonsList,
      },
    },
  },
});

function getPokemonObj({ data }) {
  return {
    id: data.id,
    name: data.name,
    description: "",
    image: data.sprites.other.home.front_default,
    weight: data.weight,
    types: data.types.map((item) => item.type.name),
    stats: data.stats.map((item) => item.stat.name),
    moves: data.moves.map((item) => item.move.name),
  };
}
