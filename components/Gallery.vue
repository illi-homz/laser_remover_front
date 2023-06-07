<template>
    <div class="gallery">
        <div class="container gallery__container">
            <div class="gallery__navbar">
                <div class="block-title gallery__block-title">{{ props.title || "gallery" }}</div>
                <slot name="filters" />
                <Pagination
                    :current="activeSlideIndex"
                    :total="slidesCount"
                    class="gallery__pagination-top"
                    @on-back="onBackClick"
                    @on-forward="onForwardClick" />
            </div>
            <Swiper
                :slides-per-view="props.slidesPerView"
                :space-between="props.spaceBetween"
                :breakpoints="breakpoints"
                class="gallery__swiper"
                @init="onInit"
                @activeIndexChange="onActiveIndexChange"
                @beforeResize="beforeSwiperResize">
                <slot name="slides" />
            </Swiper>
            <Pagination
                :current="activeSlideIndex"
                :total="slidesCount"
                class="gallery__pagination-bottom"
                @on-back="onBackClick"
                @on-forward="onForwardClick" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper as SwiperType } from "swiper";

const props = defineProps<{
    title?: string;
    slidesPerView?: number;
    spaceBetween?: number;
    breakpoints?: any;
}>();

const swiper = ref();
const slidesCount = ref(0);
const activeSlideIndex = ref(1);

const onActiveIndexChange = ({ snapIndex }: SwiperType) => {
    activeSlideIndex.value = snapIndex + 1;
};
const beforeSwiperResize = ({ snapGrid }: SwiperType) => {
    slidesCount.value = snapGrid.length;
};
const onInit = (data: SwiperType) => {
    swiper.value = data;
    slidesCount.value = data.snapGrid.length;
};
const onBackClick = () => swiper.value.slidePrev(300);
const onForwardClick = () => swiper.value.slideNext(300);
</script>

<style lang="scss">
.gallery {
    background-color: $black;
    padding-top: 48px;
    padding-bottom: 72px;

    & &__container {
        padding-left: 0px;
        padding-right: 0px;

        @include tablet {
            padding-left: 24px;
            padding-right: 24px;
        }

        @include desktop {
            padding-left: 130px;
            padding-right: 130px;
        }
    }

    &__navbar {
        margin-bottom: 20px;

        @include tablet {
            display: flex;
            align-items: center;
            column-gap: 36px;
            justify-content: space-between;
            margin-bottom: 27px;
        }
    }

    &__block-title {
        // font-family: $palladio;
        margin-bottom: 36px;
        padding-left: 24px;
        padding-right: 24px;

        @include tablet {
            margin-bottom: 0;
            padding-left: 0;
            padding-right: 0;
        }
    }

    &__pagination-top {
        display: none;

        @include tablet {
            display: flex;
        }
    }

    &__pagination-bottom {
        margin-top: 32px;

        @include tablet {
            display: none;
        }
    }

    &__swiper {
        padding-left: 24px;
        padding-right: 24px;

        @include tablet {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
</style>
