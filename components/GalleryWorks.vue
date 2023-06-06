<template>
    <div class="gallery-works">
        <Gallery :slides-per-view="3" :space-between="20">
            <template v-slot:filters>
                <FilterBtnsList
                    :items="filters"
                    @onItemClick="onFilterClick"
                    class="no-scrollbar gallery-works__filter-btns" />
            </template>

            <template v-slot:slides>
                <SwiperSlide
                    v-for="{ id, img, description, sessionsCount } in filteredSlides"
                    :key="id"
                    class="gallery-works__slide">
                    <div class="gallery-works__slide-img" :style="`background-image: url(${img});`">
                        <!-- <img :src="img" alt="мои работы" height="100" /> -->
                    </div>
                    <div class="gallery-works__slide-info">
                        <h3 class="gallery-works__slide-text">{{ description }}</h3>
                        <div class="gallery-works__slide-text">#{{ sessionsCount }} сеансов</div>
                    </div>
                </SwiperSlide>
            </template>
        </Gallery>
    </div>
</template>

<script setup lang="ts">
import { FilterBtnsItemType } from "~/types";

const filters: FilterBtnsItemType[] = [
    { id: 0, title: "Все", value: "all" },
    { id: 1, title: "Татуировки", value: "tattoos" },
    { id: 2, title: "Брови", value: "eyebrow" },
    { id: 3, title: "Веки", value: "eaves" },
    { id: 4, title: "Губы", value: "lips" },
    { id: 5, title: "Процесс", value: "process" },
];
const activeFilter = ref();

const onFilterClick = (v: string) => {
    activeFilter.value = v === "all" ? undefined : v;
};

const slides = [
    {
        id: 0,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "tattoos",
    },
    {
        id: 1,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "eyebrow",
    },
    {
        id: 2,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "eaves",
    },
    {
        id: 3,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "lips",
    },
    {
        id: 4,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "process",
    },
    {
        id: 5,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "tattoos",
    },
    {
        id: 6,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки",
        sessionsCount: 6,
        type: "eyebrow",
    },
];

const filteredSlides = computed(() =>
    slides.filter(({ type }) => {
        if (!activeFilter.value) return true;
        return activeFilter.value === type;
    })
);
</script>

<style lang="scss">
.gallery-works {
    &__slide {
        height: 443px;
        display: flex;
        flex-direction: column;
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
