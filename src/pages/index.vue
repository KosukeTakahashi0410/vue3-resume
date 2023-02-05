<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleBody from "@/components/ArticleBody.vue";
import Photo2 from "@/assets/images/photo2.png";

const { t } = useI18n();
</script>

<template>
  <!-- fixme: article wrapper にflexとflex gapをつける -->
  <ArticleWrapper>
    <ArticleHeader :text="t('home.title')" variant="h1" />
    <ArticleHeader :text="t('home.profile.title')" variant="h2" />
    <ArticleImage
      :imageSrc="Photo2"
      :description="t('home.photo.description')"
    />
    <ArticleBody :body="t('home.profile.body')" />
    <ArticleHeader :text="t('home.profile.title')" variant="h2" />
  </ArticleWrapper>
</template>
