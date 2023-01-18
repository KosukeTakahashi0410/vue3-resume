<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { routes } from "@/router";

const { t } = useI18n();
</script>

<template>
  <div class="h-screen bg-gray-50 dark:bg-gray-800">
    <header class="flex justify-between p-5">
      <!-- TODO ここを画像なりアイコンにしたい -->
      <p class="dark:text-white">{{ t("header.title") }}</p>
      <ul class="md:flex hidden gap-x-2">
        <li
          v-for="(route, index) in routes"
          :key="index"
          class="dark:text-white"
        >
          <a :href="route.path">{{ t(`header.link.${route.name}`) }}</a>
        </li>
      </ul>
    </header>
    <div class="flex">
      <!-- FIXME: サイドバーは各セクションにしたい -->
      <aside class="w-64" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >{{ t("sideBar.top") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/works"
                class="p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >{{ t("sideBar.work") }}</router-link
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
