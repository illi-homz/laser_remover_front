<template>
    <div class="main">
        <div class="main__header-wrapper">
            <NavBar class="container" />
            <Header />
        </div>
        <AboutMe class="container" />
        <GalleryWorks class="main__gallery-works" />
        <GalleryClients />
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

    &__header-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);
    }

    .navbar {
        width: 100%;
        margin-bottom: 45px;

        @include tablet {
            margin-bottom: 45px;
        }

        @include desktop {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }
    }

    .header {
        flex: 1;
    }
}
</style>
