<script setup lang="ts">
defineProps<{
  readonly options: Array<string>;
}>();

const modelValue = defineModel<string>({
  default: undefined,
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  modelValue.value = target.value;
};
</script>

<template>
  <label class="flex flex-col font-medium">
    <div class="flex items-end justify-between font-normal">
      <span class="text-base-content/90">
        <slot></slot>
      </span>
    </div>
    <select
      :value="modelValue"
      @input="handleInput($event)"
      class="p-2 select border-2 border-base-300"
    >
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<style>
:root {
  --select-bg: var(--base-100);
}

.input,
.input-disabled {
  background-color: var(--select-bg) !important;
}

.input-disabled {
  border-color: var(--base-300) !important;
}
</style>
