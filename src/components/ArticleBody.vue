<script setup lang="ts">
type Props = {
  body: string;
};

const props = defineProps<Props>();
</script>

<template>
  <p>{{ props.body }}</p>
</template>
