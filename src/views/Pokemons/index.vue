<template>
  <div v-if="pokemons.length">
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4">
        <pokemons-search v-model:value="search" />
      </div>
      <div class="col-12">
        <h1 class="text-center text-light mb-4">Pokemons</h1>
        <div v-if="!pokemonsList.length">
          <p class="text-center fs-5 py-5">
            Try find your pokemon in another pages.
          </p>
        </div>
      </div>
      <div
        class="col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="pokemon in pokemonsList"
        :key="pokemon.name"
      >
        <a
          href=""
          @click.prevent="
            $emit('openDetailsPopup', true, {
              id: pokemon.id,
              name: pokemon.name,
              description: pokemon.description,
            })
          "
        >
          <app-card :image="pokemon.image" :title="pokemon.name" />
        </a>
      </div>
      <div class="col-12 my-5">
        <v-pagination
          class="justify-content-center"
          v-model="page"
          :pages="53"
          :range-size="1"
          active-color="#0bd6bb"
          @update:modelValue="updateHandler"
        />
      </div>
    </div>
  </div>
  <loader v-else />
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AppCard from "@/components/app/Card";
import AppLoader from "@/components/app/Loader";
import VPagination from "@hennge/vue3-pagination";
import PokemonsSearch from "@/components/pokemons/Search";

export default {
  name: "PokemonsListView",

  components: {
    AppCard,
    AppLoader,
    VPagination,
    PokemonsSearch,
  },

  data() {
    return {
      page: 1,
      offset: 0,
      search: "",
    };
  },

  methods: {
    ...mapActions({
      loadPokemons: "pokemons/loadPokemons",
    }),

    async updateHandler() {
      this.offset = (this.page - 1) * 16;
      await this.loadPokemons(this.offset);
    },
  },

  mounted() {
    this.loadPokemons(this.offset);
    this.$emit("list", ["home", "pokemons"]);
  },

  computed: {
    ...mapGetters({
      pokemons: "pokemons/allPokemons",
    }),

    pokemonsList() {
      return this.search.length >= 3
        ? this.pokemons.filter((item) => item.name.includes(this.search))
        : this.pokemons;
    },
  },
};
</script>
