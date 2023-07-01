!
<template>
    <div class="error-page">
        <div class="error-page__wrapper">
            <div class="error-page__404">404</div>
            <div class="error-page__text">Увы, но страница {{ route.path }} не найдена</div>
            <nuxt-link to="/" class="error-page__link">на главную</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style lang="scss">
.error-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 768px;
    }

    &__404 {
        color: $white;
        font-size: 100px;
        line-height: 90px;
        text-align: center;
        font-family: $palladio;
        margin-bottom: 24px;
    }

    &__text {
        color: $white;
        font-size: 42px;
        line-height: 50px;
        text-align: center;
        font-family: $palladio;
        margin-bottom: 24px;
    }

    &__link {
        color: $white;
        font-size: 16px;
        line-height: 22px;
        transition: all .2s ease;
        font-family: $mont;

        &:hover {
            color: $grayMedium;
        }
    }
}
</style>
