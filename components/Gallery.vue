<template>
    <div class="gallery">
        <div class="container">
            <div class="gallery__navbar">
                <div class="block-title gallery__block-title">gallery</div>
                <FilterBtnsList :items="filters" />
                <Pagination :current="count" :total="6" @on-back="onBackClick" @on-forward="onForwardClick" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FilterBtnsItemType } from "~/types";

const filters: FilterBtnsItemType[] = [
    { id: 0, title: "Все", value: "all" },
    { id: 0, title: "Татуировки", value: "tattoos" },
    { id: 0, title: "Брови", value: "eyebrow" },
    { id: 0, title: "Веки", value: "eaves" },
    { id: 0, title: "Губы", value: "lips" },
    { id: 0, title: "Процесс", value: "process" },
];

const count = ref(1)

const onBackClick = () => {
    console.log("onBackClick");
    count.value--;
};
const onForwardClick = () => {
    count.value++;
};
</script>

<style lang="scss">
.gallery {
    background-color: $black;

    &__navbar {
        display: flex;
        align-items: center;
        column-gap: 36px;
    }

    &__block-title {
    }
}
</style>
