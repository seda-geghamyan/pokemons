<template>
  <div class="home h-100 pt-5">
    <div class="container h-100">
      <div class="row h-75 align-items-center">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
          <div
            class="rounded-4 bg-white bg-opacity-20 p-4 shadow text-white text-center fs-4 text-capitalize"
          >
            <p class="mb-0 fs-3">Find your favorite pokemon</p>
            <router-link to="/pokemons" class="d-block mb-4">
              with us
            </router-link>
            <img alt="pokemon" src="@/assets/images/logo.png" class="w-50" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  async mounted() {
    this.$emit("list", []);
  },
};
</script>
