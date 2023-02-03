<script setup lang="ts">
type Props = {
  imageSrc: string;
  description?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="m-[8px] flex flex-col items-center">
    <img
      :src="props.imageSrc"
      alt=""
      class="max-h-[300px] max-w-[300px] md:max-h-[500px] md:max-w-[500px] m-auto"
    />
    <p v-if="!!props.description" class="text-sm text-gray-400 w-fit">
      {{ props.description }}
    </p>
  </div>
</template>
