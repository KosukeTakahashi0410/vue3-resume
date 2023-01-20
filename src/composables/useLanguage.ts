import { useI18n } from "vue-i18n";
import { computed } from "vue";

export const useLanguage = () => {
  const { locale } = useI18n();

  /** 言語切り替え */
  const changeLanguage = (): void => {
    switch (locale.value) {
      case "ja":
        locale.value = "en";
        return;
      default:
        locale.value = "ja";
    }
  };

  /** 日本語かどうかを判定 */
  const isJa = computed((): boolean => locale.value === "ja");

  return {
    changeLanguage,
    isJa,
  };
};
