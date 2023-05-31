<template>
    <div class="main">
        <div class="main__header-wrapper">
            <NavBar class="container" />
            <Header />
        </div>
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

    &__header-wrapper {
        display: flex;
        flex-direction: column;
        // height: 1px;
        min-height: 100vh;
        background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);

        // @include desktop {
        //     display: block;
        // }
    }

    .navbar {
        width: 100%;

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
