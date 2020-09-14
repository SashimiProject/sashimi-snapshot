<template>
  <img
    src="https://aelf.io/gridcn/sashimi200x200.jpg"
    class="d-inline-block bg-gray-9 v-align-middle line-height-0 circle border"
    :style="{
      width: `${size || 22}px`,
      height: `${size || 22}px`
    }"
  />
</template>

<script>
export default {
  props: ['namespace', 'size']
};
</script>
