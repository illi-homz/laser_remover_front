<template>
    <div class="main">
        <div class="main__header-wrapper">
            <NavBar class="container" />
            <Header />
        </div>
        <AboutMe class="container" />
        <GalleryWorks v-if="illustrations" class="main__gallery-works" :types="types" :illustrations="illustrations" />
        <GalleryTextFeedbacks v-if="feedbacksText" :items="feedbacksText" />
        <GalleryVideoFeedbacks v-if="feedbacksVideo" :items="feedbacksVideo" />
        <Questions v-if="questions" :questions="questions" />
        <Contacts />
    </div>
</template>

<script setup lang="ts">
import {
    AllFeedbacksTextType,
    AllFeedbacksVideoType,
    IllustrationType,
    IllustrationTypeType,
    QuestionType,
} from "~/types";

const {
    data: { value: initData },
} = await useAsyncGql("initData");

//@ts-ignore
const illustrations: IllustrationType[] | undefined = computed(() => initData?.allIllustrations?.items);
//@ts-ignore
const types: IllustrationTypeType[] | undefined = computed(() => initData?.allIllustrations?.types);
//@ts-ignore
const feedbacksText: AllFeedbacksTextType[] | undefined = computed(() => initData?.allFeedbacksText);
//@ts-ignore
const feedbacksVideo: AllFeedbacksVideoType[] | undefined = computed(() => initData?.allFeedbacksVideo);
//@ts-ignore
const questions: QuestionType[] | undefined = computed(() => initData?.allQuestions);

// const allAnys = toRaw(allAnysValue)?.allAnys;
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

    .navbar {
        width: 100%;
        margin-bottom: 45px;

        @include tablet {
            margin-bottom: 45px;
        }

        @include desktop {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }
    }

    .header {
        flex: 1;
    }
}
</style>
