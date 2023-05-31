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
            <img src="@/assets/img/avatar.webp" class="header__avatar" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header {
    display: flex;
    flex-direction: column;

    &__container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        @include desktop {
            width: 100%;
            justify-content: center;
        }
    }

    &__content {
        position: relative;

        @include desktop {
            width: 100%;
        }
    }

    &__caption {
        font-family: serif;
        color: $white;
        font-size: 38px;
        line-height: 46px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 30px;

        @include desktop {
            margin-bottom: unset;
            font-size: 68px;
            line-height: 69px;
        }
    }

    &__info {
        color: $white;
        font-family: sans-serif;
        font-size: 16px;
        line-height: 18px;
        font-weight: 700;

        @include tablet {
            display: flex;
            align-items: center;
        }

        @include desktop {
            position: absolute;
            left: 0;
            bottom: -34px;
            transform: translateY(100%);
        }

        .dot {
            margin: 12px 0;

            @include desktop {
                margin: 0 12px;
            }
        }
    }

    &__avatar {
        max-width: 100%;

        @include tablet {
        }

        @include desktop {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: -1;
            height: 80%;
            max-height: 750px;
        }
    }
}
</style>
