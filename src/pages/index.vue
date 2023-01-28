<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import Photo2 from "@/assets/images/photo2.png";

const { t } = useI18n();
</script>

<template>
  <p>{{ t("test.hello") }}</p>
  <ArticleWrapper>
    <ArticleImage :imageSrc="Photo2" />
  </ArticleWrapper>
</template>
