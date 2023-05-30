<template>
    <div class="main">
        <NavBar class="container" />
        <Header />
    </div>
</template>

<script setup lang="ts">
// import { toRaw } from "vue";
// const {
//     data: { value: allAnysValue },
// } = await useAsyncGql("anys");

// const allAnys = toRaw(allAnysValue)?.allAnys;
</script>

<style lang="scss">
.main {
    position: relative;
    min-height: 200vh;
    
    .navbar {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }
}
</style>
