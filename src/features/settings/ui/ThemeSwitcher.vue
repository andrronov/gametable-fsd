<script setup lang="ts">
import { ICONS } from "@/shared/assets";
import { useAppStore } from "@/shared/stores/application";
import { Icon } from "@/shared/ui";

const appStore = useAppStore();
</script>

<template>
  <button
    class="hover:cursor-pointer text-primary-content hover:brightness-125"
    @click="appStore.toggleTheme()"
  >
    <Icon
      class="w-5 h-5"
      :name="appStore.storedTheme === 'light' ? ICONS.sun : ICONS.moon"
    />
  </button>
</template>
