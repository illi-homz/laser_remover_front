<template>
    <div class="gallery-video-feedbacks">
        <Gallery
            title="Видео-отзывы"
            :slides-per-view="1"
            :space-between="10"
            :breakpoints="{
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            }">
            <template v-slot:slides>
                <SwiperSlide
                    v-for="({ id, video }, idx) in props.items"
                    :key="id"
                    class="gallery-video-feedbacks__slide">
                    <div
                        v-if="idx !== activeIndex"
                        class="gallery-video-feedbacks__slide-action"
                        @click="playVideo(idx)">
                        <div class="btn btn--outlined btn--play gallery-video-feedbacks__slide-action-btn">
                            <nuxt-icon name="play" class="gallery-video-feedbacks__play" filled />
                        </div>
                    </div>
                    <video
                        ref="videos"
                        :muted="idx !== activeIndex"
                        loop
                        playsinline
                        preload="auto"
                        @click="playVideo(idx)"
                        class="gallery-video-feedbacks__video-item">
                        <source :src="MEDIAFILES_URL + video" type="video/mp4" />
                    </video>
                </SwiperSlide>
            </template>
        </Gallery>
    </div>
</template>

<script setup lang="ts">
import { AllFeedbacksVideoType } from "~/types";

const props = defineProps<{
    items: AllFeedbacksVideoType[];
}>();

const videos = ref<HTMLVideoElement[] | null>(null);
const activeIndex = ref<number | null>(null);

const playVideo = (idx: number) => {
    if (activeIndex.value !== null) {
        const prevVideo = videos.value?.[activeIndex.value]
        prevVideo?.pause();
    }

    const currentVideo = videos.value?.[idx]
    
    if (activeIndex.value === idx) {
        activeIndex.value = null;
        currentVideo?.pause();
        return;
    }

    currentVideo?.play();

    activeIndex.value = idx;
};
</script>

<style lang="scss">
.gallery-video-feedbacks {
    .gallery__swiper {
        padding-right: 75px;

        @include mobile {
            padding-right: 24px;
        }
    }
    
    &__slide {
        // width: 280px;
        height: 412px;
        position: relative;
        border: 5px solid $white;
        border-radius: 2px;
    }

    &__video-item {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__item-text {
    }

    &__slide-action {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(0deg, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)), url(.jpg);

        &:hover {
            .gallery-video-feedbacks__slide-action-btn {
                background-color: $accent;
                border-color: $accent;

                svg path {
                fill: $white;
            }
            }
        }
    }

    & &__slide-action-btn {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $white;

        svg path {
            fill: $black;
        }
    }
}
</style>
