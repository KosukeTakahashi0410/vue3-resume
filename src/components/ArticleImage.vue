<script setup lang="ts">
type Props = {
  imageSrc: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <img
      :src="props.imageSrc"
      alt=""
      class="max-h-[300px] max-w-[300px] md:max-h-[500px] md:max-w-[500px] m-auto"
    />
  </div>
</template>
