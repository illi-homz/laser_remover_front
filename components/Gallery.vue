<template>
    <div class="gallery">
        <div class="container">
            <div class="gallery__navbar">
                <div class="block-title gallery__block-title">{{ props.title || 'gallery' }}</div>
                <slot name="filters" />
                <Pagination
                    :current="activeIndex"
                    :total="snapGrid"
                    @on-back="onBackClick"
                    @on-forward="onForwardClick" />
            </div>
            <Swiper @swiper="(data) => onSwiper(data)" :slides-per-view="props.slidesPerView" :space-between="props.spaceBetween">
                <slot name="slides" />
            </Swiper>
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
    swiper.value.slideNext(300)
    console.log('swiper.value', swiper.value)
};
</script>

<style lang="scss">
.gallery {
    background-color: $black;
    padding-top: 48px;
    padding-bottom: 72px;

    &__navbar {
        display: flex;
        align-items: center;
        column-gap: 36px;
        justify-content: space-between;
    }

    &__block-title {
    }
}
</style>
