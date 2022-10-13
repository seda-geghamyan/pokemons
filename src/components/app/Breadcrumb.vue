<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-4">
      <li
        v-for="(item, index) in list"
        :key="item"
        class="breadcrumb-item text-capitalize"
      >
        <component
          :is="index < list.length - 1 ? 'router-link' : 'span'"
          :to="`/${item}`"
        >
          {{ item }}
        </component>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
