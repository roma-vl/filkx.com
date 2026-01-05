<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    :style="{ width: props.size + 'px', height: props.size + 'px' }"
  >
    <path d="M4 4H20V7H7V10H18V13H7V20H4V4Z" fill="currentColor" />
    <path d="M14 16H20V19H14V16Z" fill="currentColor" opacity="0.5" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: number | string
  class?: string
}>(), {
  size: 24
})
</script>
