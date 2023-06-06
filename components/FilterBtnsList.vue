<template>
    <ul class="filter-btns-list">
        <li
            v-for="{ id, title, value } in props.items"
            :key="id"
            @click="onItemClick(value)"
            class="filter-btns-list__item btn btn--outlined">
            {{ title }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { FilterBtnsItemType } from "~/types";

const props = defineProps<{
    items?: FilterBtnsItemType[];
}>();

const emit = defineEmits<{
    (e: "onItemClick", value: string): void;
}>();

const onItemClick = (value: string) => emit("onItemClick", value);
</script>

<style lang="scss">
.filter-btns-list {
    display: flex;
    column-gap: 24px;

    & &__item {
        font-family: "Mont", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 40px;
        color: $white;
        border: 2px solid $white;
    }
}
</style>
