<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ArticleImage from "@/components/ArticleImage.vue";
import ArticleWrapper from "@/components/ArticleWrapper.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleBody from "@/components/ArticleBody.vue";
import ArticleSection from "@/components/ArticleSection.vue";
import Photo2 from "@/assets/images/photo2.png";
import { SECTIONS } from "@/constants/section";

const { t } = useI18n();
</script>

<template>
  <ArticleWrapper>
    <ArticleSection>
      <ArticleHeader :text="t('home.title')" variant="h1" />
      <ArticleHeader
        :text="t('home.profile.title')"
        variant="h2"
        :hash="SECTIONS.HOME[0]"
      />
      <ArticleImage
        :imageSrc="Photo2"
        :description="t('home.photo.description')"
      />
      <ArticleBody :body="t('home.profile.body')" />
    </ArticleSection>
    <ArticleSection>
      <ArticleHeader
        :text="t('home.career.title')"
        variant="h2"
        :hash="SECTIONS.HOME[1]"
      />
      <ArticleHeader :text="t('home.career.teamLab.title')" variant="h3" />
      <ArticleBody :body="t('home.career.teamLab.body')" />
      <ArticleHeader
        :text="t('home.career.teamLabEngineering.title')"
        variant="h3"
      />
      <ArticleBody :body="t('home.career.teamLabEngineering.body')" />
      <ArticleHeader :text="t('home.career.jTips.title')" variant="h3" />
      <ArticleBody :body="t('home.career.jTips.body')" />
    </ArticleSection>
    <ArticleSection>
      <ArticleHeader
        :text="t('home.educationalBackground.title')"
        variant="h2"
        :hash="SECTIONS.HOME[2]"
      />
      <ArticleHeader
        :text="t('home.educationalBackground.university.title')"
        variant="h3"
      />
      <ArticleBody :body="t('home.educationalBackground.university.body')" />
    </ArticleSection>
  </ArticleWrapper>
</template>
