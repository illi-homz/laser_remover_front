<template>
    <div class="navbar" id="navbar">
        <nuxt-link :to="mainLogoLink" class="navbar__logo-link" @click="close">
            <nuxt-icon name="logo" class="navbar__logo" filled />
        </nuxt-link>

        <div class="navbar__content" :class="{ opened: inOpened }">
            <ul class="navbar__links">
                <li v-for="{ id, title, url } in links" :key="id" class="navbar__link" @click="close">
                    <nuxt-link :to="url">{{ title }}</nuxt-link>
                </li>
            </ul>

            <nuxt-link class="btn btn--medium navbar__btn" to="#contacts" @click="close">Записаться</nuxt-link>
        </div>

        <div class="navbar__burger" :class="{ opened: inOpened }" @click="toggleMenu">
            <div class="navbar__burger-wrapper">
                <div class="navbar__burger-lines" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LinkType } from "~/types";

const inOpened = ref(false);

const props = defineProps<{
    links?: LinkType[];
    mainLogoLink?: string;
}>();

const open = () => {
    inOpened.value = true;
    const body = document.querySelector("body");
    body?.classList.add("lock");
    window.scrollTo(0, 0);
};
const close = () => {
    inOpened.value = false;
    const body = document.querySelector("body");
    body?.classList.remove("lock");
};

const toggleMenu = () => {
    inOpened.value ? close() : open();
};

const links = computed(() => {
    return props.links || [];
});
const mainLogoLink = computed(() => {
    return props.mainLogoLink || '/';
});
</script>

<style lang="scss">
.navbar {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    z-index: 100 !important;
    position: relative;

    &__content {
        position: absolute;
        left: 0;
        top: 0;
        background-color: $black;
        width: 100vw;
        height: 100vh;
        z-index: 101;
        display: flex;
        flex-direction: column;
        padding: 32px 20px;
        transform: translateY(-50%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;

        &.opened {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        @include tablet {
            align-items: center;
            position: static;
            width: auto;
            height: auto;
            flex-direction: row;
            background-color: $transparent;
            padding: 0;
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    &__logo.nuxt-icon {
        svg {
            height: 74px;
            width: 108px;

            path {
                fill: $white !important;
            }
        }
    }

    &__logo-link {
        display: block;
        margin-right: auto;
        cursor: pointer;
        position: relative;
        z-index: 102;
    }

    &__links {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 40px;
        column-gap: 30px;

        @include tablet {
            margin-left: 32px;
            flex-direction: row;
            justify-content: flex-end;
            flex-wrap: wrap;
            row-gap: 8px;
            column-gap: 30px;
        }
    }

    &__link {
        position: relative;

        &::before {
            content: "";
            display: none;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            transform: translateY(4px);
            background-color: $white;
        }

        &:hover {
            &::before {
                display: block;
            }
        }

        a {
            font-family: $mont;
            color: $white;
            text-transform: uppercase;
            font-size: 18px;
            line-height: 23px;
            font-weight: 600;
        }
    }

    & &__btn {
        @include tablet {
            margin-left: 30px;
        }

        @include desktop {
            margin-left: 50px;
        }

        @include fullscreen {
            margin-left: 70px;
        }
    }

    &__burger {
        position: relative;
        z-index: 105;
        padding: 24px;

        @include tablet {
            display: none;
        }

        &.opened {
            .navbar__burger-wrapper {
                &::before,
                &::after {
                    top: 50%;
                }

                &::before {
                    transform: translateY(-50%) rotate(-135deg);
                }
                &::after {
                    transform: translateY(-50%) rotate(135deg);
                }
            }

            .navbar__burger-lines {
                opacity: 0;
            }
        }
    }

    &__burger-wrapper {
        height: 14px;
        width: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: $white;
            transition: all 0.2s ease;
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }

    &__burger-lines {
        height: 2px;
        background-color: $white;
    }
}
</style>
