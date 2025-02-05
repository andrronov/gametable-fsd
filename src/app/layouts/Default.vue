<script setup lang="ts">
import { Header } from '@/widgets/app-header';
import { usePlatform } from '@/shared/lib/composables/use-platform';

const { theme } = usePlatform();
</script>

<template>
    <Header />
    <div class="w-full h-screen flex flex-col p-4">
        <slot />
    </div>
</template>