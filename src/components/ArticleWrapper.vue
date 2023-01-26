<script setup lang="ts">
type Props = {
  imageSrc: string;
};

const props = defineProps<Props>();
</script>

<template>
  <!-- ここをwrapperにする -->
  <div>
    <slot></slot>
  </div>
</template>
