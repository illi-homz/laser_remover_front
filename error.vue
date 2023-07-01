!
<template>
    <div class="error">
        <div class="error__wrapper">
            <div class="error__text">Увы но страницы по адресу {{ route.fullPath }} не существует</div>
            <nuxt-link to="/" class="error__link">на главную</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style lang="scss">
.error {
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
