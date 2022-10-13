import { mapGetters, mapActions } from "vuex";
// const { pokemonsMixin } = mixins;
// export default {
export default {};
const pokemonsMixin = {
  methods: {
    ...mapActions({
      loadPokemons: "pokemons/loadPokemons",
    }),
  },

  //   mounted() {
  //     this.loadPokemons(this.offset);
  //   },

  computed: {
    ...mapGetters({
      pokemons: "pokemons/allPokemons",
    }),
  },
};
// };
export { pokemonsMixin };
