<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import Photo2 from "@/assets/images/photo2.png";

const { t } = useI18n();
</script>

<template>
  <ArticleWrapper>
    <ArticleHeader text="aaaa" variant="h1" />
    <ArticleImage :imageSrc="Photo2" />
  </ArticleWrapper>
</template>
