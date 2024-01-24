<template>
    <div class="contacts" id="contacts">
        <div class="container block-title contacts__block-title">
            Запишись на бесплатную консультацию
        </div>
        <div class="container contacts__content">
            <div class="contacts__contacts">
                <div class="contacts__contacts-img">
                    <img
                        :src="avatarMiniImage"
                        alt="Михаил Кисиев"
                        width="92"
                        height="92"
                    />
                </div>
                <div class="contacts__contacts-name">Михаил Кисиев</div>
                <div class="contacts__contacts-text contacts__contacts-skill">
                    Специалист по удалению татуировок и татуажа
                </div>
                <div class="contacts__contacts-links">
                    <a class="contacts__contacts-text" :href="`mailto:${EMAIL}`">{{
                        EMAIL
                    }}</a>
                    <a
                        class="contacts__contacts-text"
                        :href="`tel:${TELPHONE}`"
                        >{{ TELPHONE }}</a
                    >
                </div>
                <div class="contacts__contacts-address">
                    <nuxt-icon
                        name="location"
                        class="contacts__location"
                        filled
                    />
                    <a
                        class="contacts__contacts-text"
                        :href="ADDRESS_URL"
                        target="_blank"
                    >
                        Владикавказ,{{ "\n" }}Первомайская 34<br>Клиника Аллы Битаровой
                    </a>
                </div>
                <div class="contacts__contacts-socials">
                    <a :href="VK_URL" target="_blank">
                        <nuxt-icon
                            name="vk"
                            class="contacts__contacts-social-item"
                            filled
                        />
                    </a>
                    <a :href="INSTA_URL" target="_blank">
                        <nuxt-icon
                            name="instagram"
                            class="contacts__contacts-social-item"
                            filled
                        />
                    </a>
                    <a :href="TG_URL" target="_blank">
                        <nuxt-icon
                            name="tg"
                            class="contacts__contacts-social-item"
                            filled
                        />
                    </a>
                </div>
            </div>

            <div class="contacts__form">
                <div class="contacts__form-wrap">
                    <div class="contacts__form-title">
                        Оставляй заявку, мы свяжемся с тобой для уточнения
                        деталей
                    </div>
                    <div class="double">
                        <InputText
                            v-model="name"
                            :error="errors.name"
                            placeholder="Имя"
                        />
                        <InputText
                            v-model="lastname"
                            :error="errors.lastname"
                            placeholder="Фамилия"
                        />
                    </div>
                    <InputPhone
                        v-model="phone"
                        :error="errors.phone"
                        class="mb18"
                    />
                    <div class="mb18">
                        <div
                            class="contacts__contacts-text dark contacts__form-messagers-title"
                        >
                            Что предпочитаешь?
                        </div>
                        <div class="double">
                            <Checkbox v-model="isWhatsApp" title="WhatsApp" />
                            <Checkbox v-model="isTelegram" title="Telegram" />
                        </div>
                    </div>
                    <Select
                        v-if="services"
                        placeholder="Выбери услугу"
                        :items="services"
                        v-model="service"
                        :error="errors.service"
                    />
                </div>
                <div class="btn btn--black" @click="submit">
                    Отправить заявку
                </div>
            </div>
            <div class="contacts__banner" />
        </div>
    </div>
</template>

<script setup lang="ts">
import avatarMiniImage from "@/assets/img/avatar-mini.png";
import { sendFormToTelegram } from "@/api/sendFormToTelegram";
import { ContactsFormDataType, ServiceType } from "~/types";

const TELPHONE = "+7 (962) 746-82-14";
const VK_URL = "https://vk.com/mikhailkisiev";
const EMAIL = "misha132001@mail.ru";
const INSTA_URL = "https://instagramm.com/mikhail_kisiev";
const TG_URL = "https://t.me/mikhail_kisiev";
const ADDRESS_URL =
    "https://yandex.ru/maps/33/vladikavkaz/house/pervomayskaya_ulitsa_34a/YE0YcAJpSkYGQFppfXxzc31ibA==/?ll=44.659397%2C43.022057&z=20.6";
const props = defineProps<{
    services?: ServiceType[];
}>();

const name = ref("");
const lastname = ref("");
const phone = ref("");
const service = ref("");
const isWhatsApp = ref(false);
const isTelegram = ref(false);
const errors = ref<{ [key: string]: string }>({});

const clean = () => {
    name.value = "";
    lastname.value = "";
    phone.value = "";
    service.value = "";
    isWhatsApp.value = false;
    isTelegram.value = false;
    errors.value = {};
};

const services = computed(() => {
    return props.services?.reduce<{ [key: string]: string }>(
        (acc, { id, title }: ServiceType) => {
            return {
                ...acc,
                [id]: title,
            };
        },
        {}
    );
});

const formData = computed((): ContactsFormDataType => {
    const serviceId = service.value;
    const whatsapp = isWhatsApp.value && "WhatsApp";
    const telegram = isTelegram.value && "Telegram";
    const messegers: string[] = [];

    whatsapp && messegers.push(whatsapp);
    telegram && messegers.push(telegram);

    return {
        name: name.value,
        lastname: lastname.value,
        phone: phone.value,
        service: services.value?.[serviceId] || "",
        messegers,
    };
});

const required = (message = "Обязательное поле") => {
    return (value: any) => !!value || message;
};

const validation = {
    name: [required("Укажите ваше имя")],
    lastname: [],
    phone: [
        required("Укажите телефон для связи"),
        minLength(phonePattern.length - 1, "Некорректный номер"),
    ],
    service: [required("Выберите услугу")],
    messegers: [],
};

const submit = async () => {
    const [result, errorsObject] = validate(formData.value, validation);

    if (!result) {
        errors.value = errorsObject || {};
        return;
    }

    errors.value = {};

    const response = await sendFormToTelegram(formData.value);
    console.log("response", response);
    const json = await response.json();
    console.log("json", json);
    clean();
};
</script>

<style lang="scss">
.contacts {
    padding-top: 32px;
    background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%), #ffffff;

    @include tablet {
        padding-top: 38px;
        background-image: url("@/assets/img/contacts_bg.png");
        background-position: bottom left;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .mb18 {
        margin-bottom: 18px;
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

    &__banner {
        height: 260px;
        background-image: url("@/assets/img/laser_hand.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @include tablet {
            display: none;
        }
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
        row-gap: 2px;
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
