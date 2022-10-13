<template>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
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
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>
