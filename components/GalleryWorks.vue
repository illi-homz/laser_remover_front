<template>
    <div class="gallery-works" id="gallery-works">
        <Gallery
            :slides-per-view="1"
            :space-between="0"
            :breakpoints="{
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            }"
        >
            <template v-slot:filters>
                <FilterBtnsList
                    v-if="!!props.types"
                    :items="props.types"
                    @onItemClick="onFilterClick"
                    class="no-scrollbar gallery-works__filter-btns"
                />
            </template>

            <template v-slot:slides>
                <SwiperSlide
                    v-for="{ id, img, title, count } in filteredSlides"
                    :key="id"
                    class="gallery-works__slide"
                >
                    <div
                        class="gallery-works__slide-img"
                        :style="`background-image: url(${
                            MEDIAFILES_URL + img
                        });`"
                        @click="onImgClick(MEDIAFILES_URL + img)"
                    />
                    <div class="gallery-works__slide-info">
                        <h3 class="gallery-works__slide-text">{{ title }}</h3>
                        <div class="gallery-works__slide-text">
                            {{ count }}
                            {{
                                declOfNum(count, ["сеанс", "сеанса", "сеансов"])
                            }}
                        </div>
                    </div>
                </SwiperSlide>
            </template>
        </Gallery>
    </div>
</template>

<script setup lang="ts">
import { IllustrationTypeType, IllustrationType } from "~/types";
import { MEDIAFILES_URL } from "~/utils/variables";
import { declOfNum } from "~/utils";

const emit = defineEmits(["onImgClick"]);

const onImgClick = (u: string) => {
    emit('onImgClick', u)
}

const props = defineProps<{
    illustrations?: IllustrationType[];
    types?: IllustrationTypeType[];
}>();

const activeFilter = ref();

const onFilterClick = (v: string) => {
    activeFilter.value = v === "all" ? undefined : v;
};

const filteredSlides = computed(() => {
    return props.illustrations?.filter(({ type }) => {
        if (!activeFilter.value) return true;

        return activeFilter.value === type;
    });
});
</script>

<style lang="scss">
.gallery-works {
    .gallery__swiper {
        padding-left: 0;
        padding-right: 0;
    }

    &__slide {
        height: 443px;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.08);
        }
    }

    &__slide-img {
        flex: 1;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    &__slide-info {
        padding: 24px;
        background-color: $white;
    }

    &__slide-text {
        font-family: $mont;
        font-size: 20px;
        line-height: 32px;
        color: $grayDark2;

        &:first-child {
            margin-bottom: 4px;
        }
    }

    &__filter-btns {
        width: 100%;
        overflow-x: scroll;
        padding-left: 24px;
        padding-right: 24px;

        @include tablet {
            width: auto;
        }
    }
}
</style>
