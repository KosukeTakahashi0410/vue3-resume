<script setup lang="ts">
type Props = {
  imagePath: string;
};

const props = defineProps<Props>();
</script>

<template>
  <!-- FIXME: VueImageみたいに最適化できないかを検討 -->
  <img :src="props.imagePath" alt="" />
</template>
