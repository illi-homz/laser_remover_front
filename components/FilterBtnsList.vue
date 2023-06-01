<template>
    <div class="filter-btns-list">
        <ul class="filter-btns-list__list">
            <li
                v-for="{ id, title, value } in filters"
                :key="id"
                @click="onItemClick(value)"
                class="filter-btns-list__item btn btn--outlined">
                {{ title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { FilterBtnsItemType } from "~/types";

const props = defineProps<{
    items?: FilterBtnsItemType[];
}>();
const emit = defineEmits<{
    (e: "onItemClick", value: string): void;
}>();

const filters = props.items || [];

const onItemClick = (value: string) => {
    emit("onItemClick", value);
};
</script>

<style lang="scss">
.filter-btns-list {
    &__list {
        display: flex;
        column-gap: 24px;
    }

    & &__item {
        font-family: "Mont", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 40px;
        color: $white;

        // display: flex;
        // align-items: center;
        // padding: 0px 16px;
        border: 2px solid $white;
        // border-radius: 2px;
    }
}
</style>
