<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleBody from "@/components/ArticleBody.vue";
import ArticleSection from "@/components/ArticleSection.vue";
import Photo2 from "@/assets/images/photo2.png";

const { t } = useI18n();
</script>

<template>
  <ArticleWrapper>
    <ArticleSection>
      <ArticleHeader :text="test" variant="h1" />
      <ArticleImage
        :imageSrc="Photo2"
        :description="t('home.photo.description')"
      />
      <ArticleBody :body="test" />
    </ArticleSection>
  </ArticleWrapper>
</template>
