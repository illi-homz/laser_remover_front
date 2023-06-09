<template>
    <div class="input-text" :class="{ error: !!props.error }">
        <div class="input-text__error">{{ props.error || '-' }}</div>
        <div class="input-text__wrapper">
            <input
                type="text"
                :value="props.modelValue"
                class="input-text__input"
                :inputmode="props.inputmode || 'text'"
                :placeholder="props.placeholder"
                :maxlength="props.maxlength?.toString()"
                @input="onInput"
                @keydown="onKeyDown" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue?: string;
    placeholder?: string;
    maxlength?: string | number;
    inputmode?: "text" | "decimal" | "numeric" | "tel" | "email" | "url";
    error?: string;
}>();

const emit = defineEmits(["update:modelValue", "onInput", "onKeyDown"]);

const onInput = (e: any) => {
    emit("update:modelValue", e.target.value);
    emit("onInput", e);
};
const onKeyDown = (e: any) => {
    emit("onKeyDown", e);
};
</script>

<style lang="scss">
.input-text {
    &.error {
        .input-text__wrapper {
            border-color: $red;
        }
        .input-text__error {
            opacity: 1;
        }
    }
    
    &__wrapper {
        border: 1px solid $grayMedium;
        border-radius: 2px;
        padding: 12px 16px;
        transition: all .3s ease;
    }

    &__error {
        font-family: $mont;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: $red;
        margin-bottom: 2px;
        opacity: 0;
        transition: all .3s ease;
    }

    &__input {
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: $black;
        width: 100%;

        &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: $grayMedium;
            opacity: 1; /* Firefox */
        }

        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: $grayMedium;
        }

        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: $grayMedium;
        }
    }
}
</style>
