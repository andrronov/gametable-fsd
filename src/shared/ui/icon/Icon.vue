<script setup lang="ts">
import { Icon as Iconif } from "@iconify/vue";

defineProps<{
  name: string;
}>();
</script>

<template>
  <Iconif :icon="name" v-bind="$attrs" />
</template>
