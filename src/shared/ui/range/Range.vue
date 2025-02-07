<script setup lang="ts">
withDefaults(
  defineProps<{
    min: number;
    max: number;
    step?: number;
    showValue?: boolean;
  }>(),
  {
    step: 1,
    showValue: true,
  },
);

const rangeValue = defineModel<any>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  rangeValue.value = Number(target.value);
};
</script>

<template>
  <label class="flex flex-col font-medium gap-y-1">
    <div class="flex items-end justify-between font-normal">
      <span class="text-base-content/90">
        <slot></slot>
      </span>
      <span v-if="showValue" class="text-base-content/90 font-medium">
        {{ rangeValue }}
      </span>
    </div>
    <input
      :value="rangeValue"
      @input="handleInput($event)"
      type="range"
      id="volume"
      name="volume"
      :min
      :max
      :step
      class="slider"
    />
  </label>
</template>

<style>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--primary);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--primary);
  cursor: pointer;
}
</style>
