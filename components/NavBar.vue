<template>
    <div class="navbar">
        <nuxt-link to="#" class="navbar__logo-link">
            <nuxt-icon name="logo" class="navbar__logo" filled />
        </nuxt-link>

        <ul class="navbar__links">
            <li v-for="{ id, title, url } in links" :key="id" class="navbar__link">
                <nuxt-link :to="url">{{ title }}</nuxt-link>
            </li>
        </ul>

        <div class="btn btn--medium navbar__btn" @click="showSignUpPopup">Записаться</div>

        <div class="navbar__burger">
            <div class="navbar__burger-lines" />
        </div>
    </div>
</template>

<script setup lang="ts">
const links = [
    { id: 0, title: "Обо мне", url: "#aboutme" },
    { id: 1, title: "Галерея", url: "#gallery" },
    { id: 2, title: "Отзывы", url: "#feedbacks" },
    { id: 3, title: "Частые вопросы", url: "#questions" },
    { id: 4, title: "Контакты", url: "#contacts" },
];

const showSignUpPopup = () => {
    console.log('showSignUpPopup')
}

</script>

<style lang="scss">
.navbar {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
	z-index: 100 !important;
    
    @include tablet {
        background: linear-gradient(98.79deg, #23252C 30.69%, #000000 100%);
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
	}

    &__links {
        display: none;
        flex-wrap: wrap;
        justify-content: flex-end;
        row-gap: 8px;
        column-gap: 30px;
        margin-left: 32px;

        @include tablet {
            display: flex;
        }
    }

    &__link {
        position: relative;

        &::before {
            content: '';
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
        display: none;

        @include tablet {
            display: flex;
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
        height: 14px;
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: $white;
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }

        @include tablet {
            display: none;
        }
    }

    &__burger-lines {
        height: 2px;
        background-color: $white;
    }
}
</style>
