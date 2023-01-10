<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div>
    <p>this is works page</p>
    <p>{{ t("test.hello") }}</p>
  </div>
</template>

<style scoped></style>
