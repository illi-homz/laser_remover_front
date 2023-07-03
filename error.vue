!
<template>
    <div class="error-page">
        <div class="container">
            <NavBar :links="links" main-logo-link="/" :prefetch="true" />

            <div class="error-page__wrapper">
                <div class="error-page__404">404</div>
                <div class="error-page__text">Возможно этой страницы уже не существует</div>
                <nuxt-link to="/" class="error-page__link btn">На главную</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const links = [
    { id: 0, title: "Обо мне", url: "/#aboutme" },
    { id: 1, title: "Галерея", url: "/#gallery-works" },
    { id: 2, title: "Отзывы", url: "/#gallery-text-feedbacks" },
    { id: 3, title: "Частые вопросы", url: "/#questions" },
    { id: 4, title: "Контакты", url: "/#contacts" },
];
</script>

<style lang="scss">
.error-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__404 {
        color: $white;
        font-size: 68px;
        line-height: 69px;
        font-weight: bold;
        text-align: center;
        font-family: $palladio;
        margin-bottom: 14px;
    }

    &__text {
        color: $white;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        font-family: $mont;
        margin-bottom: 32px;
    }

    &__link {
    }
}
</style>
