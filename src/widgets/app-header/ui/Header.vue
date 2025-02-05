<script setup lang="ts">
import { ThemeSwitcher } from '@/features/settings';
import { Logo } from '@/shared/ui';
</script>

<template>
  <header class="w-full h-16 flex items-center justify-between shadow-md bg-primary p-4">
    <Logo />
    <ThemeSwitcher />
  </header>
</template>