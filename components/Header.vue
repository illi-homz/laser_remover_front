<template>
    <div class="header">
        <!-- header - hello man -->
        <div class="container header__container">
            <div class="header__content">
                <div class="header__caption">удаление<br />татуировок<br />и татуажа</div>
                <div class="header__info">
                    Без ожогов и шрамов
                    <div class="dot" />
                    Без боли
                    <div class="dot" />
                    Бесплатная консультация
                </div>
            </div>
            <img src="@/assets/img/avatar.png" class="header__avatar" />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.header {
    height: 1px;
    min-height: 100vh;
    background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);

    &__container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    &__content {
        position: relative;
        width: 100%;
    }

    &__info {
        position: absolute;
        left: 0;
        bottom: -34px;
        display: flex;
        align-items: center;
        color: $white;
        font-family: sans-serif;
        font-size: 16px;
        line-height: 18px;
        font-weight: 700;
        transform: translateY(100%);

        .dot {
            margin: 0 12px;
        }
    }

    &__caption {
        font-family: serif;
        color: $white;
        font-size: 68px;
        line-height: 69px;
        font-weight: 700;
        text-transform: uppercase;
    }

    &__avatar {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 80%;
        max-height: 750px;
    }
}
</style>
