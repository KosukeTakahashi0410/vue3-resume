<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleBody from "@/components/ArticleBody.vue";
import ArticleSection from "@/components/ArticleSection.vue";

const { t } = useI18n();
</script>

<template>
  <ArticleWrapper>
    <ArticleSection>
      <ArticleHeader :text="t('work.title')" variant="h1" />
    </ArticleSection>
    <ArticleSection>
      <ArticleHeader :text="t('work.otp.title')" variant="h2" />
      <ArticleBody :body="t('work.otp.title')" />
    </ArticleSection>
    <ArticleSection>
      <ArticleHeader :text="t('work.gotsugotsu.title')" variant="h2" />
      <ArticleBody :body="t('work.gotsugotsu.title')" />
    </ArticleSection>
    <ArticleSection>
      <ArticleHeader :text="t('work.tableCreator.title')" variant="h2" />
      <ArticleBody :body="t('work.tableCreator.title')" />
    </ArticleSection>
  </ArticleWrapper>
</template>
