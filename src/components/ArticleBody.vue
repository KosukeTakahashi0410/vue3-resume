<script setup lang="ts">
import { useI18n } from "vue-i18n";

type Props = {
  body: string;
};

const props = defineProps<Props>();
</script>

<template>
  <p>{{ props.body }}</p>
</template>
