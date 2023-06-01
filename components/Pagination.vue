<template>
    <div class="pagination">
        <div class="pagination__btn-wrap" @click="onBack">
            <nuxt-icon name="chevronBack" class="pagination__btn" filled :class="{ disable: isDisabled }" />
        </div>

        <!-- <div class="pagination__text">{{ props.current }} / {{ total }}</div> -->
        <div class="pagination__text">{{ props.current }} / {{ total }}</div>

        <div class="pagination__btn-wrap" @click="onForward">
            <nuxt-icon name="chevronForward" class="pagination__btn" filled />
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

const total = props.total;
const isInfinity = props.isInfinity || false;
const isDisabled = computed(() => props.current === 1 && !isInfinity)
const isTotal = computed(() => props.current === props.total && !isInfinity)

const onBack = () => {
    !isDisabled.value && emit("onBack")
};
const onForward = () => {
    !isTotal.value && emit("onForward")
};
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
