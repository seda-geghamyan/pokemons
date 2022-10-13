<template>
  <input
    v-model="value"
    type="text"
    placeholder="Search . . . "
    class="form-control"
    @input="$emit('update:value', value)"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
};
</script>
