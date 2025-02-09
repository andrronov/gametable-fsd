<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { layouts, type Layout } from "./layouts";

const route = useRoute();

const routeLayout = computed(() => route.meta.layout as Layout);
</script>

<template>
  <component :is="layouts[routeLayout]">
    <router-view />
  </component>
</template>
