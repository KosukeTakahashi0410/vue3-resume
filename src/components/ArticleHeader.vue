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

<!-- MEMO: h1 18px h2 14px h3  -->
<template>
  <router-link v-if="hash" :to="getHashedLink(route.path, hash)">
    <h1
      v-if="props.variant === 'h1'"
      class="text-2xl mb-[8px] whitespace-pre-line"
    >
      {{ props.text }}
    </h1>
    <h2
      v-else-if="props.variant === 'h2'"
      class="text-xl mb-[8px] whitespace-pre-line"
    >
      {{ props.text }}
    </h2>
    <h3 v-else class="text-lg mb-[8px] whitespace-pre-line">
      {{ props.text }}
    </h3>
  </router-link>
  <template v-else>
    <h1
      v-if="props.variant === 'h1'"
      class="text-2xl mb-[8px] whitespace-pre-line"
    >
      {{ props.text }}
    </h1>
    <h2
      v-else-if="props.variant === 'h2'"
      class="text-xl mb-[8px] whitespace-pre-line"
    >
      {{ props.text }}
    </h2>
    <h3 v-else class="text-lg mb-[8px] whitespace-pre-line">
      {{ props.text }}
    </h3>
  </template>
</template>
