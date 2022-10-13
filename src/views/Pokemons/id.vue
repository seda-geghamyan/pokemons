<template>
  <div v-if="pokemon.id == $route.params.id">
    <div class="row">
      <div class="col-md-8 col-lg-4 mx-auto mb-lg-0 mb-5">
        <app-card
          class="h-100"
          :image="pokemon.image"
          :title="pokemon.name"
          :description="pokemon.description"
        />
      </div>
      <div class="col-lg-8">
        <h1 class="mb-4 text-center text-capitalize text-light">
          {{ pokemon.name }}
        </h1>
        <div class="text-capitalize mb-3 fs-4 d-flex">
          <span class="me-2 min-width">Weight: </span>
          <span>{{ pokemon.weight }},</span>
        </div>
        <div class="text-capitalize mb-3 fs-4 d-flex">
          <span class="me-2 min-width">types: </span>
          <span
            class="me-2 text-nowrap"
            v-for="item in pokemon.types"
            :key="item"
          >
            {{ item }},
          </span>
        </div>
        <div class="text-capitalize mb-3 fs-4 d-flex">
          <span class="me-2 min-width">stats: </span>
          <div>
            <span
              class="me-2 text-nowrap d-inline-block"
              v-for="item in pokemon.stats"
              :key="item"
            >
              {{ item }},
            </span>
          </div>
        </div>
        <div class="text-capitalize mb-3 fs-4 d-flex">
          <span class="me-2 min-width">moves: </span>
          <div>
            <span
              class="me-2 text-nowrap d-inline-block"
              v-for="item in pokemon.moves"
              :key="item"
            >
              {{ item }},
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loader v-else />
</template>
<style scoped>
.min-width {
  min-width: 80px;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
import AppCard from "@/components/app/Card.vue";
import AppLoader from "@/components/app/Loader.vue";

export default {
  name: "SinglePokemonView",

  components: {
    AppCard,
    AppLoader,
  },

  data() {
    return {
      offset: 0,
      limit: 1,
    };
  },

  watch: {
    pokemon(to) {
      to && this.$emit("list", ["home", "pokemons", this.pokemon.name]);
    },
  },

  mounted() {
    this.loadSinglePokemon(this.$route.params.id);
  },

  computed: {
    ...mapGetters({
      pokemon: "pokemons/singlePokemon",
    }),
  },

  methods: {
    ...mapActions({
      loadSinglePokemon: "pokemons/loadSinglePokemon",
    }),
  },
};
</script>
