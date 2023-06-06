<template>
    <div class="gallery-works">
        <Gallery :slides-per-view="3" :space-between="20">
            <template v-slot:filters>
                <FilterBtnsList :items="filters" />
            </template>

            <template v-slot:slides>
                <SwiperSlide v-for="{ id, img } in slides" :key="id">
                    <img :src="img" alt="мои работы" height="100" />
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

const slides = [
    {
        id: 0,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "tattoos",
    },
    {
        id: 1,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "eyebrow",
    },
    {
        id: 2,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "eaves",
    },
    {
        id: 3,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "lips",
    },
    {
        id: 4,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "process",
    },
    {
        id: 5,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "tattoos",
    },
    {
        id: 6,
        img: "http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg",
        description: "#Удаление татуировки\n#6 сеансов",
        type: "eyebrow",
    },
];
</script>

<style lang="scss">
.gallery-works {
}
</style>
