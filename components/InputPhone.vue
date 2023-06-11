<template>
    <InputText
        :model-value="value"
        :maxlength="pattern.length"
        placeholder="Номер телефона"
        inputmode="tel"
        @onInput="onInput"
        @onKeyDown="onKeyDown" />
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);
const pattern = "+7 (***) ***-**-**";

const value = computed(() => props.modelValue || "");

const onInput = (e: any) => {
    const value = onPhoneInput(e);
    emit("update:modelValue", value);
};
const onKeyDown = (e: any) => {
    const value = onPhoneKeyDown(e);
    emit("update:modelValue", value);
};
</script>
