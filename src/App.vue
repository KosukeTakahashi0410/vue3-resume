<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="h-full bg-gray-50 dark:bg-gray-800">
    <header>
      <p>resume</p>
    </header>
    <div class="flex">
      <aside class="w-64" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >HOME</router-link
              >
            </li>
            <li>
              <router-link
                to="/works"
                class="p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >WORKS</router-link
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
