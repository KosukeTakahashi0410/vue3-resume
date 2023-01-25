<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import Photo1 from "@/assets/images/photo1.png";

const { t } = useI18n();
</script>

<template>
  <p>{{ t("test.hello") }}</p>
  <ArticleImage :imageSrc="Photo1" />
  <p>a</p>
</template>
