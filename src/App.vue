<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { routes } from "@/router";
import { computed, ref } from "vue";
import { SECTIONS } from "@/constants/section";
import { useRoute } from "vue-router";
import { useLanguage } from "@/composables/useLanguage";
import { getHashedLink } from "@/utils/url";

const route = useRoute();
const { t } = useI18n();
const { changeLanguage, isJa } = useLanguage();
const isOpenMenu = ref<boolean>(false);

const selectedSection = computed((): Array<string> => {
  switch (route.path) {
    case "/":
      return SECTIONS.HOME;
    default:
      return SECTIONS.WORK;
  }
});

const getSectionLocale = (key: string) => {
  if (route.path === "/") {
    return t(`sections.home.${key}`);
  }

  return t(`sections.work.${key}`);
};

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="h-screen bg-gray-50 dark:bg-gray-800 dark:text-white font-normal">
    <header
      class="flex justify-between items-center p-5 sticky top-0 z-50 bg-gray-50 dark:bg-gray-800"
    >
      <a
        href="https://github.com/KosukeTakahashi0410"
        target="blank"
        class="hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-lg"
      >
        <img src="@/assets/octopus.svg" alt="logo" class="h-[24px] w-[24px]" />
      </a>
      <div class="flex justify-between items-center">
        <button
          type="button"
          @click="changeLanguage"
          class="md:mr-2 mr-0 hover:bg-gray-700 p-1.5 rounded-lg"
        >
          <img
            v-if="isJa"
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
        <button @click="toggleMenu" class="md:hidden top-0 right-0 ml-[8px]">
          <img src="@/assets/menu.svg" alt="us" class="h-[24px] w-[24px]" />
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
      <aside class="w-64 hidden md:block" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li v-for="(section, index) in selectedSection" :key="index">
              <router-link
                :to="getHashedLink(route.path, section)"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >{{ getSectionLocale(section) }}</router-link
              >
            </li>
          </ul>
        </div>
      </aside>
      <main class="w-full h-full bg-gray-50 dark:bg-gray-800">
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
