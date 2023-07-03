<template>
    <div class="default-layout">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineNuxtLink({
    trailingSlash: 'append',
});
</script>

<style lang="scss">
.default-layout {
    min-height: 100vh;
    background-color: $white;
}
</style>
