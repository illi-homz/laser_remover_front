<template>
    <div class="main">
        <div class="main__header-wrapper">
            <div class="main__navbar" :style="`right: ${navbarRight}px`">
                <NavBar
                    class="container"
                    :links="links"
                    main-logo-link="#header"
                />
            </div>
            <Header />
        </div>
        <AboutMe class="container" />
        <GalleryWorks
            v-if="illustrations?.length"
            class="main__gallery-works"
            :types="types"
            :illustrations="illustrations"
            @on-img-click="onGalleryWorkImgClick"
        />
        <GalleryTextFeedbacks
            v-if="feedbacksText?.length"
            :items="feedbacksText"
        />
        <GalleryVideoFeedbacks
            v-if="feedbacksVideo?.length"
            :items="feedbacksVideo"
        />
        <Questions v-if="questions?.length" :questions="questions" />
        <Contacts :services="services" @submit="onSupportFromSubmit" />

        <PopupConfirm
            :visible="isConfirmVisible"
            @on-cancel="onConfirmModalClose"
            @on-close="onConfirmModalClose"
            @on-open="onModalOpen"
        />
        <PopupImgView
            ref="popupImgViewRef"
            @on-open="onModalOpen"
            @on-cancel="onModalClose"
            @on-close="onModalClose"
        />
    </div>
</template>

<script setup lang="ts">
import {
    AllFeedbacksTextType,
    AllFeedbacksVideoType,
    IllustrationType,
    IllustrationTypeType,
    LinkType,
    QuestionType,
    ServiceType,
} from "~/types";
import { useIndexData } from "@/api/useIndexData";

const description =
    "Получите профессиональное и безопасное удаление татуировок лазером во Владикавказе от опытного мастера. Удаление татуировки лазером - эффективный способ избавиться от нежелательной татуировки. Наш мастер также предоставляет услуги по обучению этой процедуре. Свяжитесь с нами прямо сейчас для консультации и записи на процедуру или обучение.";

useHead({
    title: "Михаил Кисиев | Лазерное удаление татуировок",
    meta: [{ name: "description", content: description }],
});

const isConfirmVisible = ref(false);
const navbarRight = ref(0);
const popupImgViewRef = ref<{ show(v: string): void } | null>(null);

const { data: fetchData } = await useIndexData();

const onModalOpen = (right: number) => {
    navbarRight.value = right;
};
const onModalClose = () => {
    navbarRight.value = 0;
};
const onConfirmModalClose = () => {
    onModalClose();
    isConfirmVisible.value = false;
};
const onSupportFromSubmit = () => {
    isConfirmVisible.value = !isConfirmVisible.value;
};
const onGalleryWorkImgClick = (url: string) => {
    popupImgViewRef.value?.show(url);
};

//@ts-ignore
const initData = computed(() => fetchData.value?.data);
//@ts-ignore
const illustrations = computed(
    (): IllustrationType[] | undefined =>
        initData.value?.allIllustrations?.items
);
//@ts-ignore
const types = computed(
    (): IllustrationTypeType[] | undefined =>
        initData.value?.allIllustrations?.types
);
//@ts-ignore
const feedbacksText = computed(
    (): AllFeedbacksTextType[] | undefined => initData.value?.allFeedbacksText
);
//@ts-ignore
const feedbacksVideo = computed(
    (): AllFeedbacksVideoType[] | undefined => initData.value?.allFeedbacksVideo
);
//@ts-ignore
const questions = computed(
    (): QuestionType[] | undefined => initData.value?.allQuestions
);
//@ts-ignore
const services = computed(
    (): ServiceType[] | undefined => initData.value?.allServices
);

const links = computed(() => {
    const lks: LinkType[] = [{ id: 0, title: "Обо мне", url: "#aboutme" }];

    illustrations.value?.length &&
        lks.push({ id: 1, title: "Галерея", url: "#gallery-works" });

    if (feedbacksText.value?.length || feedbacksVideo.value?.length) {
        lks.push({ id: 2, title: "Отзывы", url: "#gallery-text-feedbacks" });
    }

    questions.value?.length &&
        lks.push({ id: 3, title: "Частые вопросы", url: "#questions" });
    lks.push({ id: 4, title: "Контакты", url: "#contacts" });

    return lks;
});
</script>

<style lang="scss">
.main {
    position: relative;

    &__header-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: linear-gradient(99.51deg, #23252c 18.79%, #000000 100%);
    }

    &__navbar {
        margin-bottom: 40px;
        background: linear-gradient(98.79deg, #23252c 30.69%, #000000 100%);

        @include desktop {
            margin-bottom: 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
        }
    }

    .navbar {
        width: 100%;

        @include tablet {
        }

        @include desktop {
        }
    }

    .header {
        flex: 1;
    }

    &__gallery-works {
        @include desktop {
            .gallery {
                padding-bottom: 52px;
            }

            .gallery__swiper {
                padding: 20px;
                margin: 0 -20px;
            }

            .gallery__navbar {
                margin-bottom: 7px;
            }
        }
    }
}
</style>
