<template>
  <div class="py-5 mt-3">
    <div class="container">
      <app-breadcrumb v-if="breadcrumbList.length" :list="breadcrumbList" />
      <router-view
        @list="breadcrumbList = $event"
        @openDetailsPopup="openDetailsPopup"
      />
    </div>
  </div>
  <popups-details v-model:value="isDetailsOpened" :data="pokemon" />
</template>

<script>
import AppBreadcrumb from "@/components/app/Breadcrumb.vue";
import PopupsDetails from "@/components/popups/Details.vue";

export default {
  components: {
    AppBreadcrumb,
    PopupsDetails,
  },

  data() {
    return {
      pokemon: {},
      breadcrumbList: [],
      isDetailsOpened: false,
    };
  },

  methods: {
    openDetailsPopup(value, data) {
      this.pokemon = data;
      this.isDetailsOpened = value;
    },
  },
};
</script>
