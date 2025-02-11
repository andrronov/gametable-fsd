<script setup lang="ts">
import { Button } from "@/shared/ui";

defineProps<{
  pages: number;
  current: number;
}>();

const emit = defineEmits<{
  "select-page": [page: number];
}>();
</script>

<template>
  <div class="flex items-center gap-3 w-full max-w-5/6 overflow-x-auto">
    <Button
      v-for="page in pages"
      :key="page"
      @click="emit('select-page', page)"
      :variant="current === page ? 'base' : 'outline'"
    >
      {{ page }}
    </Button>
  </div>
</template>
