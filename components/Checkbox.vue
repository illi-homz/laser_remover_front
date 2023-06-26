<template>
    <div class="checkbox" :class="{ checked: props.modelValue }" @click="onItemClick()">
        <div class="checkbox__icon" />
        <div class="checkbox__text">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    modelValue: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const onItemClick = () => {
    emit("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss">
.checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;

    &.checked {
        .checkbox__icon {
            background-color: $black;
            border-color: $transparent;
            &::after {
                opacity: 1;
            }
        }
    }

    &__icon {
        width: 18px;
        height: 18px;
        border: 2px solid $grayMedium;
        border-radius: 2px;
        position: relative;
        transition: all .2s ease;

        &::after {
            content: "";
            position: absolute;
            background: url('@/assets/icons/check.svg') center no-repeat;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10.8px;
            height: 9px;
            transition: opacity .2s ease;
            opacity: 0;
        }
    }

    &__text {
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: $black;
        margin-left: 11px;
    }
}
</style>
