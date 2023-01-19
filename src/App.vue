<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { routes } from "@/router";
import { computed } from "vue";
const { t, locale } = useI18n();

/** 言語切り替え */
const changeLanguage = () => {
  switch (locale.value) {
    case "ja":
      locale.value = "en";
      return;
    default:
      locale.value = "ja";
  }
};

const isJaLang = computed(() => locale.value === "ja");
</script>

<template>
  <div class="h-screen bg-gray-50 dark:bg-gray-800 dark:text-white font-normal">
    <header class="flex justify-between items-center p-5 sticky top-0 z-50">
      <RouterLink to="/">
        <img src="@/assets/octopus.svg" alt="logo" class="h-[24px] w-[24px]" />
      </RouterLink>
      <div class="flex justify-between items-center">
        <!-- TODO dark対応 -->
        <button type="button" @click="changeLanguage" class="md:mr-2 mr-0">
          <img
            v-if="isJaLang"
            src="@/assets/japan.svg"
            alt="japan"
            class="h-[24px] w-[24px]"
          />
          <img
            v-else
            src="@/assets/america.svg"
            alt="us"
            class="h-[24px] w-[24px]"
          />
        </button>
        <ul class="md:flex hidden gap-x-2">
          <li
            v-for="(route, index) in routes"
            :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-lg"
          >
            <router-link :to="route.path">
              {{ t(`header.link.${route.name}`) }}
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="flex">
      <!-- FIXME: サイドバーは各セクションにしたい -->
      <aside class="w-64" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >{{ "わろた" }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/works"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >{{ "わろた" }}</router-link
              >
            </li>
          </ul>
        </div>
      </aside>
      <main class="bg-gray-50 dark:bg-gray-800">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.text {
  color: red;
}
</style>
