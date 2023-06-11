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
            &::after {
                opacity: .7;
                visibility: visible;
            }
        }
    }

    &__icon {
        width: 18px;
        height: 18px;
        border: 2px solid $grayMedium;
        border-radius: 2px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            border-radius: 2px;
            background-color: $black;
            transition: all .2s ease;
            opacity: 0;
            visibility: hidden;
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
