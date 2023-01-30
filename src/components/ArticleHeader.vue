<script setup lang="ts">
import { getHashedLink } from "@/utils/url";
import { useRoute } from "vue-router";

const route = useRoute();

type Props = {
  text: string;
  variant: "h1" | "h2" | "h3";
  hash?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <router-link v-if="hash" :to="getHashedLink(route.path, hash)">
    <h1 v-if="props.variant === 'h1'">{{ props.text }}</h1>
    <h2 v-else-if="props.variant === 'h2'">{{ props.text }}</h2>
    <h3 v-else>{{ props.text }}</h3>
  </router-link>
  <template v-else>
    <h1 v-if="props.variant === 'h1'">{{ props.text }}</h1>
    <h2 v-else-if="props.variant === 'h2'">{{ props.text }}</h2>
    <h3 v-else>{{ props.text }}</h3>
  </template>
</template>
