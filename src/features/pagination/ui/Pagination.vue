<script setup lang="ts">
import { ref } from "vue";
import { PER_PAGE, type PerPage } from "@/shared/types";
import { Select } from "@/shared/ui";
import NavigationButtons from "./NavigationButtons.vue";

const props = defineProps<{
  pages: number;
  perPage: number;
  current: number;
}>();

const perPageVal = ref<PerPage>(Number(String(props.perPage)) as PerPage);

const emit = defineEmits<{
  "select-per-page": [perPage: PerPage];
  "select-page": [page: number];
}>();

const handlePageSelect = (page: number) => emit("select-page", page);
</script>

<template>
  <nav class="w-full flex items-center justify-between gap-2 p-2">
    <NavigationButtons @select-page="handlePageSelect" :pages :current />
    <Select
      v-model="perPageVal"
      @change="emit('select-per-page', $event.target.value)"
      :options="Array.from(PER_PAGE)"
      class="w-1/6"
      type="number"
    />
  </nav>
</template>
