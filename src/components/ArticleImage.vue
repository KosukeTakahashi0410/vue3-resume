<script setup lang="ts">
type Props = {
  imageSrc: string;
  description?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="m-[8px] flex flex-col items-start">
    <img
      :src="props.imageSrc"
      alt=""
      loading="lazy"
      class="h-[180px] w-[320px] md:h-[360px] md:w-[640px]"
    />
    <p v-if="!!props.description" class="text-sm text-gray-400 w-fit">
      {{ props.description }}
    </p>
  </div>
</template>
