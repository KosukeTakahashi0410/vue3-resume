<script setup lang="ts">
type Props = {
  imageSrc: string;
  description?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="m-[8px]">
    <img
      :src="props.imageSrc"
      alt=""
      class="max-h-[300px] max-w-[300px] md:max-h-[500px] md:max-w-[500px] m-auto"
    />
    <p v-if="!!props.description">{{ props.description }}</p>
  </div>
</template>
