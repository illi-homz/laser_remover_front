<template>
    <div class="pagination">
        <div class="pagination__btn-wrap" @click="toBackward">
            <nuxt-icon name="chevronBack" class="pagination__btn" filled :class="{ disable: isFirst }" />
        </div>

        <div class="pagination__text">{{ props.current }} / {{ props.total }}</div>

        <div class="pagination__btn-wrap" @click="toForward">
            <nuxt-icon name="chevronForward" class="pagination__btn" filled :class="{ disable: isLast }" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    current: number;
    total: number;
    isInfinity?: boolean;
}>();
const emit = defineEmits(["onBack", "onForward"]);

const isFirst = computed(() => props.current === 1 && !props.isInfinity);
const isLast = computed(() => props.current === props.total && !props.isInfinity);

const toBackward = () => !isFirst.value && emit("onBack");
const toForward = () => !isLast.value && emit("onForward");
</script>

<style lang="scss">
.pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__btn-wrap {
        padding: 8px;
        cursor: pointer;
    }

    &__btn {
        &.disable path {
            stroke: $grayDark2;
        }
    }

    &__text {
        font-family: "Mont", sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 90%;
        text-transform: uppercase;
        color: $white;
        margin: 0 28px;
        user-select: none;
    }
}
</style>
