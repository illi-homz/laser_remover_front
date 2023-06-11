<template>
    <div class="contacts" id="contacts">
        <div class="container block-title contacts__block-title">Запишись на бесплатную консультацию</div>
        <div class="container contacts__content">
            <div class="contacts__contacts">
                <div class="contacts__contacts-img">
                    <img :src="avatarMiniImage" alt="Михаил Кисиев" width="92" height="92" />
                </div>
                <div class="contacts__contacts-name">Михаил Кисиев</div>
                <div class="contacts__contacts-text contacts__contacts-skill">Топ-мастер</div>
                <div class="contacts__contacts-links">
                    <a class="contacts__contacts-text" href="mailto:mi.kisiev@mail.com">mi.kisiev@mail.com</a>
                    <a class="contacts__contacts-text" href="tel:+7 900 000 00 00">+7 900 000 00 00</a>
                </div>
                <div class="contacts__contacts-address">
                    <nuxt-icon name="location" class="contacts__location" filled />
                    <a class="contacts__contacts-text" href="google.ru" target="_blank">
                        Владикавказ,{{ "\n" }}Первомайская 34
                    </a>
                </div>
                <div class="contacts__contacts-socials">
                    <a href="#">
                        <nuxt-icon name="vk" class="contacts__contacts-social-item" filled />
                    </a>
                    <a href="#">
                        <nuxt-icon name="instagram" class="contacts__contacts-social-item" filled />
                    </a>
                    <a href="#">
                        <nuxt-icon name="tg" class="contacts__contacts-social-item" filled />
                    </a>
                </div>
            </div>

            <div class="contacts__form">
                <div class="contacts__form-wrap">
                    <div class="contacts__form-title">Оставляй заявку, мы свяжемся с тобой для уточнения деталей</div>
                    <div class="double">
                        <InputText v-model="name" placeholder="Имя" />
                        <InputText v-model="lastname" placeholder="Фамилия" />
                    </div>
                    <InputPhone v-model="phone" />
                    <div>
                        <div class="contacts__contacts-text dark contacts__form-messagers-title">
                            Что предпочитаешь?
                        </div>
                        <div class="double">
                            <Checkbox v-model="isWhatsApp" title="WhatsApp" />
                            <Checkbox v-model="isTelegramm" title="Telegram" />
                        </div>
                    </div>
                    <Select placeholder="авивпива" :items="services" v-model="service" />
                </div>
                <div class="btn btn--black">Отправить заявку</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import avatarMiniImage from "@/assets/img/avatar-mini.png";

const name = ref("");
const lastname = ref("");
const phone = ref("");
const service = ref("");
const isWhatsApp = ref(false);
const isTelegramm = ref(false);

const services = {
    1: "qqqqqqqqq",
    2: "222222222",
    3: "eeeeeeeee",
    4: "eeeeeeeee",
    5: "eeeeeeeee",
    6: "eeeeeeeee",
    7: "eeeeeeeee",
    8: "eeeeeeeee",
    9: "eeeeeeeee",
    10: "eeeeeeeee",
};

const submit = async () => {};
</script>

<style lang="scss">
.contacts {
    padding-top: 32px;
    background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%), #ffffff;

    @include tablet {
        padding-top: 38px;
    }

    .double {
        width: 100%;
        display: flex;
        column-gap: 12px;

        & > div {
            flex: 1;
        }
    }

    .formkit-wrapper {
        border: 1px solid $grayMedium;
        border-radius: 2px;
        padding: 12px 16px;
    }

    .formkit-input {
        font-family: $mont;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: $black;

        &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: $grayMedium;
            opacity: 1; /* Firefox */
        }
        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: $grayMedium;
        }
        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: $grayMedium;
        }
    }

    @include tablet {
        background: $black;
    }

    & &__block-title {
        font-weight: 700;
        font-size: 33px;
        line-height: 40px;
        text-align: center;
        margin-bottom: 24px;

        @include tablet {
            font-size: 52px;
            line-height: 64px;
            text-align: left;
        }
    }

    & &__content {
        padding-left: 0;
        padding-right: 0;

        @include tablet {
            display: flex;
            padding-bottom: 180px;
            padding-left: 24px;
            padding-right: 24px;
        }

        @include desktop {
            padding-left: 130px;
            padding-right: 130px;
        }
    }

    &__contacts {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 24px;

        @include tablet {
            align-items: flex-start;
            padding-right: 24px;
        }
    }

    &__contacts-img {
        margin-bottom: 24px;
    }

    &__contacts-name {
        font-family: $mont;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        color: $white;
        margin-bottom: 4px;
    }

    &__contacts-text contact {
    }

    &__contacts-skill {
        margin-bottom: 24px;
    }

    &__contacts-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;

        @include tablet {
            align-items: self-start;
        }
    }

    &__contacts-text {
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: $grayMedium;

        &.dark {
            color: $grayDark2;
        }
    }

    &__contacts-address {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 32px;

        @include tablet {
            align-items: flex-start;
        }

        @include desktop {
            flex-direction: row;
        }

        a {
            display: block;
            font-family: $mont;
            font-weight: 700;
            font-size: 20px;
            line-height: 32px;
            text-align: center;
            white-space: pre-wrap;

            @include tablet {
                white-space: unset;
            }
        }

        .contacts__contacts-text {
            @include tablet {
                text-align: left;
            }
        }
    }

    &__contacts-socials {
        display: flex;
        column-gap: 28px;
    }

    &__location {
        margin-bottom: 8px;

        @include desktop {
            margin-bottom: 0;
            margin-right: 8px;
        }

        svg {
            width: 24px;
            height: 24px;
        }
    }

    &__contacts-social-item {
        svg {
            width: 32px;
            height: 32px;
        }
    }

    &__form {
        flex: 1;
        background-color: $white;
        padding: 40px;

        @include tablet {
            max-width: 480px;
        }
    }

    &__form-wrap {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-bottom: 24px;
    }

    &__form-title {
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: $gray1;
        margin-bottom: 24px;
        text-align: center;
    }

    &__form-messagers-title {
        margin-bottom: 8px;
    }
}
</style>
