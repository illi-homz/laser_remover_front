<template>
    <div class="main">
        <div class="main__navbar">
            <NavBar class="container" :links="links" />
        </div>
        <div class="main__header-wrapper">
            <Header />
        </div>
        <AboutMe class="container" />
        <GalleryWorks
            v-if="illustrations?.length"
            class="main__gallery-works"
            :types="types"
            :illustrations="illustrations" />
        <GalleryTextFeedbacks v-if="feedbacksText?.length" :items="feedbacksText" />
        <GalleryVideoFeedbacks v-if="feedbacksVideo?.length" :items="feedbacksVideo" />
        <Questions v-if="questions?.length" :questions="questions" />
        <Contacts :services="services" />
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

useHead({
    title: "Михаил Кисиев | Лазерное удаление татуировок",
    meta: [{ name: "description", content: "Тут надо какое то описание ..." }],
});

const {
    data: { value: initData },
} = await useAsyncGql("initData");

//@ts-ignore
const illustrations = computed((): IllustrationType[] | undefined => initData?.allIllustrations?.items);
//@ts-ignore
const types = computed((): IllustrationTypeType[] | undefined => initData?.allIllustrations?.types);
//@ts-ignore
const feedbacksText = computed((): AllFeedbacksTextType[] | undefined => initData?.allFeedbacksText);
//@ts-ignore
const feedbacksVideo = computed((): AllFeedbacksVideoType[] | undefined => initData?.allFeedbacksVideo);
//@ts-ignore
const questions = computed((): QuestionType[] | undefined => initData?.allQuestions);
//@ts-ignore
const services = computed((): ServiceType[] | undefined => initData?.allServices);

const links = computed(() => {
    const lks: LinkType[] = [{ id: 0, title: "Обо мне", url: "#aboutme" }];

    illustrations.value?.length && lks.push({ id: 1, title: "Галерея", url: "#gallery-works" });

    if (feedbacksText.value?.length || feedbacksVideo.value?.length) {
        lks.push({ id: 2, title: "Отзывы", url: "#gallery-text-feedbacks" });
    }

    questions.value?.length && lks.push({ id: 3, title: "Частые вопросы", url: "#questions" });
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
        background: linear-gradient(98.79deg, #23252c 30.69%, #000000 100%);

        @include desktop {
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            z-index: 100;
        }
    }

    .navbar {
        width: 100%;
        // margin-bottom: 45px;

        @include tablet {
            // margin-bottom: 45px;
        }

        @include desktop {
            // position: absolute;
        }
    }

    .header {
        flex: 1;
    }
}
</style>
