<template>
  <div class="card bg-secondary bg-opacity-20">
    <div class="overflow-hidden text-center">
      <img :src="image" class="card-img-top" :alt="title" />
    </div>
    <div
      class="card-body border-top border-secondary border-opacity-20 bg-opacity-10"
    >
      <h5 class="card-title text-primary text-capitalize text-center">
        {{ title }}
      </h5>

      <p v-if="description" class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  &:hover {
    .card-img-top {
      transform: scale(1);
      object-position: center;
    }
  }
  &-img-top {
    max-width: 400px;
    min-height: 214px;
    transition: 0.5s;
    transform: scale(0.8);
  }
}
</style>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>
