<script setup lang="ts">
type Props = {
  body: string;
};

const props = defineProps<Props>();
</script>

<template>
  <p class="test-base whitespace-pre-line">{{ props.body }}</p>
</template>
