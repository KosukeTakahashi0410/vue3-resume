<script setup lang="ts">
type Props = {
  text: string;
  variant: "h1" | "h2" | "h3";
};

const props = defineProps<Props>();
</script>

<template>
  <h1 v-if="props.variant === 'h1'">{{ props.text }}</h1>
  <h2 v-else-if="props.variant === 'h2'">{{ props.text }}</h2>
  <h3 v-else>{{ props.text }}</h3>
</template>
