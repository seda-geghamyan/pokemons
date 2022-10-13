<template>
  <div class="modal" :class="{ 'd-block': value }" @click.self="close">
    <transition>
      <div class="modal-dialog" v-if="value">
        <div class="modal-content bg-body-bg">
          <div class="modal-header border-secondary border-opacity-20">
            <p class="modal-title text-capitalize fs-4">
              {{ data.name }}
            </p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="fs-5">
              {{ data.description }}
            </p>
            <div class="text-end mt-4">
              <router-link
                :to="`pokemons/${data.id}`"
                type="button"
                class="btn btn-secondary"
                @click="close"
              >
                More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
    },
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit("update:value", false);
    },
  },
};
</script>
