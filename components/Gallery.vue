<template>
    <div class="gallery">
        <div class="container gallery__container">
            <div class="gallery__navbar">
                <div class="block-title gallery__block-title">{{ props.title || "gallery" }}</div>
                <slot name="filters" />
                <Pagination
                    :current="activeIndex"
                    :total="snapGrid"
                    class="gallery__pagination-top"
                    @on-back="onBackClick"
                    @on-forward="onForwardClick" />
            </div>
            <Swiper
                @swiper="(data) => onSwiper(data)"
                :slides-per-view="props.slidesPerView"
                :space-between="props.spaceBetween"
                class="gallery__swiper">
                <slot name="slides" />
            </Swiper>
            <Pagination
                :current="activeIndex"
                :total="snapGrid"
                class="gallery__pagination-bottom"
                @on-back="onBackClick"
                @on-forward="onForwardClick" />
        </div>
    </div>
</template>

<script setup lang="ts">
const swiper = ref();

const props = defineProps<{
    title?: string;
    slidesPerView?: number;
    spaceBetween?: number;
}>();

const onSwiper = (data: any) => {
    swiper.value = data;
};
const activeIndex = computed(() => swiper.value?.activeIndex + 1);
const snapGrid = computed(() => swiper.value?.snapGrid?.length || 0);

const onBackClick = () => swiper.value.slidePrev(300);
const onForwardClick = () => {
    swiper.value.slideNext(300);
    console.log("swiper.value", swiper.value);
};
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
